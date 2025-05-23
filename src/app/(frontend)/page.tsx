import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center h-screen gap-4">
      <button className="py-2 px-8 bg-blue-500 text-white text-lg font-bold rounded-md">
        <Link href={`/posts`}>Feed</Link>
      </button>
    </div>
  );
};

export default page;
