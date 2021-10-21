import React, { useEffect, useState } from "react";
import crisisResources from "../../fake-data/resources";
import Link from "next/link";
import messages from "../../fake-data/messages";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import { useAuth } from "context/useAuth";
import directives from "../../fake-data/directives";

export default function UserDashboard() {
  let resources = [];
  for (const resource in crisisResources) {
    resources.push(
      <li>
        <span className="font-bold">{crisisResources[resource]}</span>{" "}
        {resource}(s)
      </li>
    );
  }

  let directiveComponents = directives.map((message) => {
    return <Link href={message.link}>{message.subject}</Link>;
  });

  let messageComponents = messages.map((message) => {
    if (message.read === false) {
      return (
        <Link href={`/messages/${message.id}`}>
          <div className="w-full py-4 font-bold shadow-md z-10 rounded-lg">
            <li className="px-4 ">{message.subject}</li>
          </div>
        </Link>
      );
    } else {
      return (
        <Link href={`/messages/${message.id}`}>
          <div className="w-full py-4  font-thin">
            <li className="px-4">{message.subject}</li>
          </div>
        </Link>
      );
    }
  });

  const [userName, setUserName] = useState("Delegate 1");

  const { currentUser } = useAuth();
  useEffect(async () => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", currentUser.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserName(doc.data().delegateName);
      console.log(doc.id, " => ", doc.data());
    });
  }, []);

  return (
    <div>
      <nav className="grid grid-cols-5 h-36 bg-main font-bold">
        <Link href="/">
          <a className="flex justify-center items-center">
            <h1 className="text-5xl text-white">Munkey</h1>
          </a>
        </Link>
        <div className="col-start-3">
          <h2 className="flex items-center h-36 text-2xl text-supersub">
            You are: &nbsp;
            <span className="text-white">
              {}
              {userName}
            </span>{" "}
          </h2>
        </div>
      </nav>

      <div className="flex">
        {/*code for the resources section}*/}
        <div className="flex h-screen-30 flex-col shadow-md w-screen/4 m-8 rounded-3xl">
          <div className="font-bold text-lg p-8">
            <h1>Your Resources</h1>
          </div>
          <div className="p-8">
            <ul className="space-y-5">{resources}</ul>
          </div>
          <div className="font-bold text-lg p-8">
            <h1>Public Directives</h1>
          </div>
          <div className="p-8">
            <ul className="space-y-5">{directiveComponents}</ul>
          </div>
        </div>
        <div className="m-8 shadow-md w-screen h-screen-30 grid grid-rows-6 rounded-3xl">
          <ul className="overflow-y-scroll overflow-hidden row-span-5">
            {messageComponents}
          </ul>
          <div className="flex items-center pl-5">
            <button className="bg-main font-thin text-white px-10 py-2 rounded-full">
              <Link href="/userDashboard/createPrivateDirective">Create</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}