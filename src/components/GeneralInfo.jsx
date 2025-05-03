import { useState } from "react";

function GeneralInfo() {
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto my-6">
        <h2 className ="text-xl font-semibold mb-4"> General Information</h2>
        <form className="space-y-4">
            <div>
                <label className="block font-medium mb-1">Full Name: </label>
                <input
                type="text"
                className="w-full border p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Joe Bloggs"
                />
            </div>
            <div>
            <label className="block font-medium mb-1">Telephone: </label>
                <input
                type="tel"
                className="w-full border p-2 rounded"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="0 123 456 78910"
                />
            </div>
            <div>
            <label className="block font-medium mb-1">Email: </label>
            <input
                type="email"
                className="w-full border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                />
            </div>
        </form>
    </div>
    );
}

export default GeneralInfo;