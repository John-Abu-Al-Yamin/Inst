import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  
} from "@chakra-ui/react";

import React, { useState } from "react";
import useSignUpWitheEmailAndPassword from "../../hooks/useSignUpWitheEmailAndPassword";

const Signup = () => {
  const [input, setinput] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const {loading, error, signup} = useSignUpWitheEmailAndPassword();

  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        fontSize={14}
        value={input.email}
        size={"sm"}
        onChange={(e) => setinput({ ...input, email: e.target.value })}
      />
      <Input
        placeholder="Username"
        type="text"
        fontSize={14}
        value={input.username}
        size={"sm"}
        onChange={(e) => setinput({ ...input, username: e.target.value })}
      />
      <Input
        placeholder="fullName"
        type="text"
        fontSize={14}
        value={input.fullName}
        size={"sm"}
        onChange={(e) => setinput({ ...input, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          fontSize={14}
          value={input.password}
          size={"sm"}
          onChange={(e) => setinput({ ...input, password: e.target.value })}
        />
        <InputRightElement cursor={"pointer"} h="full">
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status="error" fontSize={12} p={2} borderRadius={4}>
          <AlertIcon fontSize={10} />
          {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme={"blue"}
        fontSize={14}
        size={"sm"}
        isLoading={loading}
        onClick={() => signup(input)}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
