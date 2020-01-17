import React from 'react';

import './global.css';
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Sign Up</strong>
        <form action="">
          <div className="input-block">
            <label htmlFor="github_user">Github User</label>
            <input name="github_user" id="github_user" required />
          </div>

          <div className="input-block">

            <label htmlFor="techs">Techs</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude" required />
          </div>

          </div>

          <button type="submit">Save</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/52054459?s=460&v=4" alt="Diego Braga"/>
              <div className="user-info">
                <strong>Diego Braga</strong>
                <span>ReactJs, React Native, Node.Js</span>
              </div>
            </header>
            <p>Software Engineer and JavaScript enthusiast.</p>
            <a href="https://github.com/diebraga">Github Profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/52054459?s=460&v=4" alt="Diego Braga"/>
              <div className="user-info">
                <strong>Diego Braga</strong>
                <span>ReactJs, React Native, Node.Js</span>
              </div>
            </header>
            <p>Software Engineer and JavaScript enthusiast.</p>
            <a href="https://github.com/diebraga">Github Profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/52054459?s=460&v=4" alt="Diego Braga"/>
              <div className="user-info">
                <strong>Diego Braga</strong>
                <span>ReactJs, React Native, Node.Js</span>
              </div>
            </header>
            <p>Software Engineer and JavaScript enthusiast.</p>
            <a href="https://github.com/diebraga">Github Profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/52054459?s=460&v=4" alt="Diego Braga"/>
              <div className="user-info">
                <strong>Diego Braga</strong>
                <span>ReactJs, React Native, Node.Js</span>
              </div>
            </header>
            <p>Software Engineer and JavaScript enthusiast.</p>
            <a href="https://github.com/diebraga">Github Profile</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
