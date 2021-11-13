import SignIn from './firebase/utils/signIn';
import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header'
import Content from './Content'

function App() {
  return (
      <div id="home-section">
    <Header />
      <SignIn></SignIn>
      <Content/>
      <Footer/>
    </div>
  
  );
}

export default App;




