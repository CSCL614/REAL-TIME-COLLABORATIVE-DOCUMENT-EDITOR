import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

const Editor = () => {
  const [content, setContent] = useState("");
  const quillRef = useRef(null);

  // Load document and listen for updates
  useEffect(() => {
    axios.get("http://localhost:5000/document", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }).then((res) => {
      setContent(res.data.content);
    });

    socket.on("documentUpdate", (updatedContent) => {
      setContent(updatedContent);
    });

    return () => socket.off("documentUpdate");
  }, []);

  // Auto-save when content changes
  useEffect(() => {
    if (content !== "") {
      axios.post("http://localhost:5000/document", { content }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
    }
  }, [content]);

  // Handle content changes and emit to socket
  const handleChange = (value) => {
    setContent(value);
    socket.emit("documentUpdate", value);
  };

  // Manual Save Button
  const handleSave = () => {
    axios.post("http://localhost:5000/document", { content }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }).then(() => {
      alert("Document saved successfully!");
    }).catch(() => {
      alert("Failed to save document.");
    });
  };

  // Undo / Redo Handlers
  const handleUndo = () => {
    const editor = quillRef.current.getEditor();
    editor.history.undo();
  };

  const handleRedo = () => {
    const editor = quillRef.current.getEditor();
    editor.history.redo();
  };

  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"]
    ],
    history: {
      delay: 1000,
      maxStack: 100,
      userOnly: true
    }
  };

  const formats = [
    "font", "size",
    "bold", "italic", "underline", "strike",
    "color", "background",
    "align",
    "list", "bullet",
    "clean"
  ];

  return (
    <div className="container mt-4">
      <h3>REAL-TIME COLLABORATIVE DOCUMENT EDITOR</h3>
      <div className="mb-3">
        <button onClick={handleUndo} className="btn btn-outline-secondary me-2">Undo</button>
        <button onClick={handleRedo} className="btn btn-outline-secondary me-2">Redo</button>
        <button onClick={handleSave} className="btn btn-primary">Save</button>
      </div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        style={{ height: "300px", marginBottom: "50px" }}
      />
    </div>
  );
};

export default Editor;
