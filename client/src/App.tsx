import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import chroma from 'chroma-js';
import { v4 as uuidv4 } from 'uuid';
import DemoPage from './components/DemoPage';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import PalettePage from './components/PalettePage';
import ExplorePage from './components/ExplorePage';
import colorService from './services/colorService';

interface IState {
  colors: {
    id: string;
    color: string;
  }[];
}

function App() {
  const [colors, setColors] = useState<IState['colors']>([]);
  const [colorMode, setColorMode] = useState<string>('monochrome');

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const getInitialColors = async () => {
      const colorSlug = location.pathname.split('/')?.[2];
      const initialColors = colorSlug
        ? colorService.getColorsArrFromSlug(colorSlug)
        : await colorService.generatePalette('monochrome');
      setColors(initialColors);
    };
    getInitialColors();
  }, []);

  useEffect(() => {
    generatePalette();
  }, [colorMode]);

  useEffect(() => {
    const colorSlug = colorService.getColorSlug(colors);
    if (location.pathname.startsWith(`/palette`)) {
      history.replace(`/palette/${colorSlug}`);
    } else if (location.pathname.startsWith(`/demo`)) {
      history.replace(`/demo/${colorSlug}`);
    }
  }, [colors]);

  const generatePalette = async () => {
    let first = chroma.random().hex().substring(1);
    let response = colorService.getPalette(first, colorMode, colors.length);
    let returnedArray = (await response).data.colors;
    let newArray = [];
    for (let i = 0; i < returnedArray.length; i++) {
      newArray.push({ id: uuidv4(), color: returnedArray[i].hex.value });
    }
    if (colors.length === 0) return;
    setColors(newArray);
  };

  const addColor = () => {
    let rand =
    "#" + (Math.random().toString(16) + "000000").slice(2, 8).toUpperCase()
    let newColor = {
      id: uuidv4(),
      color: rand,
    };
    setColors((colors) => [...colors, newColor]);
  };

  if (colors.length === 0) {
    return null;
  }

  return (
    <div className="App">
      <Navbar colors={colors} />
      <Switch>
        <Route exact path="/">
          <LandingPage setColors={setColors} colorMode={colorMode} />
        </Route>
        <Route exact path={`/palette/:colorSlug`}>
          <PalettePage
            colors={colors}
            setColors={setColors}
            setColorMode={setColorMode}
            addColor={addColor}
            generatePalette={generatePalette}
          />
        </Route>
        <Route exact path={`/demo/:colorSlug}`}>
          <DemoPage
            colors={colors}
            setColorMode={setColorMode}
            generatePalette={generatePalette}
          />
        </Route>
        <Route exact path="/explore">
          <ExplorePage setColors={setColors} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
