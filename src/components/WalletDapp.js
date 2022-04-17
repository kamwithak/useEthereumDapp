import { Container, Badge, Image, Tooltip } from '@chakra-ui/react';
import { formatEther, formatUnits } from '@ethersproject/units';
import { useEtherBalance, useTokenBalance} from '@usedapp/core';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

const USD_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const DAI_ADDRESS = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

export const WalletDapp = ({account}) => {
    const balanceETH = useEtherBalance(account);
    const balanceUSD = useTokenBalance(USD_ADDRESS, account);
    const balanceDAI = useTokenBalance(DAI_ADDRESS, account);
    return (
      <Container>
        <Tooltip hasArrow label={'Copy to clipboard'} placement='top' bg='pink.100' color={'black'}>
          <Badge style={{cursor: 'pointer'}} colorScheme={'pink'} fontSize='20px' marginBottom={'10px'} onClick={()=>{
            navigator.clipboard.writeText(account);
          }}>{account}</Badge>
        </Tooltip>
        <Table variant='simple'>
          <TableCaption>Your current balances for the connected wallet address</TableCaption>
          <Thead>
            <Tr>
              <Th>Asset</Th>
              <Th>Symbol</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><Image src='usdc.png' alt='USDC' style={{width: '50px', height: '50px'}}></Image></Td>
              <Td>USDC</Td>
              <Td isNumeric>{balanceUSD && formatUnits(balanceUSD, 6)} USD</Td>
            </Tr>
            <Tr>
              <Td><Image src='dai.png' alt='DAI' style={{width: '50px', height: '50px'}}></Image></Td>
              <Td>DAI</Td>
              <Td isNumeric>{balanceDAI && formatUnits(balanceDAI, 6)} DAI</Td>
            </Tr>
            <Tr>
              <Td><Image src='eth.png' alt='ETH' style={{width: '50px', height: '50px'}}></Image></Td>
              <Td>ETH</Td>
              <Td isNumeric>{balanceETH && formatEther(balanceETH)} ETH</Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>
    )
}