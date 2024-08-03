
import './App.css';
import AboutUsAdmin from './Components/AboutUsAdmin';
import Login from './Components/Login';
import Pageheader from './Components/Pageheader';
import {Routes,Route} from "react-router-dom";
import ContactUs from './Components/ContactUs';
import Signup from './Components/Signup';
import Home from './Components/Home';
import DescriptionPage from './Components/DescriptionPage';

function App() {
  return (
    <div>
      <header>
        <Pageheader/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/aboutusadmin" element={<AboutUsAdmin/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/description/:id" element={<DescriptionPage/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;