import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetail1 from './Components/ProjectDetail1';
import ProjectDetail2 from './Components/ProjectDetail2';
import ProjectDetail3 from './Components/ProjectDetail3';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/karina-lage-portfolio" element={<Home />}></Route>
          <Route path="/karina-lage-portfolio/project1" element={<ProjectDetail1 />}></Route>
          <Route path="/karina-lage-portfolio/project2" element={<ProjectDetail2 />}></Route>
          <Route path="/karina-lage-portfolio/project3" element={<ProjectDetail3 />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
