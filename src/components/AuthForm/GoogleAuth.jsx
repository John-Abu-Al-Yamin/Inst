import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const GoogleAuth = () => {


  return (
    <>
      {" "}
      <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
        <Image src="./google.png" alt="Google Logo" w={5} />
        <Text mx={2} color={"blue.300"}>
          Log in with Google
        </Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
   