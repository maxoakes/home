import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="static">
          <div className="background"></div>
      </div>
      <div className="content">
          <div id="home">
              <div className="weather">
                  <div>
                      <h2 id="location-title"> </h2>
                  </div>
                  <div className="forecast">
                      <div id="today-panel" className="day" onclick="openTab(event, 'today', 'weather-data')"></div>
                      <hr className="seperator"/>
                      <div id="day0-panel" className="day" onclick="openTab(event, 'day0', 'weather-data')"></div>
                      <hr className="seperator"/>
                      <div id="day1-panel" className="day" onclick="openTab(event, 'day1', 'weather-data')"></div>
                      <hr className="seperator"/>
                      <div id="day2-panel" className="day" onclick="openTab(event, 'day2', 'weather-data')"></div>
                      <hr className="seperator"/>
                      <div id="day3-panel" className="day" onclick="openTab(event, 'day3', 'weather-data')"></div>
                  </div>
                  <div className="weather-description">
                      <div id="today" className="weather-data">
                      </div>
                      <div id="day0" className="weather-data">
                      </div>
                      <div id="day1" className="weather-data">
                      </div>
                      <div id="day2" className="weather-data">
                      </div>
                      <div id="day3" className="weather-data">
                      </div>
                  </div>
              </div>
              <div className="feed1">feed1</div>
              <div className="feed2">feed2</div>
              <div className="feed3">feed3</div>
          </div>
      </div>
    </div>
  );
}

export default App;
