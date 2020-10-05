import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/Post/")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  vote_score = () => {
    console.log("Wassup");
  };

  PUBLIC_URL = "/";
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="header">
            <button>
              <NavLink exact to="/">
                Main
              </NavLink>
            </button>
            <button>
              <NavLink exact to="/Roast">
                Roast
              </NavLink>
            </button>
            <button>
              <NavLink exact to="/Boast">
                Boast
              </NavLink>
            </button>
            <button>
              <NavLink exact to="/Sorted">
                Sorted
              </NavLink>
            </button>
          </header>
          <hr></hr>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                {this.state.posts.map((p) => (
                  <div>
                    <h2>{p.post}</h2>
                    <li>{p.post_date}</li>
                    <li>{p.text}</li>
                    <button onClick={this.vote_score}>
                      Upvotes: {p.upvotes}
                    </button>
                    <button onClick={this.vote_score}>
                      DownVotes: {p.downvotes}
                    </button>
                  </div>
                ))}
              </div>
            )}
          />
          <Route
            exact
            path="/Roast"
            render={() => (
              <div>
                {this.state.posts.map((p) => {
                  if (p.post === "Roast")
                    return (
                      <div>
                        <h2>{p.post}</h2>
                        <li>{p.post_date}</li>
                        <li>{p.text}</li>
                        <button onClick={this.vote_score}>
                          Upvotes: {p.upvotes}
                        </button>
                        <button onClick={this.vote_score}>
                          DownVotes: {p.downvotes}
                        </button>
                      </div>
                    );
                })}
              </div>
            )}
          />
          <Route
            exact
            path="/Boast"
            render={() => (
              <div>
                {this.state.posts.map((p) => {
                  if (p.post === "Boast")
                    return (
                      <div>
                        <h2>{p.post}</h2>
                        <li>{p.post_date}</li>
                        <li>{p.text}</li>
                        <button onClick={this.vote_score}>
                          Upvotes: {p.upvotes}
                        </button>
                        <button onClick={this.vote_score}>
                          DownVotes: {p.downvotes}
                        </button>
                      </div>
                    );
                })}
              </div>
            )}
          />
          <Route
            exact
            path="/Sorted"
            render={() => (
              <div>
                <h1>Working on it</h1>
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
