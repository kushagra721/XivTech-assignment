
import './App.css';
import LetsCollaborate from './Components/LetsCollaborate';
import img1 from "./Components/AI.jpg.png"
import img2 from "./Components/2.png";
import img3 from "./Components/3.png"
import img4 from "./Components/4.png";
import Navbar from './Components/Navbar';


function App() {
  return (
  <>
  <Navbar/>
  <div className='colla mx-5'>
        <h1>Let's Collaborate</h1>
  </div>
  <LetsCollaborate main = "AI + RPA is what we do" description="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience" photo={img1} final = "AI + RPA Automation"/>
  <LetsCollaborate main = "Make Bolder Choices" description="Digital focused strategies to realize market-changing ideas" photo={img2} final = "Build Better Apps"/>
  <LetsCollaborate main = "Innovate with Speed" description="Create higher quality software, deliver on customer expectations and business goals" photo={img3} final = "DevOps"/>
  <LetsCollaborate main = "Embrace Cloud" description="With Cloud-First accelerate innovation and optimize performance" photo={img4} final = "Cloud Services"/>


  </>
  );
}

export default App;
