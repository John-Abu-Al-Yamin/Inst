import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

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
                <Box h={"500px"}></Box>
              </Skeleton>
            </VStack>
          );
        })}
      {!isLoading && (
        <>
          <FeedPost
            username="John Abou-Al-Yamin"
            avatar="./img1.png"
            img="./img1.png"
          />
          <FeedPost
            username="Gorge Abou-Al-Yamin"
            avatar="./img2.png"
            img="./img2.png"
          />
          <FeedPost
            username="Joyce Abou-Al-Yamin"
            avatar="./img3.png"
            img="./img3.png"
          />
          <FeedPost
            username="Jan Abou-Al-Yamin"
            avatar="./img4.png"
            img="./img4.png"
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
