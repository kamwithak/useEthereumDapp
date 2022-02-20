// Chakra UI
import { Button, Switch, useColorMode, Text, Flex, Spacer } from "@chakra-ui/react"
import { Container } from '@chakra-ui/react'
import { Center, Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

// Components
import { WalletDapp } from './components/WalletDapp';
import { Home } from './components/Home';

// useDapp
import { useEthers } from '@usedapp/core'

// CSS
import './App.css';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const { activateBrowserWallet, account } = useEthers();
  if (account) {
    return <WalletDapp account={account}/>;
  }
  return (
    <Container
      maxW='container.xl'
      border='4px'
      borderRadius='20px'
      borderColor='pink.200'
      style={{
        marginTop: '15%'
      }}>
      <Flex>
        <Box>
          <Text style={{'paddingTop': '10px'}}>{isDarkMode ? 'Dark' : 'Light'} Mode</Text>
          <Switch
            colorScheme='pink'
            onChange={toggleColorMode}
            isChecked={colorMode === "light" ? true : false}
          />
        </Box>
      </Flex>
      <Flex justify="center">
        <Box>
          <Heading size='3xl' style={{'fontStyle': 'italic'}}>cryptowallet.xyz</Heading>
        </Box>
      </Flex>
      <Flex
        justify='right'
        style={{'paddingBottom': '15px'}}>
        <Button
          colorScheme='pink'
          borderRadius='12px'
          onClick={() => activateBrowserWallet()}
        >Connect</Button>
      </Flex>
    </Container>
  )
}

export default App;
