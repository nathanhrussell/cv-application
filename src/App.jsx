import "./App.css"
import GeneralInfo from "./components/GeneralInfo"

function App() {
  return (
   <div className="min h-screen bg-gray-50 p-6">
    <h1 className="text-3x1 font-bold text-center mb-8">CV Generator</h1>
      <GeneralInfo />
   </div>
  );
}

export default App
