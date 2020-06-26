import React from 'react';
import { render } from 'react-dom';
import Text from './components/text/Text'


function App() {
  return(
    <>
    <h1>App</h1>
    <Text as="h1" type="default" color="grey">Olá</Text>
    </>
  );
}

render(<App />, document.getElementById("root"));
