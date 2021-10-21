import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useContext } from "react";
import Link from "next/link";
import {auth} from "../firebase/clientApp";


const Home: NextPage = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl">
      <h1>Munkey</h1>
    </div>
  );
};

export default Home;
