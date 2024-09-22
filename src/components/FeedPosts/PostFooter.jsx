import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/contants";

const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handeLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} my={4}>
        <Box onClick={handeLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        {/* Comments */}
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
       
          <Text fontWeight={700} fontSize={"sm"}>
            {username}_{" "}
            <Text fontWeight={400} as={"span"}>
              Feling good
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              View all 1000 comments
            </Text>
          </Text>
        </>
      )}
      <Flex justifyContent={"space-between"} w={"full"} alignItems={"center"}>
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder="Add a comment..."
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
