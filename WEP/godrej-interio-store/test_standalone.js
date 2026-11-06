import { spawn } from 'child_process';
import http from 'http';

const filePath = 'file:///C:/Users/viswajeet/.gemini/antigravity/scratch/godrej-interio-store/standalone_store.html';

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless=new',
  '--remote-debugging-port=9225',
  '--disable-gpu',
  filePath
]);

setTimeout(async () => {
  try {
    const list = await new Promise((res, rej) => {
      http.get('http://127.0.0.1:9225/json', r => {
        let d = '';
        r.on('data', c => d += c);
        r.on('end', () => res(JSON.parse(d)));
      }).on('error', rej);
    });

    const pageTab = list.find(t => t.type === 'page');
    if (!pageTab) {
      console.log('No page tab found.');
      edge.kill();
      return;
    }

    const ws = new globalThis.WebSocket(pageTab.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
      ws.send(JSON.stringify({ id: 2, method: 'Log.enable' }));
      
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 3,
          method: 'Runtime.evaluate',
          params: { expression: 'document.getElementById("root").innerHTML.length' }
        }));
      }, 1500);
    };

    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.method === 'Runtime.consoleAPICalled') {
        console.log('CONSOLE:', msg.params.type, msg.params.args.map(a => a.value));
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        console.error('EXCEPTION:', JSON.stringify(msg.params.exceptionDetails));
      }
      if (msg.id === 3) {
        console.log('FINAL ROOT LENGTH on file://:', msg.result.result.value);
        ws.close();
        edge.kill();
      }
    };
  } catch(e) {
    console.error(e);
    edge.kill();
  }
}, 2000);
