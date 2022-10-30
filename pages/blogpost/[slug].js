import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";

// Find the file corresponding to the slug
// Populate them inside the page
const slug = (props) => {
  const [blog, setBlog] = useState(props.myblog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <p>{blog && blog.content}</p>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(context.query);
  // const router = useRouter();
  const { slug } = context.query;
  let data = await   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myblog = await data.json()
  return {
    props: { myblog }, // will be passed to the page component as props
  };
}
export default slug;
