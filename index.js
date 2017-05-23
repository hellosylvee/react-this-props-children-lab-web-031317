import React from 'react';
import ReactDOM from 'react-dom';

import Invitation from './components/Invitation';
import ThemedParty from './components/ThemedDecorations';

ReactDOM.render(
  <div>
    <Invitation>Hey, you should totally come to this awesome party I'm throwing!</Invitation>

    <ThemedParty theme="heaven">
      <p>A decoration</p>
      <p>Some other decoration</p>
      <p>A last decoration</p>
    </ThemedParty>
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!


// ThemedParty is parent, and p tags are children, passing theme="heaven" as props
// React.Children.map takes 2 parameters - 1) children themselves, 2) function that transforms the value of children
