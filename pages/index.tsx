import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import AuthContext from "util/authContext";
import { useContext } from "react";
import Link from "next/link";
import {auth} from "../firebase/clientApp";

export async function getStaticProps(context) {
  
  return {
    props: {}, // will be passed to the page component as props
  };
}
const Home: NextPage = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(AuthContext);
  let button = (
    <button className="bg-main text-white px-10 py-2 rounded-full">
      <Link href="/login">Login</Link>
    </button>
  );
  if (user.user !== undefined) {
    button = <Button variant="contained">Enter</Button>;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl">
      <h1>Munkey</h1>
      {button}
    </div>
  );
};

export default Home;
