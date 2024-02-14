import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/layout/'
import Home from './components/home';
import About from './components/home/about';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
