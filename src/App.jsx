import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { useNavigation } from 'react-router';
import { PulseLoader } from 'react-spinners';

function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <Navbar></Navbar>
      <MainContainer></MainContainer>

      {isNavigating && (
        <div className="flex justify-center mt-8">
          <PulseLoader color="#2f4f4f" />
        </div>
      )}
      <div className="flex justify-center gap-2 p-8">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
