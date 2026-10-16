import { describe, it, expect, beforeEach } from 'vitest';
import { VirtualFileSystem } from '@/lib/terminal/virtualFs';

describe('VirtualFileSystem Unit Tests', () => {
  let vfs: VirtualFileSystem;

  beforeEach(() => {
    vfs = new VirtualFileSystem();
  });

  describe('Initialization & Directory Navigation', () => {
    it('initializes at /home/learner/workspace with README.md', () => {
      expect(vfs.getPwd()).toBe('/home/learner/workspace');
      const files = vfs.ls();
      expect(Array.isArray(files)).toBe(true);
      if (Array.isArray(files)) {
        expect(files.some((f) => f.name === 'README.md')).toBe(true);
      }
    });

    it('navigates with cd to parent, root, and home (~)', () => {
      const cdParent = vfs.cd('..');
      expect(cdParent.success).toBe(true);
      expect(vfs.getPwd()).toBe('/home/learner');

      const cdHome = vfs.cd('~');
      expect(cdHome.success).toBe(true);
      expect(vfs.getPwd()).toBe('/home/learner');

      const cdWorkspace = vfs.cd('workspace');
      expect(cdWorkspace.success).toBe(true);
      expect(vfs.getPwd()).toBe('/home/learner/workspace');

      const cdRoot = vfs.cd('/');
      expect(cdRoot.success).toBe(true);
      expect(vfs.getPwd()).toBe('/');
    });

    it('returns error when cd to a non-existent path', () => {
      const res = vfs.cd('invalid_folder');
      expect(res.success).toBe(false);
      expect(res.error).toContain('no such file or directory');
    });
  });

  describe('File & Directory Manipulation', () => {
    it('creates directories with mkdir and lists them', () => {
      const res = vfs.mkdir('src');
      expect(res.success).toBe(true);

      const files = vfs.ls();
      expect(Array.isArray(files)).toBe(true);
      if (Array.isArray(files)) {
        const srcDir = files.find((f) => f.name === 'src');
        expect(srcDir).toBeDefined();
        expect(srcDir?.isDir).toBe(true);
      }
    });

    it('creates and reads files with touch and cat', () => {
      const touchRes = vfs.touch('app.js', 'console.log("Hello Kodeluma");');
      expect(touchRes.success).toBe(true);

      const catRes = vfs.cat('app.js');
      expect(catRes.error).toBeUndefined();
      expect(catRes.content).toBe('console.log("Hello Kodeluma");');
    });

    it('removes files with rm', () => {
      vfs.touch('temp.txt', 'temporary file');
      const rmRes = vfs.rm('temp.txt');
      expect(rmRes.success).toBe(true);

      const catRes = vfs.cat('temp.txt');
      expect(catRes.error).toContain('No such file or directory');
    });

    it('returns error when catting a directory', () => {
      vfs.mkdir('my-folder');
      const catRes = vfs.cat('my-folder');
      expect(catRes.error).toContain('Is a directory');
    });
  });

  describe('Git Workflow Emulation', () => {
    it('fails git status before git init', () => {
      const status = vfs.gitStatus();
      expect(status).toContain('fatal: not a git repository');
    });

    it('initializes git repository and tracks untracked files', () => {
      const initOutput = vfs.gitInit();
      expect(initOutput).toContain('Initialized empty Git repository');

      const status = vfs.gitStatus();
      expect(status).toContain('Untracked files:');
      expect(status).toContain('README.md');
    });

    it('stages files with git add and commits with git commit', () => {
      vfs.gitInit();
      vfs.touch('index.html', '<h1>Test</h1>');

      vfs.gitAdd('index.html');
      let status = vfs.gitStatus();
      expect(status).toContain('Changes to be committed:');
      expect(status).toContain('index.html');

      const commitRes = vfs.gitCommit('feat: add index.html');
      expect(commitRes).toContain('feat: add index.html');

      status = vfs.gitStatus();
      // README.md is still untracked
      expect(status).not.toContain('Changes to be committed:');

      const log = vfs.gitLog();
      expect(log).toContain('feat: add index.html');
      expect(log).toContain('commit');
    });
  });
});
