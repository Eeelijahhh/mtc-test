import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "normalize.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import classNames from "classnames";
import classes from "./layout.module.css";

const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home page - MHK",
  description: "A trial task for the mtc company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={classes.root} lang="en">
      <body className={classNames(roboto.className, classes.body)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
