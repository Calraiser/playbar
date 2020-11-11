import {
  ActiontrackContainer,
  Actiontrack,
  Container,
  ColLeft,
  ColCenter,
  ColRight,
} from "./App.style";

import BackButtonComponent from "./components/trackControls/prevTrack/Prev";
import PlayButtonComponent from "./components/trackControls/playTrack/Play";
import ForwardButtonComponent from "./components/trackControls/nextTrack/Next";

import TitleComponent from "./components/progressTrack/title/Title";
import ProgressBarComponent from "./components/progressTrack/bar/Bar";

import AddComponent from "./components/trackActions/addTrack/Add";
import FavoriteComponent from "./components/trackActions/favoriteTrack/Favorite";

import CastComponent from "./components/prayerOptions/cast/Cast";
import RepeatComponent from "./components/prayerOptions/repeat/Repeat";
import SuffleComponent from "./components/prayerOptions/suffle/Suffle";
import VolumeComponent from "./components/prayerOptions/volume/Volume";

function App() {
  return (
    <Container>
      <ColLeft>
        <BackButtonComponent />
        <PlayButtonComponent />
        <ForwardButtonComponent />
      </ColLeft>

      <ColCenter>
        <ActiontrackContainer>
          <TitleComponent />
          <Actiontrack>
            <AddComponent />
            <FavoriteComponent />
          </Actiontrack>
        </ActiontrackContainer>
        <ProgressBarComponent />
      </ColCenter>

      <ColRight>
        <CastComponent clasName="item" />
        <RepeatComponent />
        <SuffleComponent />
        <VolumeComponent />
      </ColRight>
    </Container>
  );
}

export default App;
