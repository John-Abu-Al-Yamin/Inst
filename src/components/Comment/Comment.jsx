import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import React from "react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/TimeAgo";

const Comment = ({ comment }) => {
  const { userProfile, setUserProfile, isLoading } = useGetUserProfileById(
    comment?.createdBy
  );

  if (isLoading) {
    return <CommentSkeleton />;
  }
  return (
    <Flex gap={4}>
      <Link to={`/${userProfile?.username}`}>
        <Avatar src={userProfile?.profilePicURL} alt="profile" size="sm" />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Link to={`/${userProfile?.username}`}>
            <Text fontWeight={"bold"} fontSize={12}>
              {userProfile?.username}
            </Text>
          </Link>
          <Text fontSize={14}>{comment?.comment}</Text>
        </Flex>
        <Text color={"gray"} fontSize={12}>
          {timeAgo(comment?.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;

const CommentSkeleton = () => {
  return (
    <Flex gap={4}>
      <SkeletonCircle h={10} w={10} />
      <Flex direction={"column"} gap={1}>
        <Skeleton w={100} height={2} />
        <Skeleton w={50} height={2} />
      </Flex>
    </Flex>
  );
};
