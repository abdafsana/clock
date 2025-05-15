import TimerPage from "./pages/TimerPage";
import StopWatchPage from "./pages/StopWatchPage";
import ClockPage from "./pages/ClockPage";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import './App.css'; 


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ClockPage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/stopwatch" element={<StopWatchPage />} />
      </Routes>
    </div>
  );
}


export default App;

