import "./App.css"
import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
   <div className="min h-screen bg-gray-50 p-6">
    <h1 className="text-3x1 font-bold text-center mb-8">CV Generator</h1>
      <GeneralInfo />
      <Education />
      <WorkExperience />
   </div>
  );
}

export default App
