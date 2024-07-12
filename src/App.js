import { Sidebar } from "./components/sidebar/Sidebar";
import { Timeline } from "./components/timeline/Timeline";
import { Widget } from "./components/widget/Widget";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
      <Widget />
    </div>
  );
}

export default App;
