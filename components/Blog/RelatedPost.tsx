import React from "react";
import Image from "next/image";
import Link from "next/link";
//import BlogData from "./blogData";

export const RelatedPost = ({ posts }: { posts: any[] }) => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        <div>
          {posts.slice(0, 3).map((post, key) => (
            <div
              className="mb-5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="max-w-40 relative h-20 w-20 rounded-md overflow-hidden">
                {(post.mainImage || post.featured_image) ? (
                  <Image fill src={post.mainImage || post.featured_image} alt={post.title || "Related Post Image"} />
                ) : (
                  <Image fill src={"/images/blog/blog-01.png"} alt={"Related Post Image"} />
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/blogDetails/${post.ID}`}>
                  {" "}
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

