import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import { removeFave } from "../actions";

import PropTypes from "prop-types";
import { withRouter } from "react-router";

import { FaveWrapper } from "../styles/profile_styles.js";

import bargs from "../img/characters/bargs.jpeg";
import beru from "../img/characters/beru.jpg";
import c3po from "../img/characters/c3po.jpeg";
import darth from "../img/characters/darth.jpg";
import luke from "../img/characters/luke.jpeg";
import obi from "../img/characters/obi.jpeg";
import owen from "../img/characters/owen.jpeg";
import princess from "../img/characters/princess.jpg";
import r from "../img/characters/r.jpg";
import r2d2 from "../img/characters/r2d2.jpg";

class FaveProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.users.name,
      planet: "",
      currentPath: ""
    };

    this.removeFavorite = this.removeFavorite.bind(this);
  }

  componentDidMount() {
    const homeworld = this.props.users.homeworld;
    axios.get(homeworld).then(res => {
      this.setState({
        planet: res.data.name
      });
    });
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  getProfilePic(name) {
    if (name === "Luke Skywalker") {
      return luke;
    }
    if (name === "C-3PO") {
      return c3po;
    }
    if (name === "R2-D2") {
      return r2d2;
    }
    if (name === "Darth Vader") {
      return darth;
    }
    if (name === "Leia Organa") {
      return princess;
    }
    if (name === "Owen Lars") {
      return owen;
    }
    if (name === "Beru Whitesun lars") {
      return beru;
    }
    if (name === "R5-D4") {
      return r;
    }
    if (name === "Biggs Darklighter") {
      return bargs;
    }
    if (name === "Obi-Wan Kenobi") {
      return obi;
    }
  }

  removeFavorite() {
    const unFave = this.props.users.name;
    this.props.removeFave(unFave);
  }

  render() {
    let pathCheck = this.props.location.pathname;
    const p = "/Users/" + this.props.users.name;
    pathCheck = pathCheck.replace("%20", " ");
    console.log('pathCheck', pathCheck);
    console.log('p', p);

    const { match, location, history } = this.props;

    return (
      <FaveWrapper>
        <div className="row m-0">
          <div className="col-2 p-0">
            <Link
              className={pathCheck === p ? "disabled" : null}
              to={{
                pathname: `${this.props.users.name}`,
                state: {
                  url: this.props.users.url,
                  planet: this.state.planet,
                  films: this.props.users.films,
                  vehicles: this.props.users.vehicles,
                  ships: this.props.users.starships,
                  species: this.props.users.species
                }
              }}
            >
              <img
                className="profile-pic"
                alt={this.getProfilePic(this.props.users.name)}
                src={this.getProfilePic(this.props.users.name)}
              />
            </Link>
          </div>

          <div className="col-8">
            <p>You are now at {location.pathname}</p>
            <p>{this.props.users.name}</p>
          </div>
          <div className="col-2 text-right">
            <p onClick={this.removeFavorite}>X</p>
          </div>
        </div>
      </FaveWrapper>
    );
  }
}
export default connect(null, { removeFave })(withRouter(FaveProfile))
