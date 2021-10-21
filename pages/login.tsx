import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
        <h1 className="text-5xl ">Munkey</h1>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
        <button>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
