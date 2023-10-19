import './App.css';
import './appStyles.css'
import React, { Component } from 'react'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Daniel">
      <ComponentC />
      </UserProvider>
    </div>
  )
}

export default App;
