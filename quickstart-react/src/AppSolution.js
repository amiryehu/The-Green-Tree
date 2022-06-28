import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

class AppSolution extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      context: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
    monday.listen("settings", (res) => {
      console.log("settings:" + res.data);
    });

    monday.api(`query { me { name } }`).then((res) => {
      console.log("name:" + res.data.me.name);
    });
  }

  render() {
    return (
      <div className="App" style={{ background: settings.background }}>
        Hello!
      </div>
    );
  }
}

export default AppSolution;
