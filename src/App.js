import "./App.css";
import Assets from "./Componets/Assets";
import Navbar from "./Componets/Navbar";
import NoticeBoard from "./Componets/NoticeBoard";
import Sidebar from "./Componets/Sidebar";
import Task from "./Componets/Task";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Task />
      <Sidebar />
      <NoticeBoard />
      <Assets />
    </div>
  );
}

export default App;
