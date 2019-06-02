import React from 'react';
/* import './displayVideo.css'; */

const DisplayVideo = () => (
  <div className="container">
    <div className="vid">
      <iframe
        title="Guide du Noob"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/WD9qgO0jo-M?rel=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <div className="vid">
      <iframe
        title="Choisir son champion"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/-PUTqQN2C4M"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <div className="vid">
      <iframe
        title="Objet et statistiques"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/r2khGGQYvsI"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

export default DisplayVideo;
