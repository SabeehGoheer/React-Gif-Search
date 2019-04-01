import React from "react";
import giphy from "../api/giphy";
import SearchBar from "./SearchBar";
import GifList from "./GifList";

class App extends React.Component {
  state = {
    gifs: []
  };
  onFormSubmit = async input => {
    const response = await giphy.get("/v1/gifs/search", {
      params: { q: input, api_key: "dc6zaTOxFJmzC" }
    });
    this.setState({ gifs: response.data.data });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        Found: {this.state.gifs.length} Gifs
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
