import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [input, setinput] = useState({
    email: "",
    password: "",
  });

  const { login, loading, error } = useLogin();
  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        fontSize={14}
        value={input.email}
        onChange={(e) => setinput({ ...input, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        type="password"
        fontSize={14}
        value={input.password}
        onChange={(e) => setinput({ ...input, password: e.target.value })}
      />
      {error && (
        <Alert status="error">
          <AlertIcon fontSize={12} /> {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme={"blue"}
        fontSize={14}
        size={"sm"}
        isLoading={loading}
        onClick={() => login(input)}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
