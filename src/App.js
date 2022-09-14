import './App.css';
import NavbarComponet from './Components/Navbar';
import SmallNavbarComponet from './Components/SmallNavbarComponet';
import FirstContainer from './Components/FirstContainer';
import SecondContainer from './Components/SecondContainer';
import ThirdContainer from './Components/ThirdContainer';
import FourthContainer from './Components/FourthContainer';
import FifthContainer from './Components/FifthContainer';
function App() {
  return (
   <>
    <div class="container">
  <div class="main-navbar"><NavbarComponet/></div>
   <div class="small-navbar"><SmallNavbarComponet/></div>
  <div class="first-contaner"><FirstContainer/></div> 
  <div class="second-container"><SecondContainer/></div>
  <div class="third-container"><ThirdContainer/></div>
  <div class="fourth-container"><FourthContainer/></div>
 <div class="fifth-container"><FifthContainer/></div>  
</div>
   </>
  );
}

export default App;
