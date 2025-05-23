import React from "react";

const Loading = () => {
  return (
    <span className="relative flex flex-col justify-center items-center h-screen m-auto size-3 ">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
    </span>
  );
};

export default Loading;
