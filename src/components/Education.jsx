import { useState } from "react";

function Education() {
    const [institution, setInstitution] = useState("");
    const [qualification, setQualification] = useState("");
    const [year, setYear] = useState("");

    return (
        <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto my-6">
        <h2 className ="text-xl font-semibold mb-4"> Education</h2>
        <form className="space-y-4">
            <div>
                <label className="block font-medium mb-2">Institution Name: </label>
                <input
                type="text"
                className="w-full border p-2 rounded"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder="Oxford University"
                />
            </div>
            <div>
            <label className="block font-medium mb-2">Qualification Title: </label>
                <input
                type="text"
                className="w-full border p-2 rounded"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                placeholder="BSc in Computer Science"
                />
            </div>
            <div>
            <label className="block font-medium mb-2">Year of Study: </label>
            <input
                type="text"
                className="w-full border p-2 rounded"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2021-2024"
                />
            </div>
        </form>
    </div>
    );
}

export default Education;