import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import LogoJeu from '../img/League_of_Legends_Logo.png';
import DisplayVideo from '../components/DisplayVideo';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Home;
