import React, { Component, Fragment } from "react";
import YoutubeComponent from "../../../component/youtube/YoutubeComponent";

class YoutubePage extends Component {
  render() {
    return (
      <Fragment>
        <p className="section-title">Youtube</p>
        <YoutubeComponent
          time="7.12"
          title="Tutorial Part 1"
          description="100x ditonton, 5 menit yang lalu"
        />
        <YoutubeComponent
          time="8.20"
          title="Tutorial Part 2"
          description="200x ditonton, 5 menit yang lalu"
        />
        <YoutubeComponent
          time="10.00"
          title="Tutorial Part 3"
          description="300x ditonton, 5 menit yang lalu"
        />
        <YoutubeComponent
          time="12.00"
          title="Tutorial Part 4"
          description="400x ditonton, 5 menit yang lalu"
        />
        <YoutubeComponent />
      </Fragment>
    );
  }
}

export default YoutubePage;