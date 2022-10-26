import { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Collect all the files from blogdata directory
// Iterate to display them
const Blog = (props) => {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {

  // }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {blogs.map((blogitem, index) => {
          return (
            <div id={`post-${index}`} key={index}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogItemH3}>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogItemP}>
                {blogitem.content.substr(0, 140)}...
              </p>
              <Link href={`/blogpost/${blogitem.slug}`}>Read More</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  let data = await fetch("http://localhost:3000/api/blogs")
  let allBlogs = await data.json()
  return {
    props: {allBlogs}, // will be passed to the page component as props
  };
}

export default Blog;
