import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import PostComponent from "../../../component/post/PostComponent";
import axios from "axios";
import { withRouter } from "../../../hook/withRouter";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: "1",
      title: "",
      body: "",
    },
    isUpdate: false,
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((res) => {
        //   console.log(res.data);
        this.setState({
          post: res.data,
        });
      });
  };

  handleRemove = (data) => {
    console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      console.log(res);
      this.getPostAPI();
    });
  };

  handlePostToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostAPI();
      },
      (err) => {
        console.log(err);
      }
    );
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.handlePutToAPI();
    } else {
      this.handlePostToAPI();
    }

    this.handleFormChangeClear();
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handlePutToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then(
        (res) => {
          console.log(res);
          this.getPostAPI();
        },
        (err) => {
          console.log(err);
        }
      );
  };

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    formBlogPostNew[event.target.name] = event.target.value;

    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp.toString();
    }

    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        console.log(this.state.formBlogPost);
      }
    );
  };

  handleFormChangeClear = () => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    formBlogPostNew["id"] = "";
    formBlogPostNew["userId"] = "";
    formBlogPostNew["title"] = "";
    formBlogPostNew["body"] = "";

    this.setState(
      {
        formBlogPost: formBlogPostNew,
        isUpdate: false,
      },
      () => {}
    );
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //         post: json
    //     })
    //   });

    this.getPostAPI();
  }

  handleDetail = (data) => {
    this.props.navigate(`/detail-post/${data}`);
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="add title"
            onChange={this.handleFormChange}
            value={this.state.formBlogPost.title}
          />
          <label htmlFor="body">Blog Content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="add blog content"
            onChange={this.handleFormChange}
            value={this.state.formBlogPost.body}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Save
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <PostComponent
              key={post.id}
              data={post}
              update={this.handleUpdate}
              remove={this.handleRemove}
              goDetail={this.handleDetail}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default withRouter(BlogPost);
