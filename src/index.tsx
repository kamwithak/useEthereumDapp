import React from 'react';
import ReactDOM from 'react-dom';
import { Mainnet, DAppProvider, Config } from '@usedapp/core'
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

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
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
