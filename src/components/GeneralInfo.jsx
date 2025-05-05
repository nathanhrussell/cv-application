import { useState } from "react";

function GeneralInfo({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (field, value) => {
    onChange({...data, [field]: value });
  };

  const handleSave = () => setIsEditing(false);
  const handleEdit = () => setIsEditing(true);

  return (
    <div className="p-4 border rounded-lg shadow-md w-full my-6">
      <h2 className="text-xl font-semibold mb-4">General Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-2">Full Name: </label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Joe Bloggs"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Telephone: </label>
          <input
            type="tel"
            className="w-full border p-2 rounded"
            value={data.telephone}
            onChange={(e) => handleChange("telephone", e.target.value)}
            placeholder="0 123 456 78910"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Email: </label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="you@example.com"
            disabled={!isEditing}
          />
        </div>

        <div className="mt-6">
          {isEditing ? (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleSave}
              type="button"
            >
              Save
            </button>
          ) : (
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              onClick={handleEdit}
              type="button"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;