const fs = require('fs');
const path = require('path');

(function ensurePagesUnderSrc() {
  const root = process.cwd();
  const rootPages = path.join(root, 'pages');
  const srcPages = path.join(root, 'src', 'pages');
  const srcDir = path.join(root, 'src');

  try {
    if (fs.existsSync(srcPages)) {
      console.log('src/pages already exists — nothing to do.');
      return;
    }

    if (!fs.existsSync(rootPages)) {
      console.log('No top-level pages directory found — nothing to move.');
      return;
    }

    // Ensure src directory exists
    if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });

    // Move pages -> src/pages
    fs.renameSync(rootPages, srcPages);
    console.log('Moved pages -> src/pages');
  } catch (err) {
    console.error('Failed to ensure pages under src:', err);
    process.exitCode = 1;
  }
})();
