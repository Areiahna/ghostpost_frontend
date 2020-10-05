import React, { Component } from "react";

class NewPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      post: "Roast" | "Boast",
      //   post_date: time,
    };
  }

  handleChange = (event) => {
    this.setState({
      answer: event.target.value,
    });
  };

  //https://gist.github.com/whoisryosuke/578be458b5fdb4e71b75b205608f3733
  handleSubmit = (event) => {
    fetch("http://127.0.0.1:8000/Post/", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });
  };
  render() {
    return (
      <div className="NewPostForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default NewPostForm;
