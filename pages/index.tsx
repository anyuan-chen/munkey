import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl">
      <form className="w-96">
        <Stack spacing={2}>
          <h1>Munkey</h1>
          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />{" "}
          <Button variant="contained">Login</Button>
        </Stack>
      </form>
    </div>
  );
};

export default Home;
