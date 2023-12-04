import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
// import { cleanBorder, primary45 } from "./utils/colors";

export default function Drop({ onLoaded }) {


  const onDrop = useCallback((acceptedFiles) => {
    onLoaded(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
  });

  return (
    <div {...getRootProps()} className="text-center text-white  mt-5  cursor-pointer rounded-sm outline-none font-medium select-none border-2 border-white border-dashed w-[90%] h-[50px] items-center justify-center flex bg-[#fff9f933] text-[15px]">
      <input {...getInputProps()}/>
      {isDragActive ? <p>+ New Chat <br /> Drop a PDF here</p> : <p>+ New Chat <br />Drag a PDF here</p>}
    </div>
  );
}
