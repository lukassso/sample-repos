import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    images: null,
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      this.setState({
        images: res.data.slice(0, 10),
      });
    });
  }

  render() {
    // console.log(this.state.images && this.state.images)
    const imageList = this.state.images && this.state.images.map(image => {
      // console.log(image);
      return(
        <div key={image.id}>
          <img src={image.url} alt={image.title}/>
          <p>{image.title}</p>
        </div>
      )
    });

    // console.log(imageList);

    return <div className="container">{imageList ? imageList : <p>loading...</p>}</div>;
  }
}

export default App;
