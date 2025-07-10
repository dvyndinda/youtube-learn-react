import React, { Component, Fragment } from "react";
import ProductComponent from "../page/product/ProductComponent";
import LifeCycleComponent from "../page/lifecycle/LifeCycleComponent";
import BlogPost from "../page/blog/BlogPost";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router";
import './HomeComponent.css'
import YoutubePage from "../page/youtube/YoutubePage";
import BlogPostDetail from "../page/blog/detail/BlogPostDetail";
import HookPage from "../page/hookpage/HookPage";

class HomeComponent extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 1500);
  }
  render() {
    return (
      <Router>
        <div className="navigation">
          <Link to="/">Blog</Link>
          <Link to="/product">Product</Link>
          <Link to="/lifecycle">Lifecycle</Link>
          <Link to="/youtube">Youtube</Link>
          <Link to="/hook">Hook</Link>
        </div>
        <Routes>
          <Route path="/" element={<BlogPost/>} />
          <Route path="/detail-post/:id" element={<BlogPostDetail/>} />
          <Route path="/product" element={<ProductComponent/>} />
          <Route path="/lifecycle" element={<LifeCycleComponent/>} />
          <Route path="/youtube" element={<YoutubePage/>} />
          <Route path="/hook" element={<HookPage/>} />
        </Routes>
      </Router>
    );
  }
}

export default HomeComponent;
