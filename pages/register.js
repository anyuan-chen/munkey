import Link from "next/link";
import { useState } from "react";
import { useAuth } from "context/useAuth";
import Router from "next/router";
import { db } from "../firebase/clientApp";
import { collection, addDoc } from "firebase/firestore";

const Register = (event) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [delegateName, setDelegateName] = useState("");
  const [fields, setCustomFields] = useState([]);
  const { signup, currentUser } = useAuth();

  const addField = (event) => {
    fields.push()
  }

  const addUser = async (event) => {
    event.preventDefault();
    signup(email, password).then(async (authUser) => {
      console.log(authUser);
      Router.push("/userDashboard");
      try {
        const docRef = await addDoc(collection(db, "users"), {
          email: currentUser.email,
          delegateName: "Japan",
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <form className="flex flex-col space-y-4  mx-32" onSubmit={addUser}>
        <h1 className="text-3xl font-body">Info</h1>

        <input
          type="text"
          value={email}
          placeholder="email"
          className="rounded-xl"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          value={delegateName}
          placeholder="delegate name"
          className="rounded-xl"
          onChange={(event) => setDelegateName(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          className="rounded-xl"
          onChange={(event) => setPassword(event.target.value)}
        />
        <h1 className="text-3xl font-body">Resources</h1>

        <div className="flex space-x-2">
          <table>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </table>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className="font-body bg-main rounded-xl text-white py-2" onClick={addField}>
            Add
          </button>
          <button
            type="submit"
            className="font-body bg-main rounded-xl text-white py-2"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
