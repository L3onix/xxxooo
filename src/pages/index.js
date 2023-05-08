import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Flex,
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { MoonIcon, QuestionOutlineIcon, SunIcon } from "@chakra-ui/icons";
import Letter from "../components/Letter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [buttons, setButtons] = useState([
    {
      id: 1,
      colorScheme: "gray",
      icon: <QuestionOutlineIcon />,
      clicked: false,
    },
    {
      id: 2,
      colorScheme: "gray",
      icon: <QuestionOutlineIcon />,
      clicked: false,
    },
    {
      id: 3,
      colorScheme: "gray",
      icon: <QuestionOutlineIcon />,
      clicked: false,
    },
    {
      id: 4,
      colorScheme: "gray",
      icon: <QuestionOutlineIcon />,
      clicked: false,
    },
    {
      id: 5,
      colorScheme: "gray",
      icon: <QuestionOutlineIcon />,
      clicked: false,
    },
    {
      id: 6,
      colorScheme: "gray",
      icon: <QuestionOutlineIcon />,
      clicked: false,
    },
    {
      id: 7,
      colorScheme: "gray",
      icon: <QuestionOutlineIcon />,
      clicked: false,
    },
    {
      id: 8,
      colorScheme: "gray",
      icon: <QuestionOutlineIcon />,
      clicked: false,
    },
    {
      id: 9,
      colorScheme: "gray",
      icon: <QuestionOutlineIcon />,
      clicked: false,
    },
  ]);
  const [clickNumber, setClickNumber] = useState(1);
  const [flexHidden, setFlexHidden] = useState(false);
  const [flexClassName, setFlexClassName] = useState('');
  const router = useRouter();

  function setClickedButton(id, color, icon) {
    setButtons((prevButtons) => {
      return prevButtons.map((button) => {
        if (button.id === id) {
          return { ...button, colorScheme: color, icon: icon, clicked: true };
        }
        return button;
      });
    });
  }

  function victoryVerify(buttons) {
    const combinations = [
      [1, 2, 3],
      [1, 4, 7],
      [1, 5, 9],
      [2, 5, 8],
      [3, 6, 9],
      [3, 5, 7],
      [4, 5, 6],
      [7, 8, 9],
    ];
    let confirm = false;
    combinations.forEach((combination) => {
      if (checkCombination(combination, buttons)) {
        confirm = true;
      }
    });
    return confirm;
  }

  function checkCombination(buttonIds, buttons) {
    const firstButton = buttons.find((button) => button.id === buttonIds[0]);
    const firstButtonColor = firstButton.colorScheme;

    for (let i = 1; i < buttonIds.length; i++) {
      const button = buttons.find((button) => button.id === buttonIds[i]);
      if (button.colorScheme === "gray") {
        return false;
      }
      if (button.colorScheme !== firstButtonColor) {
        return false;
      }
    }
    return true;
  }

  function handleClick(id) {
    if (buttons[id - 1].clicked) {
      return;
    }
    if (clickNumber % 2 == 1) {
      setClickedButton(id, "orange", <SunIcon />);
    } else {
      setClickedButton(id, "cyan", <MoonIcon />);
    }
    setClickNumber(clickNumber + 1);
  }

  useEffect(() => {
    if (victoryVerify(buttons)) {
      if (clickNumber % 2 == 1) {
        console.log("player 2 ganhou!");
      } else {
        console.log("player 1 ganhou!");
      }
      router.push("/win");
    }
  }, [buttons, router]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="index-style.css" />
      </Head>
      <Flex
        id="index-flex"
        hidden={flexHidden}
        h="100vh"
        justifyContent="center"
        alignItems="center"
        bg="#212529"
        className={flexClassName}
      >
        <TableContainer>
          <Table variant="simple">
            <Thead></Thead>
            <Tbody>
              <Tr>
                <Td>
                  <IconButton
                    key={buttons[0].id}
                    onClick={() => {
                      handleClick(buttons[0].id);
                    }}
                    colorScheme={buttons[0].colorScheme}
                    icon={buttons[0].icon}
                  />
                </Td>
                <Td>
                  <IconButton
                    key={buttons[1].id}
                    onClick={() => {
                      handleClick(buttons[1].id);
                    }}
                    colorScheme={buttons[1].colorScheme}
                    icon={buttons[1].icon}
                  />
                </Td>
                <Td>
                  <IconButton
                    key={buttons[2].id}
                    onClick={() => {
                      handleClick(buttons[2].id);
                    }}
                    colorScheme={buttons[2].colorScheme}
                    icon={buttons[2].icon}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <IconButton
                    key={buttons[3].id}
                    onClick={() => {
                      handleClick(buttons[3].id);
                    }}
                    colorScheme={buttons[3].colorScheme}
                    icon={buttons[3].icon}
                  />
                </Td>
                <Td>
                  <IconButton
                    key={buttons[4].id}
                    onClick={() => {
                      handleClick(buttons[4].id);
                    }}
                    colorScheme={buttons[4].colorScheme}
                    icon={buttons[4].icon}
                  />
                </Td>
                <Td>
                  <IconButton
                    key={buttons[5].id}
                    onClick={() => {
                      handleClick(buttons[5].id);
                    }}
                    colorScheme={buttons[5].colorScheme}
                    icon={buttons[5].icon}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <IconButton
                    key={buttons[6].id}
                    onClick={() => {
                      handleClick(buttons[6].id);
                    }}
                    colorScheme={buttons[6].colorScheme}
                    icon={buttons[6].icon}
                  />
                </Td>
                <Td>
                  <IconButton
                    key={buttons[7].id}
                    onClick={() => {
                      handleClick(buttons[7].id);
                    }}
                    colorScheme={buttons[7].colorScheme}
                    icon={buttons[7].icon}
                  />
                </Td>
                <Td>
                  <IconButton
                    key={buttons[8].id}
                    onClick={() => {
                      handleClick(buttons[8].id);
                    }}
                    colorScheme={buttons[8].colorScheme}
                    icon={buttons[8].icon}
                  />
                </Td>
              </Tr>
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      </Flex>
      <Letter flexHidden={setFlexHidden} flexClassName={setFlexClassName}/>
    </>
  );
}
