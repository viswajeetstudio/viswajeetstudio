import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const htmlPath = path.join(distDir, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Find css file if separate
const cssMatch = html.match(/href="\.\/assets\/([^"]+\.css)"/);
if (cssMatch) {
  const cssFile = path.join(distDir, 'assets', cssMatch[1]);
  const cssContent = fs.readFileSync(cssFile, 'utf8');
  html = html.replace(`<link rel="stylesheet" crossorigin href="./assets/${cssMatch[1]}">`, () => `<style>\n${cssContent}\n</style>`);
}

// Find js file
const jsMatch = html.match(/src="\.\/assets\/([^"]+\.js)"/);
if (jsMatch) {
  const jsFile = path.join(distDir, 'assets', jsMatch[1]);
  const jsContent = fs.readFileSync(jsFile, 'utf8');
  
  // Remove the old script tag in head
  html = html.replace(new RegExp(`<script[^>]*src="\\./assets/${jsMatch[1]}"[^>]*></script>`), '');

  // Inject the script before </body> so #root exists when script executes
  const scriptTag = `<script>\n${jsContent}\n</script>\n</body>`;
  html = html.replace('</body>', () => scriptTag);
}

// Write to:
// 1. standalone_store.html (Dedicated offline zero-server version)
// 2. index.html (Root home file so double-clicking index.html works directly!)
// 3. dist/index.html (Production build)
fs.writeFileSync(path.join(__dirname, 'standalone_store.html'), html);
fs.writeFileSync(path.join(__dirname, 'index.html'), html);
fs.writeFileSync(path.join(distDir, 'index.html'), html);

console.log('Successfully written index.html and standalone_store.html! Size:', html.length);
