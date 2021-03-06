import React, { Component } from "react";
import { Link } from "react-router-dom";

import Shoesmenu from "./Shoesmenu/Shoesmenu";
import "./Header.scss";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };

    this.onClickShoes = this.onClickShoes.bind(this);
  }

  onClickShoes() {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  }

  render() {
    return (
      <>
        <div className="Header">
          <div className="content">
            <div className="nav-all">
              <div className="flex-aligncenter">
                <div className="nav-leftflex">
                  <div className="nav-leftname">
                    <div className="logo-flex-img">
                      <a className="logo-flex" href="/#">
                        <img
                          src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Converse3-Logo.wine.svg"
                          className="header-navigation"
                          alt=""
                        />
                      </a>
                      <nav className="nav-content">
                        <ul className="ul-name">
                          <li className="li-name">
                            <button onClick={this.onClickShoes}>신발</button>
                          </li>
                          <li className="li-name">
                            <button onClick={this.onClickShoes}>의류</button>
                          </li>
                          <li className="li-name">
                            <button onClick={this.onClickShoes}>아동</button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="navright-all">
                  <div className="nav-right">
                    <Link to={"/mypage"}>
                      <div className="user-img">
                        <img
                          src="https://image.flaticon.com/icons/svg/747/747376.svg"
                          alt=""
                        />
                      </div>
                    </Link>
                    <Link to={"/cart"}>
                      <div className="shopping-cart">
                        <img
                          src="https://image.flaticon.com/icons/svg/481/481384.svg"
                          alt=""
                        />
                      </div>
                    </Link>
                    <div className="heart-img">
                      <img
                        src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                        alt=""
                      />
                    </div>

                    <Link to={"/cscenter"}>
                      <div className="question-mart">
                        <img
                          src="https://image.flaticon.com/icons/svg/906/906794.svg"
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="search-box">
                    <image
                      className="search-img"
                      src="https://image.flaticon.com/icons/svg/101/101826.svg"
                      alt="searchbar"
                    ></image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Shoesmenu isClicked={this.state.isClicked} />
      </>
    );
  }
}

export default Header;
