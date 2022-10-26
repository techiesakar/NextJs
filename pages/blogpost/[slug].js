import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";

// Find the file corresponding to the slug
// Populate them inside the page
const slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlog(parsed);
      });
  }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>

        <p>{blog && blog.content}</p>
      </main>
    </div>
  );
};

export default slug;
