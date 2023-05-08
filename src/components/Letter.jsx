import React from "react";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { Box, Fade, Flex, Image, Slide, Text } from "@chakra-ui/react";

export default function Letter(props) {
  const [imageHidden, setImageHidden] = useState(false);
  const [letterSlideOpen, setLetterSlideOpen] = useState(false);

  return (
    <Slide
      direction="bottom"
      in={letterSlideOpen}
      style={{ zIndex: 11, backgroundColor: "#fff" }}
      bg="light"
    >
      <Flex
        h="100vh"
        justifyContent="center"
        alignItems="center"
        bg="light"
        direction="column"
      >
        <Box
          display="flex"
          flexDirection="column"
          bg="white"
          w="50%"
          color="black"
          alignItems="center"
        >
          <Typewriter
            options={{
              autoStart: true,
              delay: 40,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(15000)
                .callFunction(() => {
                  setLetterSlideOpen(true);
                })
                .typeString(
                  "Oi amor!<br/>\
Faz algum tempo que você me deu uma carta, lembro que foi num momento complicado, muita coisa anda acontecendo ultimamente, mas também me lembro que esse gesto aqueceu meu coração. Você sempre criou esses momentos especiais, e agora eu, com essa mensagem estou tentando criar um.<br/>\
Nesses últimos 5 anos, passamos por muita coisa juntos, altos e baixos, e sinto que isso nos fortaleceu, torna mais forte meus sentimentos por você.  Você é uma pessoa linda e inteligente, e sua companhia me faz bem, me torna uma pessoa melhor, e me incentiva a sempre melhorar, por mim e por você.<br/>\
Desde de o início eu te falei que não planejo muito bem minha vida, nunca fui muito longe pensando em como será minha vida no futuro, mas hoje eu tenho o privilégio de fazer parte da sua vida, e sei que eu quero continuar tendo sua companhia, um participando na vida do outro.<br/>\
Aceita compartilhar e criar o nosso futuro comigo?<br/>\
PS: Desculpe o atraso..."
                )
                .pauseFor(1000)
                .callFunction(() => {
                  setImageHidden(true);
                })
                .start();
            }}
          />
          <Fade in={imageHidden}>
            <Image
              key="heart-gif"
              align="center"
              boxSize="200px"
              objectFit="cover"
              src="/heart2.gif"
            />
          </Fade>
        </Box>
      </Flex>
    </Slide>
  );
}
