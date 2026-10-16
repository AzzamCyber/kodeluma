export interface VfsNode {
  name: string;
  isDir: boolean;
  content?: string;
  children?: Map<string, VfsNode>;
}

export interface GitCommit {
  hash: string;
  message: string;
  author: string;
  timestamp: string;
}

export interface GitState {
  initialized: boolean;
  staged: string[];
  commits: GitCommit[];
}

export class VirtualFileSystem {
  root: VfsNode;
  currentPath: string[]; // e.g. ['home', 'learner', 'workspace']
  gitState: GitState;

  constructor() {
    this.root = {
      name: '/',
      isDir: true,
      children: new Map(),
    };

    // Pre-populate /home/learner/workspace
    this.currentPath = ['home', 'learner', 'workspace'];
    this.mkdir('/home');
    this.mkdir('/home/learner');
    this.mkdir('/home/learner/workspace');
    this.touch('/home/learner/workspace/README.md', '# Proyek Pertama Kodeluma\nSelamat datang di terminal virtual!');

    this.gitState = {
      initialized: false,
      staged: [],
      commits: [],
    };
  }

  getPwd(): string {
    return '/' + this.currentPath.join('/');
  }

  private getNode(pathStr: string): VfsNode | null {
    const parts = this.resolvePathParts(pathStr);
    let curr = this.root;
    for (const part of parts) {
      if (!curr.isDir || !curr.children) return null;
      const next = curr.children.get(part);
      if (!next) return null;
      curr = next;
    }
    return curr;
  }

  private resolvePathParts(pathStr: string): string[] {
    const segments = pathStr.startsWith('/')
      ? pathStr.split('/').filter(Boolean)
      : [...this.currentPath, ...pathStr.split('/').filter(Boolean)];

    const resolved: string[] = [];
    for (const seg of segments) {
      if (seg === '.' || seg === '') continue;
      if (seg === '..') {
        resolved.pop();
      } else {
        resolved.push(seg);
      }
    }
    return resolved;
  }

  ls(target?: string): { name: string; isDir: boolean }[] | { error: string } {
    const node = target ? this.getNode(target) : this.getNode(this.getPwd());
    if (!node) return { error: `ls: cannot access '${target}': No such file or directory` };
    if (!node.isDir || !node.children) {
      return [{ name: node.name, isDir: false }];
    }
    return Array.from(node.children.values()).map((c) => ({
      name: c.name,
      isDir: c.isDir,
    }));
  }

  cd(pathStr: string): { success: boolean; error?: string } {
    if (!pathStr || pathStr === '~') {
      this.currentPath = ['home', 'learner'];
      return { success: true };
    }
    const resolved = this.resolvePathParts(pathStr);
    const node = this.getNode('/' + resolved.join('/'));
    if (!node) return { success: false, error: `cd: no such file or directory: ${pathStr}` };
    if (!node.isDir) return { success: false, error: `cd: not a directory: ${pathStr}` };
    this.currentPath = resolved;
    return { success: true };
  }

  mkdir(pathStr: string): { success: boolean; error?: string } {
    const parts = this.resolvePathParts(pathStr);
    if (parts.length === 0) return { success: false, error: 'mkdir: missing operand' };

    let curr = this.root;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (!curr.children) curr.children = new Map();
      let next = curr.children.get(part);
      if (!next) {
        next = { name: part, isDir: true, children: new Map() };
        curr.children.set(part, next);
      } else if (!next.isDir && i < parts.length - 1) {
        return { success: false, error: `mkdir: cannot create directory '${pathStr}': Not a directory` };
      }
      curr = next;
    }
    return { success: true };
  }

  touch(pathStr: string, content = ''): { success: boolean; error?: string } {
    const parts = this.resolvePathParts(pathStr);
    if (parts.length === 0) return { success: false, error: 'touch: missing file operand' };

    const fileName = parts.pop()!;
    const parentDirStr = '/' + parts.join('/');
    const parentNode = this.getNode(parentDirStr);

    if (!parentNode || !parentNode.isDir || !parentNode.children) {
      return { success: false, error: `touch: cannot touch '${pathStr}': No such file or directory` };
    }

    const existing = parentNode.children.get(fileName);
    if (existing) {
      if (!existing.isDir && content) existing.content = content;
    } else {
      parentNode.children.set(fileName, {
        name: fileName,
        isDir: false,
        content,
      });
    }
    return { success: true };
  }

  cat(pathStr: string): { content?: string; error?: string } {
    const node = this.getNode(pathStr);
    if (!node) return { error: `cat: ${pathStr}: No such file or directory` };
    if (node.isDir) return { error: `cat: ${pathStr}: Is a directory` };
    return { content: node.content || '' };
  }

  rm(pathStr: string): { success: boolean; error?: string } {
    const parts = this.resolvePathParts(pathStr);
    if (parts.length === 0) return { success: false, error: 'rm: missing operand' };

    const targetName = parts.pop()!;
    const parent = this.getNode('/' + parts.join('/'));
    if (!parent || !parent.children || !parent.children.has(targetName)) {
      return { success: false, error: `rm: cannot remove '${pathStr}': No such file or directory` };
    }
    parent.children.delete(targetName);
    return { success: true };
  }

  // Git operations
  gitInit(): string {
    if (this.gitState.initialized) {
      return 'Reinitialized existing Git repository in ' + this.getPwd() + '/.git/';
    }
    this.gitState.initialized = true;
    return 'Initialized empty Git repository in ' + this.getPwd() + '/.git/';
  }

  gitStatus(): string {
    if (!this.gitState.initialized) {
      return 'fatal: not a git repository (or any of the parent directories): .git';
    }

    const files = this.ls();
    if ('error' in files) return files.error;

    const fileNames = files.map((f) => f.name);
    const staged = this.gitState.staged;
    const untracked = fileNames.filter((f) => !staged.includes(f));

    let output = 'On branch master\n';
    if (staged.length === 0 && untracked.length === 0) {
      output += 'nothing to commit, working tree clean';
      return output;
    }

    if (staged.length > 0) {
      output += 'Changes to be committed:\n  (use "git restore --staged <file>..." to unstage)\n';
      for (const s of staged) {
        output += `\tnew file:   ${s}\n`;
      }
    }

    if (untracked.length > 0) {
      output += 'Untracked files:\n  (use "git add <file>..." to include in what will be committed)\n';
      for (const u of untracked) {
        output += `\t${u}\n`;
      }
    }
    return output.trim();
  }

  gitAdd(arg: string): string {
    if (!this.gitState.initialized) {
      return 'fatal: not a git repository (or any of the parent directories): .git';
    }
    const files = this.ls();
    if ('error' in files) return files.error;

    if (arg === '.' || arg === '-A') {
      this.gitState.staged = files.map((f) => f.name);
      return '';
    }

    const node = this.getNode(arg);
    if (!node) return `fatal: pathspec '${arg}' did not match any files`;

    if (!this.gitState.staged.includes(node.name)) {
      this.gitState.staged.push(node.name);
    }
    return '';
  }

  gitCommit(message: string): string {
    if (!this.gitState.initialized) {
      return 'fatal: not a git repository (or any of the parent directories): .git';
    }
    if (this.gitState.staged.length === 0) {
      return 'nothing to commit, working tree clean';
    }

    const hash = Math.random().toString(16).substring(2, 9);
    const commit: GitCommit = {
      hash,
      message: message || 'Update files',
      author: 'Ahmad Siswa <siswa@kodeluma.dev>',
      timestamp: new Date().toISOString(),
    };

    this.gitState.commits.unshift(commit);
    const fileCount = this.gitState.staged.length;
    this.gitState.staged = [];

    return `[master (root-commit) ${hash}] ${commit.message}\n ${fileCount} file(s) changed`;
  }

  gitLog(): string {
    if (!this.gitState.initialized) {
      return 'fatal: not a git repository (or any of the parent directories): .git';
    }
    if (this.gitState.commits.length === 0) {
      return 'fatal: your current branch master does not have any commits yet';
    }

    return this.gitState.commits
      .map(
        (c) =>
          `commit ${c.hash}\nAuthor: ${c.author}\nDate:   ${c.timestamp}\n\n    ${c.message}`
      )
      .join('\n\n');
  }
}
