import type { NextPage } from "next";
import { useAuth } from "context/useAuth";
import { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
const Home: NextPage = () => {
  const { currentUser } = useAuth();
  useEffect(() => {
    if (currentUser) {
      Router.push("/userDashboard");
    } else {
      Router.push("/login");
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl">
      <h1>Munkey</h1>
    </div>
  );
};

export default Home;
