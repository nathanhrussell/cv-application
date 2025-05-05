import { useState } from "react";

function WorkExperience() {
  const [entries, setEntries] = useState([
    { id: Date.now(), company: "", positions: "", years: "", isEditing: true },
  ]);

  const handleChange = (id, field, value) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const handleSave = (id) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, isEditing: false } : entry
      )
    );
  };

  const handleEdit = (id) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, isEditing: true } : entry
      )
    );
  };

  const handleAddEntry = () => {
    setEntries((prev) => [
      ...prev,
      {
        id: Date.now(),
        company: "",
        position: "",
        years: "",
        isEditing: true,
      },
    ]);
  };

  const handleRemoveEntry = (id) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto my-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>

      {entries.map((entry) => (
        <div
          key={entry.id}
          className="mb-6 border-b pb-4 last:border-b-0 last:pb-0"
        >
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Company Name: </label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={entry.institution}
                placeholder="Acme Corp"
                onChange={(e) =>
                  handleChange(entry.id, "institution", e.target.value)
                }
                disabled={!entry.isEditing}
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Position Title: </label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={entry.qualification}
                placeholder="Full Stack Developer"
                onChange={(e) =>
                  handleChange(entry.id, "qualification", e.target.value)
                }
                disabled={!entry.isEditing}
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Years Worked: </label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={entry.year}
                placeholder="2019-2023"
                onChange={(e) =>
                  handleChange(entry.id, "year", e.target.value)
                }
                disabled={!entry.isEditing}
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              {entry.isEditing ? (
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => handleSave(entry.id)}
                  type="button"
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => handleEdit(entry.id)}
                  type="button"
                >
                  Edit
                </button>
              )}

              <button
                className="text-red-600 hover:underline text-sm"
                onClick={() => handleRemoveEntry(entry.id)}
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="pt-2">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={handleAddEntry}
          type="button"
        >
          Add Another
        </button>
      </div>
    </div>
  );
}

export default WorkExperience;
