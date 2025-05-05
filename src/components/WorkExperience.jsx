import { useState } from "react";


function WorkExperience() {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [years, setYears] = useState("");

    return (
        <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto my-6">
        <h2 className ="text-xl font-semibold mb-4"> Work Experience</h2>
        <form className="space-y-4">
            <div>
                <label className="block font-medium mb-2">Company Name: </label>
                <input
                type="text"
                className="w-full border p-2 rounded"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Corp"
                />
            </div>
            <div>
            <label className="block font-medium mb-2">Position Title: </label>
                <input
                type="text"
                className="w-full border p-2 rounded"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Full Stack Developer"
                />
            </div>
            <div>
            <label className="block font-medium mb-2">Years Worked: </label>
            <input
                type="text"
                className="w-full border p-2 rounded"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                placeholder="2019-2023"
                />
            </div>
        </form>
    </div>
    );
}

export default WorkExperience;