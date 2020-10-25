import React from 'react';

import { Container } from './styles';

const Infos = () => {
  return (
    <Container>
      <div className="infos">
        <h1>Infos</h1>
        <strong>Lucas Farias</strong>
        <section>
          <p>This mini-project was created using:</p>
          <ul>
            <li>ReactJS
              <ul>
                <li className="dependendecy">react-router-dom (React web routing)</li>
                <li className="dependendecy">axios (Promise based HTTP client)</li>
                <li className="dependendecy">styled-components (pre-processor CSS with JS)</li>
              </ul>
            </li>
            <li>NodeJS
              <ul>
                <li className="dependendecy">cors (Cross-origin resource sharing)</li>
                <li className="dependendecy">dotenv (.env files variables)</li>
                <li className="dependendecy">expressJS (framework for web applications)</li>
                <li className="dependendecy">firebase-admin (firebase SDK to access database)</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
  </Container>
  );
};

export default Infos;