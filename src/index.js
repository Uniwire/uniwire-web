import React from 'react';
import { render } from 'react-dom';
import Text from './components/text/Text'


function App() {
  return(
    <>
    <h1>Está página é um só um exemplo de teste de componentes,<br/>
    logo menos será adicionado o StoryBook para melhor vizualização dos mesmos. </h1>
    <Text type="default">Texto</Text>
    </>
  );
}

render(<App />, document.getElementById("root"));
