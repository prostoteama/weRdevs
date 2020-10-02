import { Component } from "react";
import { createPortal } from "react-dom";

const body = document.querySelector("body");
export class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    body.appendChild(this.el);
  }

  componentWillUnmount() {
    body.removeChild(this.el);
  }
  render() {
    return createPortal(this.props.children, this.el);
  }
}
