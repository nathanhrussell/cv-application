function Preview({ generalInfo, educationList, workExperienceList }) {
    return (
      <div className="mt-10 max-w-md mx-auto bg-white p-6 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">CV Preview</h2>
        <p><strong>Name:</strong> {generalInfo.name}</p>
        <p><strong>Telephone:</strong> {generalInfo.telephone}</p>
        <p><strong>Email:</strong> {generalInfo.email}</p>
  
        {educationList.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mt-6 mb-2">Education</h3>
            <ul className="list-disc list-inside space-y-2">
              {educationList
                .filter((entry) => !entry.isEditing)
                .map((entry) => (
                  <li key={entry.id}>
                    <p className="font-medium">{entry.qualification}</p>
                    <p>{entry.institution}</p>
                    <p className="text-sm text-gray-600">{entry.year}</p>
                  </li>
                ))}
            </ul>
          </>
        )}

        {workExperienceList.length > 0 && (
                <>
                    <h3 className="text-lg font-semibold mt-6 mb-2">Work Experience</h3>
                    <ul className="list-disc list-inside space-y-2">
                    {workExperienceList
                        .filter((entry) => !entry.isEditing)
                        .map((entry) => (
                        <li key={entry.id}>
                            <p className="font-medium">{entry.position}</p>
                            <p>{entry.company}</p>
                            <p className="text-sm text-gray-600">{entry.years}</p>
                        </li>
                        ))}
                    </ul>
                </>
                )}

      </div>
    );
  }
  
  export default Preview;
  