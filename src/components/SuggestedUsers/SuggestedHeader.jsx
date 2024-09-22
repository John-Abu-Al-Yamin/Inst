import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const { handelLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  if (!authUser) {
    return null;
  }

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`/${authUser.username}`}>
          <Avatar size={"sm"} alt="profile" src={authUser.profilePic} />
        </Link>
        <Link to={`/${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        onClick={handelLogout}
        isLoading={isLoggingOut}
        size={"sm"}
        bg={"transparent"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cussor={"pointer"}
        style={{ textDecoration: "none" }}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
