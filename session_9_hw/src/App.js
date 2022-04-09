import './App.css';
import { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState('')

  return (
    <div className="App">
      <Header user={user}/>

      <Content setUser={setUser}/>

      <Footer />
    </div>
  );
}

export default App;
