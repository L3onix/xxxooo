import Typewriter from "typewriter-effect";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function Win() {
  return (
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
            delay: 25,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor orci, luctus vel congue ac, fermentum sed sem. Morbi finibus convallis mauris, sed blandit mauris elementum vitae. Nam eget enim egestas, placerat lectus at, placerat magna. Ut tempus feugiat suscipit. Nunc imperdiet gravida vestibulum. Aenean non bibendum enim, nec sodales sapien. Vivamus id pretium odio. Vestibulum ut lacinia libero. Sed eget tincidunt tellus. Phasellus tristique quam sit amet felis interdum, finibus dictum magna gravida. Donec molestie ullamcorper mi, ut ullamcorper urna viverra nec. Nulla facilisi.<br/>\
                    Curabitur ut metus vel dui accumsan congue. Proin vehicula mollis lorem. Quisque at luctus nibh, sagittis rhoncus ligula. Vestibulum porta vel mauris et vestibulum. Proin lobortis ut lorem id finibus. Mauris tincidunt magna eu urna dictum, et blandit velit imperdiet. Praesent eget rhoncus diam. Nulla facilisi."
              ).callFunction(() => {
                
              })
              .start();
          }}
        />
        <Image
        key='heart-gif'
          align="center"
          boxSize="200px"
          objectFit="cover"
          src="/heart2.gif"
          hidden
        />
      </Box>
    </Flex>
  );
}
