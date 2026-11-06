import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const targetUrl = 'file:///C:/Users/viswajeet/.gemini/antigravity/scratch/godrej-interio-store/index.html';

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless=new',
  '--remote-debugging-port=9232',
  '--disable-gpu',
  '--window-size=1280,1000',
  'about:blank'
]);

setTimeout(async () => {
  try {
    const list = await new Promise((res, rej) => {
      http.get('http://127.0.0.1:9232/json', r => {
        let d = '';
        r.on('data', c => d += c);
        r.on('end', () => res(JSON.parse(d)));
      }).on('error', rej);
    });

    const pageTab = list.find(t => t.type === 'page');
    const ws = new globalThis.WebSocket(pageTab.webSocketDebuggerUrl);

    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
      ws.send(JSON.stringify({
        id: 2,
        method: 'Page.navigate',
        params: { url: targetUrl }
      }));
    };

    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.method === 'Page.loadEventFired') {
        console.log('Load event fired. Waiting 1.5s for React render...');
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 3,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        }, 1500);
      }
      if (msg.id === 3) {
        const buffer = Buffer.from(msg.result.data, 'base64');
        fs.writeFileSync('C:/Users/viswajeet/.gemini/antigravity/scratch/godrej-interio-store/full_page_screenshot.png', buffer);
        console.log('Saved full_page_screenshot.png! File size:', buffer.length);
        ws.close();
        edge.kill();
      }
    };
  } catch(e) { console.error(e); edge.kill(); }
}, 2000);
