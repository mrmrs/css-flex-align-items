const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const srcFile = path.join(__dirname, 'src', 'flex-align-items.css');
const distDir = path.join(__dirname, 'dist');

// Read source
const source = fs.readFileSync(srcFile, 'utf8');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Unminified — just normalize formatting
const { code: unminified } = transform({
  filename: 'flex-align-items.css',
  code: Buffer.from(source),
  minify: false,
});

fs.writeFileSync(path.join(distDir, 'flex-align-items.css'), unminified);

// Minified
const { code: minified } = transform({
  filename: 'flex-align-items.css',
  code: Buffer.from(source),
  minify: true,
});

fs.writeFileSync(path.join(distDir, 'flex-align-items.min.css'), minified);

console.log('Build complete:');
console.log(`  dist/flex-align-items.css     ${unminified.length} bytes`);
console.log(`  dist/flex-align-items.min.css ${minified.length} bytes`);
