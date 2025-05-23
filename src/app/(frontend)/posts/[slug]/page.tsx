import Notfound from "@/app/not-found";
import { sanityFetch } from "@/sanity/lib/live";
import { QUERY_POST } from "@/sanity/lib/queries";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { data: post } = await sanityFetch({
    query: QUERY_POST,
    params: await params,
  });
  console.log(post);
  if (!post) {
    Notfound();
  }
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
};

export default page;
