import { useEtherBalance, useEthers, useTokenBalance} from '@usedapp/core'
import { formatEther, formatUnits } from '@ethersproject/units'
import './App.css';

const USD_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

function App() {

  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const tokenBalance = useTokenBalance(USD_ADDRESS, account);

  return (
    <div>
      <div>
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      </div>
      {account && <p>Account: {account}</p>}
      {etherBalance && <p>ETH: {formatEther(etherBalance)}</p>}
      {tokenBalance && <p>Balance: {formatUnits(tokenBalance, 6)} USD</p>}
    </div>
  )
}

export default App;
