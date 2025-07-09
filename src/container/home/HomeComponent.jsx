import React, { Component } from "react";
// import YoutubeComponent from "../../component/youtube/YoutubeComponent";
// import ProductComponent from "../product/ProductComponent";
// import LifeCycleComponent from "../lifecycle/LifeCycleComponent";
import BlogPost from "../blog/BlogPost";

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
      <div>
        {/* <p>Youtube Component</p>
        <hr />
        <YoutubeComponent time="7.12" title="Tutorial Part 1"  description="100x ditonton, 5 menit yang lalu"/>
        <YoutubeComponent time="8.20" title="Tutorial Part 2" description="200x ditonton, 5 menit yang lalu"/>
        <YoutubeComponent time="10.00" title="Tutorial Part 3" description="300x ditonton, 5 menit yang lalu"/>
        <YoutubeComponent time="12.00" title="Tutorial Part 4" description="400x ditonton, 5 menit yang lalu"/>
        <YoutubeComponent /> */}

        {/* <p>Product Component</p>
        <hr />
        <ProductComponent /> */}

        {/* <p>LifeCycle Component</p>
        <hr />
        {this.state.showComponent ? <LifeCycleComponent /> : null} */}

        {/* <p>Blog Post</p>
        <hr /> */}
        <BlogPost />
      </div>
    );
  }
}

export default HomeComponent;
