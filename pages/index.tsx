import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import AuthContext from "util/authContext";
import { useContext } from "react";
const Home: NextPage = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(AuthContext);
  let button = (
    <Button variant="contained">
      <a href="/login">Login</a>
    </Button>
  );
  if (user.user !== undefined) {
    button = <Button variant="contained">Enter</Button>;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl">
      <Stack spacing={3}>
        <h1>Munkey</h1>
        {button}
      </Stack>
    </div>
  );
};

export default Home;
