import React from "react";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";

const FeedPost = ({username ,avatar ,img}) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar}/>
      <Box my={2} overflow={"hidden"}>
        <Image src={img} alt={username}  borderRadius={4}/>
      </Box>
      <PostFooter username={username}/>
    </>
  );
};

export default FeedPost;
