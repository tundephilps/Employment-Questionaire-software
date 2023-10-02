import React, { useState, ChangeEvent } from "react";
import { BiUpload } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
const Upload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Display the selected image as a preview
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    // Clear the selected image
    setSelectedImage(null);
  };

  const uploadCoverImage2Styles: React.CSSProperties = {
    lineHeight: "114%",
    fontWeight: 600,
    display: "inline-block",
  };

  const groupChild9Styles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "5px",
    boxShadow: "3px 3px 9px rgba(190, 190, 190, 0.13)",
    border: "1px dashed #000",
    boxSizing: "border-box",
    gap: 8,
    width: "512px",
    height: "210px",
  };

  const ratioIsRecommended1Styles: React.CSSProperties = {
    fontSize: "14px",
    lineHeight: "159.5%",
    fontWeight: 500,
    color: "#979797",
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          borderRadius: "20px",
          backgroundColor: "#fff",
          boxShadow: "3px 3px 14px rgba(190, 190, 190, 0.3)",
          width: "595px",
          height: "451px",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "20px 20px 0px 0px",
            backgroundColor: "#d0f7fa",
            height: "93px",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              marginLeft: "29px",
              position: "relative",
              fontSize: "25px",
              lineHeight: "114%",
              fontWeight: "600",
              color: "#000",
              textAlign: "left",
              display: "inline-block",
              width: "287px",
              height: "30px",
            }}
          >
            Upload Cover Image
          </p>
        </div>
        <div style={{ padding: "57px 43px" }}>
          <div style={groupChild9Styles}>
            {selectedImage ? (
              <div>
                <img
                  src={selectedImage}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "85%",
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "#a80000",
                    fontWeight: 600,
                    fontSize: "15px",
                    position: "absolute",
                    top: "90%",
                    left: "5%",
                  }}
                  onClick={handleDeleteImage}
                >
                  <IoMdClose style={{ fontSize: "33px" }} />
                  Delete & re-upload
                </div>
              </div>
            ) : (
              <label htmlFor="imageUpload" className="upload-icon">
                <BiUpload style={{ fontSize: 33 }} />
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </label>
            )}
            <div style={uploadCoverImage2Styles}>Upload cover image</div>
            <div style={ratioIsRecommended1Styles}>
              16:9 ratio is recommended. Max image size 1mb
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
