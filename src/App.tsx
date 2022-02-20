// Chakra UI
import { Button, Switch, useColorMode, Text, Flex, Spacer } from "@chakra-ui/react"
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
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const { activateBrowserWallet, account, deactivate } = useEthers();
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
          {
            account ? (
              <WalletDapp account={account}/>
            ) : (
              <Heading size='3xl' style={{'fontStyle': 'italic'}}>what's in my wallet?</Heading>
            )
          }
        </Box>
      </Flex>
      <Flex
        justify='right'
        style={{'paddingBottom': '15px'}}>
        {
          account ? (
            <Button
              colorScheme='pink'
              borderRadius='12px'
              onClick={() => deactivate()}>
              Disconnect
            </Button>
          ) : (
            <Button
              colorScheme='pink'
              borderRadius='12px'
              onClick={() => activateBrowserWallet()}>
              Connect
            </Button>
          )
        }
      </Flex>
    </Container>
  )
}

export default App;
