// next libraries
import Head from "next/head";

// react libraries
import React, { FC } from "react";

// models
import { ILayout } from "../../models/Layout";
import { Navbar } from "../ui/Navbar";

const origin = typeof window === "undefined" ? "" : window.origin;

export const Layout: FC<ILayout> = ({
  children,
  title = "Pokemon App",
  description = "Pokemon information",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Ricardo Maldonado" />
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`${title}`} />
        <meta
          property="og:description"
          content={`Information about ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <Navbar />

      <main style={{ padding: "0 16px" }}>{children}</main>
    </>
  );
};
