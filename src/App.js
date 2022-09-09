import './App.css';
import NavbarComponet from './Components/Navbar';
import SmallNavbarComponet from './Components/SmallNavbarComponet';
import FirstContainer from './Components/FirstContainer';
function App() {
  return (
   <>
    <div class="container">
  <div class="main-navbar"><NavbarComponet/></div>
  <div class="small-navbar"><SmallNavbarComponet/></div>
  <div class="first-contaner"><FirstContainer/></div>
  <div class="second-container"></div>
  <div class="third-container"></div>
  <div class="fourth-container"></div>
  <div class="fifth-container"></div>
</div>
   </>
  );
}

export default App;
