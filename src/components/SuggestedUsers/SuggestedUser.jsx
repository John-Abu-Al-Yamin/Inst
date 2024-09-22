import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="full"
    
    >
      <Flex alignItems="center" gap={4} cursor={"pointer"}>
        <Avatar size="sm" name={name} src={avatar} />

        <VStack align="flex-start" spacing={0}>
          <Text fontSize="14px" fontWeight="bold" color="white">
            {name}
          </Text>
          <Text fontSize="12px" color="gray.500">
            {followers} followers
          </Text>
        </VStack>
      </Flex>

      <Button
        size="sm"
        fontSize="12px"
        variant="outline"
        color={"blue.400"}
        onClick={() => setIsFollowed(!isFollowed)}

        _hover={{
          color: "white",
        }}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
