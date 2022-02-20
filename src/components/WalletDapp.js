
import { Container, Badge, Image } from '@chakra-ui/react'
import { formatEther, formatUnits } from '@ethersproject/units'
import { useEtherBalance, useTokenBalance} from '@usedapp/core'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
const USD_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

export const WalletDapp = ({account}) => {
    const etherBalance = useEtherBalance(account);
    const tokenBalance = useTokenBalance(USD_ADDRESS, account);
    return (
      <Container>
        <Badge colorScheme={'pink'} fontSize='20px' marginBottom={'10px'}>{account}</Badge>
        <Table variant='simple'>
          <TableCaption>Your current balances for the connected wallet address</TableCaption>
          <Thead>
            <Tr>
              <Th>Symbol</Th>
              <Th>Asset</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>USDC</Td>
              <Td><Image src='usdc.png' alt='USDC' style={{width: '50px', height: '50px'}}></Image></Td>
              <Td isNumeric>{tokenBalance && formatUnits(tokenBalance, 6)} USD</Td>
            </Tr>
            <Tr>
              <Td>DAI</Td>
              <Td><Image src='dai.png' alt='DAI' style={{width: '50px', height: '50px'}}></Image></Td>
              <Td isNumeric>{etherBalance && formatEther(etherBalance)}</Td>
            </Tr>
            <Tr>
              <Td>ETH</Td>
              <Td><Image src='eth.png' alt='ETH' style={{width: '50px', height: '50px'}}></Image></Td>
              <Td isNumeric>{etherBalance && formatEther(etherBalance)}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>
    )
}