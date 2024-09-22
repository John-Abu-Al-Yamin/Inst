import { Button, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Flex
        w={"full"}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
      >
        <Image
          src="./logo.png"
          alt="logo"
          h={20}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        />
        <Flex gap={4}>
          <Link to="/auth">
            <Button colorScheme={"blue"} size={"sm"}>
              Log in
            </Button>
          </Link>
          <Link to="/auth">
            <Button colorScheme={"blue"} size={"sm"}>
              Sign up
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
