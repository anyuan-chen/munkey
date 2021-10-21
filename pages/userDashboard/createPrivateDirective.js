import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";

import { useAuth } from "context/useAuth";
import Link from "next/link";
export default function CreatePrivateDirective() {
  const [userName, setUserName] = useState("Delegate 1");
  const [subject, setSubject] = useState("");
  const [recipient, setRecipient] = useState("");
  const [body, setBody] = useState("");
  const { currentUser } = useAuth();

  const sendMessage = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "private-directives"), {
        subject: subject,
        sender: currentUser,
        recipient: recipient,
        body: body,
      });
      setBody("");
      setSubject("");
      setBody("");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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
      <div>
        <form
          className="flex flex-col m-32 space-y-4 font-body"
          onSubmit={sendMessage}
        >
          <h1 className="text-4xl ">Create Private Directive</h1>
          <div className="flex flex-col">
            <label>Subject</label>
            <input
              type="text"
              className="rounded-xl"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label>Recipient</label>
            <input
              type="text"
              className="rounded-xl"
              value={recipient}
              onChange={(event) => setRecipient(event.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label>Body</label>
            <textarea
              className="rounded-xl"
              value={body}
              onChange={(event) => setBody(event.target.value)}
            ></textarea>
          </div>
          <button
            className="flex items-center justify-center bg-main rounded-xl text-white py-2"
            type="submit"
          >
            Submit
          </button>
          <Link href="/userDashboard">
            <button className="flex items-center justify-center bg-main rounded-xl text-white py-2">
              Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
