function FinalCV({ generalInfo, educationList, workExperienceList }) {
    return (
      <div className="mt-10 max-w-2xl mx-auto bg-white text-black p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Curriculum Vitae</h2>
        <p><strong>Name:</strong> {generalInfo.name}</p>
        <p><strong>Telephone:</strong> {generalInfo.telephone}</p>
        <p><strong>Email:</strong> {generalInfo.email}</p>
  
        {educationList.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mt-6 mb-2">Education</h2>
              {educationList
                .filter((entry) => !entry.isEditing)
                .map((entry) => (
                  <div key={entry.id} className="mb-4">
                    <p><strong>Qualification:</strong> {entry.qualification}</p>
                    <p><strong>Institution:</strong> {entry.institution}</p>
                    <p><strong>Year(s):</strong> {entry.year}</p>
                </div>
                ))}
          </>
        )}
        {workExperienceList.length > 0 && (
                <>
                    <h2 className="text-xl font-semibold mt-6 mb-2">Work Experience</h2>
                    {workExperienceList
                        .filter((entry) => !entry.isEditing)
                        .map((entry) => (
                        <div key={entry.id} className="mb-4">
                          <p><strong>Position:</strong> {entry.position}</p>
                          <p><strong>Company:</strong> {entry.company}</p>
                          <p><strong>Years:</strong> {entry.years}</p>
                              </div>
                        ))}
                </>
                )}

      </div>
    );
  }
  
  export default FinalCV;
  