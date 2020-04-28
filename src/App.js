import React, { Component, Fragment } from "react";
import "./App.css";
import Member from "./components/Member";
import Button from "./components/Button";
import Input from "./components/Input";

const family = [
  {
    id: 1,
    name: "Rotsy",
    gender: "female",
    age: 35,
    isChildrenVisible: true,
    children: ["Marcelo"],
  },
  {
    id: 2,
    name: "Miary",
    age: 32,
    isChildrenVisible: true,
    children: ["Miantsa", "Miangola"],
  },
  {
    id: 3,
    name: "Mitia",
    age: 23,
    isChildrenVisible: true,
  },
];

class App extends Component {
  state = {
    family,
    isMemeVisible: true,
  };

  handleClick = (inc) => {
    const family = { ...this.state.family };
    family[0].age += inc;
    this.setState({ family });
  };

  handleChange = (event, key) => {
    const family = { ...this.state.family };
    const name = event.target.value;
    family[key].name = name;
    this.setState({ family });
  };

  toggleMemeVisibility = () => {
    const isMemeVisible = !this.state.isMemeVisible;
    this.setState({ isMemeVisible });
  };

  toggleChildren = (id) => {
    const family = { ...this.state.family };
    console.log(id);
    family[id].isChildrenVisible = !this.state.family[id].isChildrenVisible;
    this.setState({ family });
  };

  render() {
    const { family, isMemeVisible } = this.state;
    const { title } = this.props;
    const liste = Object.keys(family).map((key) => (
      <Fragment>
        <hr></hr>

        <Member
          key={key}
          toggleChildren={() => this.toggleChildren(key)}
          name={family[key].name}
          age={family[key].age}
          gender={family[key].gender}
          children={family[key].children}
          isChildrenVisible={family[key].isChildrenVisible}
        ></Member>
        <Input
          handleMemberChange={(event) => this.handleChange(event, key)}
          member={family[key].name}
        />
      </Fragment>
    ));

    return (
      <Fragment>
        <div className="App">
          <h1>
            Hello world in <span className="title">{title}</span>{" "}
          </h1>
        </div>
        <div className="page-body">
          {liste}
          <Member name={family[1].name} age={family[1].age}>
            <strong>Miantsa et Miangola</strong>
            {isMemeVisible ? (
              <p className="meme">{family[1].name} est gros</p>
            ) : null}
            <button onClick={this.toggleMemeVisibility}>
              {isMemeVisible ? "hide" : "show"}
            </button>
          </Member>
        </div>
        <div>
          <Button handleMemberClick={() => this.handleClick(2)}></Button>
        </div>
      </Fragment>
    );
  }
}

export default App;
