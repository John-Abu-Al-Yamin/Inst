import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Link as RouterLink } from "react-router-dom";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const { suggestedUsers, isLoading } = useGetSuggestedUsers();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {suggestedUsers?.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.400" }}
            cursor={"pointer"}
          >
            See All
          </Text>
        </Flex>
      )}
      {suggestedUsers?.map((user) => (
        <SuggestedUser key={user.id} user={user} />
      ))}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link
          href="https://github.com/assprorammer"
          target="_blank"
          as={RouterLink}
          color={"blue.500"}
          fontSize={14}
        >
          AS a John Abou-Al-Yamin
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
