import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { auth } from "../firebase/clientApp";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "util/authContext";
import { useContext } from "react";
import Router from "next/router";

const Login: NextPage = (event) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(AuthContext);

  const addUser = (event) => {
    event.preventDefault();
    console.log("hi");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const curUser = userCredential.user;
        user.update({
          user: curUser,
        });
        console.log(user);
        const { pathname } = Router;
        Router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
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
