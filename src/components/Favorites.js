import React, { Component } from "react";
import { connect } from "react-redux";
import { setFavorites } from "../actions";

import FaveProfile from "./FaveProfile";

import { Link } from "react-router-dom";

class Favorites extends Component {
  render() {
    const fave = this.props.favorites;
    console.log("FAVES PAGE", fave);
    return (
      <div className="row p-0 m-0">
        <div className="col-8">
          <p>Favorites</p>
        </div>
        <div className="col-4 text-right">
          <p onClick={this.props.hide}>X</p>
        </div>
        {fave &&
          fave.map((user, index) => <FaveProfile key={index} users={user} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.setFavorites
  };
}

export default connect(
  mapStateToProps,
  null
)(Favorites);
