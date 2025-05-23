import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <p>Page not found 404 please try again</p>
      <button className="border px-8 py-2">
        <Link href={`/`}>Back</Link>
      </button>
    </div>
  );
};

export default Notfound;
