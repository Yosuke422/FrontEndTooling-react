import React from 'react';
import { Primary, Secondary } from '../src/components/Buttons.stories'
import './App.scss'

/**
 * The App function returns a JSX element that renders a div with a heading and two components called
 * Primary and Secondary.
 * @returns The App component is returning a JSX element.
 */
function App() {
  return (
    <div className="example">
      <h1>Hello, World!</h1>
      <Primary />  
      <Secondary /> 
    </div>
  );
}

export default App;
