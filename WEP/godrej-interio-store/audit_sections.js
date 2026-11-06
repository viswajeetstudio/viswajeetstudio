import { spawn } from 'child_process';
import http from 'http';

const targetUrl = 'file:///C:/Users/viswajeet/.gemini/antigravity/scratch/godrej-interio-store/index.html';

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless=new',
  '--remote-debugging-port=9233',
  '--disable-gpu',
  'about:blank'
]);

setTimeout(async () => {
  try {
    const list = await new Promise((res, rej) => {
      http.get('http://127.0.0.1:9233/json', r => {
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
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 3,
            method: 'Runtime.evaluate',
            params: {
              expression: `JSON.stringify({
                title: document.title,
                sections: {
                  nav: !!document.querySelector('header'),
                  hero: !!document.getElementById('home'),
                  promoTrio: document.querySelectorAll('.grid-cols-1.md\\\\:grid-cols-3').length > 0,
                  newArrivals: !!document.getElementById('catalog'),
                  bestSellers: document.body.innerText.includes('BEST SELLERS'),
                  tabbed: document.body.innerText.includes('RATING') && document.body.innerText.includes('PRICE'),
                  midBanner: document.body.innerText.includes('NEW! FURNITURE COLLECTION'),
                  hotDeal: !!document.getElementById('hot-deal'),
                  news: !!document.getElementById('blog'),
                  footer: !!document.querySelector('footer')
                },
                totalHtmlLength: document.getElementById('root').innerHTML.length
              })`
            }
          }));
        }, 1200);
      }
      if (msg.id === 3) {
        console.log('AUDIT RESULT:', JSON.parse(msg.result.result.value));
        ws.close();
        edge.kill();
      }
    };
  } catch(e) { console.error(e); edge.kill(); }
}, 2000);
