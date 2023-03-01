import { Button } from "@mui/material";
import React, { useState } from "react";

const ImageUpload = () => {
  const [fileImage, setFileImage] = useState("");
  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };
  const deleteImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };
  return (
    <div className="text-center mt-10">
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        accept="image/*"
        onChange={saveFileImage}
      />
      <h2>이미지 보기</h2>
      <div>
        {fileImage && (
          <img alt="sample" src={fileImage} style={{ margin: "auto" }} />
        )}
      </div>
      <button className="btn" onClick={deleteImage}>
        삭제
      </button>
    </div>
  );
};
export default ImageUpload;
