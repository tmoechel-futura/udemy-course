import "bulma/css/bulma.css";

import ProfileCard from "./components/ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-link">
        <div className="hero-body ">
          <p className="title">Personal Digital Assistant</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alex"
                handle="alexa21"
                image={AlexaImage}
                description="Alexa description"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="cortana1"
                image={CortanaImage}
                description="Cortana description"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="siri02"
                image={SiriImage}
                description="Siri description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
