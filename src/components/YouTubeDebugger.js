import React, { Component } from "react";

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate} />;
        <button className="resolution" onClick={this.handleResolution} />;
      </div>
    );
  }
}

export default YouTubeDebugger;
