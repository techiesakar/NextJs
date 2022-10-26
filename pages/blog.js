import {useEffect, useState} from 'react';
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Collect all the files from blogdata directory
// Iterate to display them
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("UseEffect is Running");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);

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


export default Blog;
