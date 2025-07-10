import React, { Component } from "react";
import { withRouter } from "../../../../hook/withRouter";
import axios from "axios";
import "./BlogPostDetail.css";

class BlogPostDetail extends Component {
  state = {
    formBlogPost: {
      userId: 1,
      id: "1",
      title: "",
      body: "",
    },
  };

  componentDidMount() {
    const { id } = this.props.params;
    axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      this.setState({
        formBlogPost: res.data,
      });
    });
  }

  render() {
    return (
      <>
        <div className="p-detail-post">
          <p className="detail-title">{this.state.formBlogPost.title}</p>
          <p className="detail-body">{this.state.formBlogPost.body}</p>
        </div>
      </>
    );
  }
}

export default withRouter(BlogPostDetail);
