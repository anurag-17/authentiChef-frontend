import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../footer";
import NavBar from "../navBar";

const ChefDetail = () => {
  return (
    <>
      <section>
      <NavBar/>

        <Footer />
      </section>
    </>
  );
};
export default dynamic(() => Promise.resolve(ChefDetail), { ssr: false });
