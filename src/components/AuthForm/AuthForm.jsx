import { Box, Flex, Image, VStack, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [islogin, setislogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack>
          <Image src="./logo.png" h={24} cursor={"pointer"} alt="Instagram" />

          {islogin ? <Login /> : <Signup />}

          {/* ================================== */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          {/* Google Login */}
          <GoogleAuth />
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box mx={2} fontSize={14}>
            {islogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setislogin(!islogin)}
            fontSize={14}
            cursor={"pointer"}
            color={"blue.400"}
          >
            {islogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
