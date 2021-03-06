import React, { Component } from "react";
import { connect } from "react-redux";
import { HeaderWrapper } from "../styles/header_styles.js";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import Favorites from "./Favorites";

import bargs from "../img/characters/bargs.jpeg";
import c3po from "../img/characters/c3po.jpeg";
import darth from "../img/characters/darth.jpg";
import luke from "../img/characters/luke.jpeg";
import princess from "../img/characters/princess.jpg";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.hide = this.hide.bind(this);
  }

  getAvatar(avatar) {
    if (avatar === "bargs") {
      return bargs;
    }
    if (avatar === "c3po") {
      return c3po;
    }
    if (avatar === "darth") {
      return darth;
    }
    if (avatar === "luke") {
      return luke;
    }
    if (avatar === "princess") {
      return princess;
    }
  }

  handleClick() {
    this.setState({ visible: !this.state.visible });
  }

  hide() {
    this.setState({
      visible: false
    });
  }

  render() {
    let ava = this.props.setAvatar;

    const avatar = this.getAvatar(ava);
    return (
      <HeaderWrapper>
        <CSSTransitionGroup transitionName="example">
          {this.state.visible ? (
            <div className="favorites">
              <Favorites hide={this.hide} />
            </div>
          ) : null}
        </CSSTransitionGroup>

        <div className="col" />
        <div className="col text-right pt-2">
          <i onClick={this.handleClick} class="fas fa-heart liked" />{" "}
          {this.props.setFavorites.length}
        </div>
        <div className="col text-right">
          <p className="username">
            <span>Welcome</span> <strong>{this.props.setUsername}</strong>
          </p>
          {avatar && <img className="avatar" src={this.getAvatar(ava)} />}
        </div>
      </HeaderWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    setUsername: state.setUsername,
    setAvatar: state.setAvatar,
    setFavorites: state.setFavorites
  };
}

export default connect(
  mapStateToProps,
  null
)(Header);
