import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Login: NextPage = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl">
      <form className="w-96">
        <Stack spacing={2}>
          <h1>Munkey</h1>
          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
            value={userName}
            onChange={(event) => setuserName(event.target.value)}
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
          <Button variant="contained">Login</Button>
        </Stack>
      </form>
    </div>
  );
};

export default Login;
