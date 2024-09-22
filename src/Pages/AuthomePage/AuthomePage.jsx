import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthomePage = () => {
  return (
    <Flex
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      px={4}
      my={4}
    >
      <Container maxW={"container.md"} padding={"0"} >
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left Side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="./auth.png" h={600} alt="Phone img" />
          </Box>
          {/* Right Side */}
          <VStack spacing={4} align={"stretch"} >
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="./playstore.png" alt="Play Logo" h={10} />
              <Image src="./microsoft.png" alt="microsoft Logo" h={10} />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthomePage;
