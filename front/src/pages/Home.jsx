import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import LogoJeu from '../img/League_of_Legends_Logo.png';
import DisplayVideo from '../components/DisplayVideo';
import 'bootstrap/dist/css/bootstrap.css';
import NameForm from './NameForm';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav className="justify-content-around">
          <Button variant="dark">
            <NavLink to="/" activeClassName="selected">
              Home
            </NavLink>
          </Button>
          <Button variant="dark">
            <NavLink to="/Search">Search</NavLink>
          </Button>
          <DropdownButton id="dropdown-basic-button" title="Jeux">
            <Dropdown.Item><NavLink to="/Lol">Lol</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/Wow">Wow</NavLink></Dropdown.Item>
          </DropdownButton>
          {/* <Nav.Item>
            <NavLink to="/Lol">Lol</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Wow">Wow</NavLink>
          </Nav.Item> */}
        </Nav>
        <div className="Addvertising-img">
          <div className="Addvertising">
            <img src={LogoJeu} className="Logo-jeu" alt="" />
            <h1>
              <span className="Text-background">
                Les tutos
                {' '}
                <span className="Semi-bold-Italic">League of Legends</span>
                {' '}
sont
                maintenant disponibles sur Up&Win !
              </span>
            </h1>
            <button type="button" className="Button">
              Go !
            </button>
          </div>
        </div>
        <div>
          <DisplayVideo />
        </div>
        <div>
          <NameForm />
        </div>
      </div>
    );
  }
}

export default Home;
