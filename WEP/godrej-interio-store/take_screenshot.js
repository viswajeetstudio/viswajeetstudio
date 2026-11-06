import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const targetUrl = 'file:///C:/Users/viswajeet/.gemini/antigravity/scratch/godrej-interio-store/index.html';

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless=new',
  '--remote-debugging-port=9231',
  '--disable-gpu',
  '--window-size=1280,1000',
  targetUrl
]);

setTimeout(async () => {
  try {
    const list = await new Promise((res, rej) => {
      http.get('http://127.0.0.1:9231/json', r => {
        let d = '';
        r.on('data', c => d += c);
        r.on('end', () => res(JSON.parse(d)));
      }).on('error', rej);
    });

    const pageTab = list.find(t => t.type === 'page');
    const ws = new globalThis.WebSocket(pageTab.webSocketDebuggerUrl);

    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Page.captureScreenshot',
          params: { format: 'png' }
        }));
      }, 1500);
    };

    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === 2) {
        const buffer = Buffer.from(msg.result.data, 'base64');
        fs.writeFileSync('C:/Users/viswajeet/.gemini/antigravity/scratch/godrej-interio-store/rendered_proof.png', buffer);
        console.log('Saved rendered_proof.png! File size:', buffer.length);
        ws.close();
        edge.kill();
      }
    };
  } catch(e) { console.error(e); edge.kill(); }
}, 2000);
