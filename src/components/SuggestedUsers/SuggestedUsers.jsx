import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Link as RouterLink } from "react-router-dom";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

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
      <SuggestedUser name="John Doe" followers={1000}  avatar="https://bit.ly/ryan-florence"/>
      <SuggestedUser name="Jan Abou-Al-Yamin" followers={800}  avatar="https://bit.ly/dan-abramov"/>
      <SuggestedUser name="Joo Emad" followers={678}  avatar="https://bit.ly/code-beast"/>
     
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 Built By{" "}
        <Link
          href="https://github.com/assprorammer"
          target="_blank"
          as={RouterLink}
          color={"blue.500"}
          fontSize={14}
        >
          AS a Prorammer
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
