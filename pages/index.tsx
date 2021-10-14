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
  let button = <Button>Login</Button>;
  if (user) {
    button = <Button>Enter</Button>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl">
      <h1>Munkey</h1>
      {button}
    </div>
  );
};

export default Home;
