import React from "react";
import { debounce } from "lodash";

export default class FillWindow extends React.Component {
  updateDimensions = debounce(() => {
    if (this.props.disabled) return
    this.setState({ randomRerenderTrigger: Math.random() });
  }, 100);
  
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render () {
    let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      width = w.innerWidth || e.clientWidth || g.clientWidth,
      height = w.innerHeight || e.clientHeight || g.clientHeight;
    const windowDimensions = {
      width,
      height
    };
    if (this.props.disabled) return this.props.children(windowDimensions)
    return (
      <div style={{width, height, position: "fixed", top: 0, left: 0, background: "white",  }}>
        {this.props.children(windowDimensions)}
      </div>
      
    )
  }
}