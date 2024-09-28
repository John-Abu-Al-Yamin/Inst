import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";

const SuggestedUser = ({ user, setUser }) => {
  const { handelFollowUser, isFollowing, isUpdated } = useFollowUser(user?.uid);

  const authUser = useAuthStore((state) => state.user);

  const onFollowUser = async () => {
    await handelFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" w="full">
      <Flex alignItems="center" gap={4} cursor={"pointer"}>
        <Avatar size="sm" src={user?.profilePicURL} />

        <VStack align="flex-start" spacing={0}>
          <Text fontSize="14px" fontWeight="bold" color="white">
            {user?.fullName}
          </Text>
          <Text fontSize="12px" color="gray.500">
            {user?.followers.length} followers
          </Text>
        </VStack>
      </Flex>
      {authUser?.uid !== user?.uid && (
        <Button
          size="sm"
          fontSize="12px"
          variant="outline"
          color={"blue.400"}
          _hover={{
            color: "white",
          }}
          onClick={onFollowUser}
          isLoading={isUpdated}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
