import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((item, _index) => {
          return (
            <VStack key={_index} gap={4} align={"flex-start"} mb={10}>
              <Flex gap={2}>
                <SkeletonCircle size="10" />
                <VStack>
                  <Skeleton w={"200px"} height="10px" />
                  <Skeleton w={"200px"} height="10px" />
                </VStack>
              </Flex>

              <Skeleton w={"full"}>
                <Box h={"360px"}></Box>
              </Skeleton>
            </VStack>
          );
        })}
      {!isLoading && posts.length > 0 && (
        <>
          {posts?.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </>
      )}

      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Dayum. Looks like you don&apos;t have any Friends
          </Text>
          <Text color={"red.400"}>Stop Coding and go make some</Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
