"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import companyImage from "/app/public/encore.png";
import pdImage from "/app/public/project divert logo.png";
import { useRouter } from "next/navigation";

export default function SignUp() {

  const router = useRouter();

  const handleHomePage = (event: any) => {
    event.preventDefault();
    router.push("/home")
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className=" w-52 pb-10">
          <Image alt="pd" src={companyImage} />
        </div>

        <div className=" w-20">
          <Image alt="pd" src={pdImage} />
        </div>

        <p className=" pt-10 text-5xl">Thank You!</p>

        <p className=" pt-10 text-2xl text-center pb-20">
          We will be in contact with you soon regarding your application.
        </p>

        <button className="underline" onClick={handleHomePage} >
          Home
        </button>
      </Box>
    </Container>
  );
}
