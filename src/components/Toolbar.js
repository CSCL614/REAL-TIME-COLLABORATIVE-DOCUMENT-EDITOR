import React from "react";

const Toolbar = () => {
  return (
    <div className="d-flex justify-content-between bg-light p-2">
      <button className="btn btn-primary">Bold</button>
      <button className="btn btn-secondary">Italic</button>
      <button className="btn btn-warning">Underline</button>
    </div>
  );
};

export default Toolbar;
