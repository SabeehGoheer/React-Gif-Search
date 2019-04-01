import React from "react";
import "./GifList.css";

class GifCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.gifRef = React.createRef();
  }

  componentDidMount() {
    this.gifRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    debugger;
    const height = this.gifRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  };

  render() {
    const { title, images } = this.props.gif;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.gifRef} alt={title} src={images.downsized.url} />
      </div>
    );
  }
}

export default GifCard;
