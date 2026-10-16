import fs from 'fs';
import path from 'path';

const targetFile = path.resolve('node_modules/next/dist/lib/recursive-delete.js');

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8');
  if (content.includes('const linkPath = await _fs.promises.readlink(absolutePath);')) {
    content = content.replace(
      'const linkPath = await _fs.promises.readlink(absolutePath);',
      'let linkPath = null;\ntry { linkPath = await _fs.promises.readlink(absolutePath); } catch { isSymlink = false; }'
    );
    content = content.replace('const isSymlink = part.isSymbolicLink();', 'let isSymlink = part.isSymbolicLink();');
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('[PATCH] Successfully applied OneDrive readlink fix to Next.js recursive-delete.js');
  } else {
    console.log('[PATCH] Next.js recursive-delete.js is already patched.');
  }
}
