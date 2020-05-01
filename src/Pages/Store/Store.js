import React, { Component } from "react";

import { STORE_URL } from "../../Config";

import Search from "./Search/Search";
import Map from "./Map/Map";
import List from "./List/List";

import "./Store.scss";

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [],
      userInput: "",
      checked: { all: true, item: false, mall: false },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    fetch(`${STORE_URL}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ stores: res.stores }, () =>
          console.log(this.state.stores)
        )
      );
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  handleCheck(e) {
    const checked = this.state.checked;
    checked[e.target.value] = e.target.checked;
    console.log(e.target.value);
    if (checked[e.target.value] === "true" || checked["all"] === true) {
      for (let key in checked) {
        key === e.target.value ? (checked[key] = true) : (checked[key] = false);
      }
    }

    this.setState(
      {
        checked: checked,
      },
      () => {
        console.log(checked);
      }
    );
  }

  render() {
    const { stores, userInput } = this.state;
    const { all, item, mall } = this.state.checked;

    const filteredStores = stores.filter(
      (store) =>
        (store.name.toLowerCase().includes(userInput.toLowerCase()) ||
          store.address1.toLowerCase().includes(userInput.toLowerCase()) ||
          store.address2.toLowerCase().includes(userInput.toLowerCase())) &&
        (all ||
          (item && store.store_type_id === 1) ||
          (mall && store.store_type_id === 2))
    );

    return (
      <div className="Store">
        <div className="banner-mobile">
          <h1 className="title">매장찾기</h1>
          <a className="button">
            <img className="icon" src={""} alt="" />
          </a>
        </div>
        <div className="picture"></div>
        <div className="content-wrapper">
          <div className="content">
            <Search
              handleChange={this.handleChange}
              handleCheck={this.handleCheck}
              checked={this.state.checked}
            />
            <Map stores={filteredStores} />
            <List stores={filteredStores} />
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
