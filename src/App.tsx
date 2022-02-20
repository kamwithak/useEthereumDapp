// Chakra UI
import { Button } from "@chakra-ui/react"
import { Container } from '@chakra-ui/react'
import { Center, Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

// Components
import { WalletDapp } from './components/WalletDapp';

// useDapp
import { useEthers } from '@usedapp/core'

// CSS
import './App.css';

const App = () => {
  const { activateBrowserWallet, account } = useEthers();
  if (account) {
    return <WalletDapp account={account}/>;
  }
  return (
      <Container>
        <Box>
          <Heading>Please connect with MetaMask</Heading>
        </Box>
        <Center bg='black' h='100px' color='white'>
          <Button colorScheme='blue' onClick={() => activateBrowserWallet()}>Connect</Button>
        </Center>
      </Container>
  )
}

export default App;
