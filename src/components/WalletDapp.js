
import { Container, Box, Heading } from '@chakra-ui/react'
import { formatEther, formatUnits } from '@ethersproject/units'
import { useEtherBalance, useTokenBalance} from '@usedapp/core'
const USD_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

export const WalletDapp = ({account}) => {
    const etherBalance = useEtherBalance(account);
    const tokenBalance = useTokenBalance(USD_ADDRESS, account);
    return (
        <Container>
        <Box>
          <Heading>Connected to WalletDapp! 🚀</Heading>
        </Box>
          {account && <p>Account: {account}</p>}
          {etherBalance && <p>ETH: {formatEther(etherBalance)}</p>}
          {tokenBalance && <p>Balance: {formatUnits(tokenBalance, 6)} USD</p>}
      </Container>
    )
}