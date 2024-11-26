import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS

const QuillTextEditor = () => {
  const [content, setContent] = useState(""); // State to store editor content

  const handleChange = (value) => {
    setContent(value);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { list: "ordered" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };

  return (
    <div>
      <h2>React Quill Editor</h2>
      <ReactQuill
        value={content}
        modules={modules}
        onChange={handleChange}
        style={{ minHeight: "300px" }}
        theme="snow" // Choose between "snow" and "bubble"
      />
      <p>Editor Content:</p>
      <div>{content}</div>
    </div>
  );
};

export default QuillTextEditor;
