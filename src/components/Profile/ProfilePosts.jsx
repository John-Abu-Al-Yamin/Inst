import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../hooks/useGetUserPosts";

const ProfilePosts = () => {
  const { isLoading, posts } = useGetUserPosts();

  const noPostsFound = !isLoading && posts.length === 0;

  if (noPostsFound) {
    return <NoPostsFound />;
  }

  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, _index) => (
          <VStack key={_index} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}></Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
        {posts?.map((post) => (
          <ProfilePost key={post.id} post={post} />
        ))}
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;

const NoPostsFound = () => {
  return (
    <Flex
      flexDir={"column"}
      w={"full"}
      h={"full"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text fontSize={"2xl"}>No posts found 👻 🙆</Text>
    </Flex>
  );
};
