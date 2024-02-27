import AllDeals from './component/AllDeals.jsx';
import Deals from './component/AllDeals.jsx';
import Footer from './component/Footer.jsx';
import './component/Navbar.jsx'
import Navbar from './component/Navbar.jsx';
import SignUp from './component/SignUp.jsx';
import './component/AllCompo1.jsx';
import AllCompo1 from './component/AllCompo1.jsx';
import Tools from './component/Tools.jsx';
import Home from './component/Home.jsx';
import Info from './component/Info.jsx';
import Compo2 from './component/Compo2.jsx';

function App() {
  return (
   <div>
    <Navbar/>
    <Info/>
    <Tools/>
    <Home/>
    <AllCompo1/>
    <Compo2/>
    <AllDeals/>
    <SignUp/>
    <Footer/>
   </div>
  );
}

export default App;
