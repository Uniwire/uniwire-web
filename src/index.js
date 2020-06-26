import React from 'react';
import { render } from 'react-dom';
import Text from './components/text/Text'


function App() {
  return(
    <>
    <h1>App</h1>
    <Text color="red" size="30px"/>
    </>
  );
}

render(<App />, document.getElementById("root"));
