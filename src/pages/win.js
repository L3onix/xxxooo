import Typewriter from 'typewriter-effect';
import { Flex } from '@chakra-ui/react';

export default function Win() {
    return (
    <Flex h='100vh' justifyContent='center' alignItems='center' bg='light' direction='column'>
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString("teste \n \
                teste \
                teste \
                teste \
                teste \
                teste \
                ")
                    .start();
            }}
        />
    </Flex>
    )
}