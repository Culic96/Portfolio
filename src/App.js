import AboutMe from "./pages/About me/index";
import './main.css';
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
  
function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<AboutMe/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
  </Router>
  </>    
  );
}

export default App;
