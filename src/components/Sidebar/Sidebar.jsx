import { Avatar, Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/contants";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="John" src="./profilepic.png" />,
      text: "Profile",
      link: "/assprorammer",
    },
  ];

  const { handelLogout, isLoggingOut } = useLogout();
  return (
    <Box
      height="100vh"
      borderRight="1px solid"
      borderColor="whiteAlpha.300"
      py={8}
      position="sticky"
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction="column" gap={10} w="full" height="full">
        {/* Desktop Link */}
        <Link
          to="/"
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }} // Desktop logo
          cursor="pointer"
          aria-label="Instagram Link"
        >
          <InstagramLogo />
        </Link>

        {/* Mobile Link */}
        <Link
          to="/"
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }} // Mobile logo
          cursor="pointer"
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={{ base: "10" }}
          aria-label="Instagram Mobile Link"
        >
          <InstagramMobileLogo />
        </Link>

        <Flex direction={"column"} gap={5} cursor={"pointer"} flex={1}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              label={item.text}
              key={index}
              hasArrow
              placement="right"
              openDelay={300}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                alignItems={"center"}
                gap={4}
                justifyContent={{ base: "center", md: "flex-start" }}
                as={RouterLink}
                to={item.link || "null"}
                p={2}
                borderRadius={6}
                _hover={{ bg: "whiteAlpha.400" }}
                w={{ base: "10", md: "full" }}
                aria-label={item.text}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}

          {/* Logout Button */}
          <Tooltip
            label={"Logout"}
            hasArrow
            placement="right"
            openDelay={300}
            display={{ base: "block", md: "none" }}
          >
            <Flex
              onClick={handelLogout}
              display={"flex"}
              alignItems={"center"}
              gap={4}
              justifyContent={{ base: "center", md: "flex-start" }}
              p={2}
              borderRadius={6}
              _hover={{ bg: "whiteAlpha.400" }}
              w={{ base: "10", md: "full" }}
              mt="auto"
            >
              <BiLogOut size={25} />
              <Button
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                isLoading={isLoggingOut}
                display={{ base: "none", md: "block" }}
              >
                Logout
              </Button>
            </Flex>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
