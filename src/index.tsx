import React from 'react';
import ReactDOM from 'react-dom';
import { Mainnet, DAppProvider, Config } from '@usedapp/core'
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const apiUrl: string = process.env.REACT_APP_MAINNET_INFURA || '';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: apiUrl,
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
