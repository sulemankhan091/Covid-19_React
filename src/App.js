import React, { Component } from "react";
import "./App.css";

import { Cards, Chart, CountryPicker } from "./Components";
import { fetchData } from "./api";
class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
