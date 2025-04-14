import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      <div className="flex justify-center gap-2 p-8">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
