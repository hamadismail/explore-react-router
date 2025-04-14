import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { useNavigation } from 'react-router';

function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      <div className="flex justify-center gap-2 p-8">
        {isNavigating && (
          <span className="loading loading-ring loading-xl"></span>
        )}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
