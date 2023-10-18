import "@/styles/globals.css";
import Navbar from "../components/navbar.js";
import { useEffect, useState } from "react";
import { allPost } from "./api/index.js";

export default function App({ Component, pageProps }) {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    allPost().then((res) => {
      setAllPosts(res.data);
    });
  }, []);

  return (
    <>
      <Navbar allPosts={allPosts} />
      <Component {...pageProps} />;
    </>
  );
}
