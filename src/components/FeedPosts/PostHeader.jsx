import { Avatar, Box, Button, Flex, SkeletonCircle, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import { timeAgo } from "../../utils/TimeAgo";

const PostHeader = ({ post, creatorProfile }) => {
 const {handelFollowUser, isFollowing, isUpdated} = useFollowUser(post?.createdBy);
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
      px={4} // Adds padding to the left and right
    >
      {/* Avatar and Username */}
      <Flex alignItems={"center"} gap={4}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile?.username}`}>
            <Avatar
              size={"sm"}
              alt="profile"
              src={creatorProfile?.profilePicURL}
            />
          </Link>
        ) : (
          <SkeletonCircle size={10} />
        )}

        <Flex alignItems={"center"} gap={2}>
          {creatorProfile ? (
            <Link to={`/${creatorProfile?.username}`}>
              <Text fontWeight={"bold"} fontSize={"md"}>
                {creatorProfile?.username}
              </Text>
            </Link>
          ) : (
            <SkeletonCircle w={"100px"} h={"10px"} />
          )}

          <Text fontSize={"sm"} color={"gray.500"}>
          {timeAgo(post.createdAt)}
          </Text>
        </Flex>
      </Flex>

      {/* Unfollow Button */}
      <Box cursor={"pointer"}>
        <Button
          bg={"transparent"}
          size={"sm"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"all 0.3s ease"}
          onClick={handelFollowUser}
          isLoading={ isUpdated}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
