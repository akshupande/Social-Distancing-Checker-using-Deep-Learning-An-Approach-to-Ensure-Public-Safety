import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
//import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Home } from './pages/Home';
import theme from './theme';
import GithubCorner from 'react-github-corner';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Route path="/:id?" component={Home} exact />
      </Router>
      <GithubCorner
        direction="left"
        href="https://github.com/slavkojos/AirSend"
        target="_blank"
      />
    </ChakraProvider>
  );
}

export default App;
