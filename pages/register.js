import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useAuth } from "context/useAuth";
import Router from "next/router";
import { db } from "../firebase/clientApp";
import { collection, addDoc } from "firebase/firestore";

const Register = (event) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, currentUser } = useAuth();

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
    <div className="flex flex-col items-center justify-center h-screen text-4xl">
      <form className="w-96" onSubmit={addUser}>
        <Stack spacing={2}>
          <h1>Register</h1>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
          <Button variant="contained" type="submit">
            Register
          </Button>
          <Button variant="outlined">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Register;
