import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import { worker } from './mocks/browsers';

const main = async () => {
  if (process.env.NODE_ENV === 'development') {
    worker.start();
    return;
  }

  await worker.start({
    serviceWorker: {
      url: '/react-shopping-cart/mockServiceWorker.js',
    },
  });
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </RecoilRoot>,
);

main();
