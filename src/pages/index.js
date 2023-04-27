import { Inter } from "next/font/google";
import {
  Center,
  Flex,
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import {
  MoonIcon,
  QuestionIcon,
  SunIcon
} from "@chakra-ui/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex h='100vh' justifyContent='center' alignItems='center' bg='#228c22'>
    <TableContainer>
      <Table variant="simple">
        <Thead>
        </Thead>
        <Tbody>
          <Tr>
            <Td><IconButton colorScheme='gray' icon={<SunIcon />}/></Td>
            <Td><IconButton colorScheme='gray' icon={<SunIcon />}/></Td>
            <Td><IconButton colorScheme='gray' icon={<SunIcon />}/></Td>
          </Tr>
          <Tr>
            <Td><IconButton colorScheme='gray' icon={<SunIcon />}/></Td>
            <Td><IconButton colorScheme='gray' icon={<SunIcon />}/></Td>
            <Td><IconButton colorScheme='gray' icon={<SunIcon />}/></Td>
          </Tr>
          <Tr>
            <Td><IconButton colorScheme='gray' icon={<SunIcon />}/></Td>
            <Td><IconButton colorScheme='gray' icon={<SunIcon />}/></Td>
            <Td><IconButton colorScheme='gray' icon={<SunIcon />}/></Td>
          </Tr>
        </Tbody>
        <Tfoot>
        </Tfoot>
      </Table>
    </TableContainer>
    </Flex>
  );
}
