import React, { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewimg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();

  const maxFileSizeInBytes = 3 * 1024 * 1024;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeInBytes) {
        showToast("Error", "File size must be less than 3MB", "error");
        setSelectedFile(null);
      }
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      showToast("Error", "Please select an image file", "error");
      setSelectedFile(null);
    }
  };

  return { selectedFile, setSelectedFile, handleImageChange };
};

export default usePreviewimg;
