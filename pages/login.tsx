import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { auth } from "../firebase/clientApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login: NextPage = (event) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const addUser = (event) => {
    event.preventDefault();
    console.log("hi");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl">
      <form className="w-96" onSubmit={addUser}>
        <Stack spacing={2}>
          <h1>Munkey</h1>
          <TextField
            id="outlined-basic"
            label="username"
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
        </Stack>
      </form>
    </div>
  );
};

export default Login;
