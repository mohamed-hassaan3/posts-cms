import { sanityFetch } from "@/sanity/lib/live";
import { QUERY_POSTS } from "@/sanity/lib/queries";
import Link from "next/link";
import React from "react";

const page = async () => {
  const { data: posts } = await sanityFetch({ query: QUERY_POSTS });
  console.log(posts);
  return (
    <main className="flex flex-col p-4">
      <button className="py-1 px-4 w-fit bg-gray-400 text-black text-lg font-thin rounded-md">
        <Link href={`/`}>Back</Link>
      </button>
      <article className="my-12 space-y-6">
        <h1 className="text-xl font-semibold">Index of Posts</h1>
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-6">
          {posts &&
            posts.map((post) => (
              <li
                key={post._id}
                className="px-2 py-4 bg-amber-100 rounded-sm hover:bg-amber-200 cursor-pointer"
              >
                <Link href={`/posts/${post?.slug?.current}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      </article>
    </main>
  );
};

export default page;
