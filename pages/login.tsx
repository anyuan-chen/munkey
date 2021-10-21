import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Router from "next/router";
import { useAuth } from "context/useAuth";

const Login: NextPage = (event) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const addUser = (event) => {
    event.preventDefault();
    console.log("hi");
    login(email, password).then((authUser) => {
      console.log(authUser);
      Router.push("/userDashboard");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl">
      <form className="w-96" onSubmit={addUser}>
        <Stack spacing={2}>
          <h1>Login</h1>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />{" "}
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Button variant="outlined">
            <Link href="/register">
              <a>Register</a>
            </Link>
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Login;
