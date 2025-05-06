import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Preview from "./components/Preview";
import "./App.css"
import FinalCV from "./components/FinalCV";

function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const [showFinalCV, setShowFinalCV] = useState(false);

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    telephone: "",
    email: "",
  });

  return (
    <div className="min-h-screen bg-white-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">CV Generator</h1>

      <GeneralInfo data={generalInfo} onChange={setGeneralInfo} />

      <Education data={educationList} onChange={setEducationList} />

      <WorkExperience data={workExperienceList} onChange={setWorkExperienceList} />

      <div className="mt-8 text-center">
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          onClick={() => setShowPreview((prev) => !prev)}
        >
          {showPreview ? "Hide Preview" : "Show Preview"}
        </button>
      </div>

      {showPreview && (
        <Preview
        generalInfo={generalInfo}
        educationList={educationList}
        workExperienceList={workExperienceList}
        />
      )}

      {showPreview && (
        <div className="mt-4 text-center">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            onClick={() => setShowFinalCV(true)}
          >
            Generate CV
          </button>
        </div>
      )}

      {showFinalCV && (
        <FinalCV
        generalInfo={generalInfo}
        educationList={educationList}
        workExperienceList={workExperienceList}
        />
      )}


    </div>
  );
}

export default App;
