import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/contants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/TimeAgo";
import CommentsModal from "../Modals/CommentsModal";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const { handelPostComment, isCommenting } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { isLiked, likes, handleLikePost, isUpdating } = useLikePost(post);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handelSubmitComment = async () => {
    await handelPostComment(post.id, comment);
    setComment("");
  };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} my={4}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        {/* Comments */}
        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={() => commentRef.current.focus()}
        >
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <Text fontSize={"12"} color={"gray"}>
          {" "}
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
            {creatorProfile?.username}{" "}
            <Text fontWeight={400} as={"span"}>
              {post.caption}
            </Text>
            {post.comments.length > 0 && (
              <Text fontSize={"sm"} color={"gray.500"} cursor={"pointer"} onClick={onOpen}>
                View all {post.comments.length} comments
              </Text>
            )}
            {/* View all comments */} 
            {isOpen ? (
              <CommentsModal isOpen={isOpen} onClose={onClose} post={post}/>
            ) : null}
          </Text>
        </>
      )}
      {authUser && (
        <Flex justifyContent={"space-between"} w={"full"} alignItems={"center"}>
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder="Add a comment..."
              fontSize={14}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
                onClick={handelSubmitComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
