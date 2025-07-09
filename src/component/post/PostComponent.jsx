import React from "react";

const PostComponent = ({ data, remove, update }) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placehold.co/200x150" alt="dummy" />
      </div>
      <div className="content">
        <p className="title">{data.title}</p>
        <p className="desc">{data.body}</p>
        <button className="update" onClick={() => update(data)}>Update</button>
        <button className="remove" onClick={() => remove(data.id)}>Remove</button>
      </div>
    </div>
  );
};

export default PostComponent;
