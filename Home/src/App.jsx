import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
   
      <nav>
        <img src={discordLogo} alt="Discord logo" className="logo" />
        <img src={menuIcon} alt="Menu icon" className="menu-icon" />
      </nav>

    
      <div className="content-wrap">
        <h1>IMAGINE A<br />PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a worldwide 
          art community. Where just you and a handful of friends can spend time together. 
          A place that makes it easy to talk every day and hang out more often.
        </p>

        <div className="buttons">
          <button className="white-btn">Download for Mac</button>
          <button className="dark-btn">Open Discord in your browser</button>
        </div>
      </div>

   
      <img src={discordBackground} alt="Discord characters" className="bg-image" />
    </div>
  );
}

export default App;
