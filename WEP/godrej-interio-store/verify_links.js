import fs from 'fs';

const html = fs.readFileSync('C:/Users/viswajeet/.gemini/antigravity/scratch/godrej-interio-store/index.html', 'utf8');

const srcMatches = [...html.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1]);
const hrefMatches = [...html.matchAll(/href=["']([^"']+)["']/gi)].map(m => m[1]);

console.log('Total src attributes:', srcMatches.length);
console.log('Local relative src:', srcMatches.filter(s => !s.startsWith('http') && !s.startsWith('data:')));
console.log('Local relative href:', hrefMatches.filter(s => !s.startsWith('http') && !s.startsWith('#') && !s.startsWith('data:') && !s.startsWith('tel:') && !s.startsWith('mailto:')));
