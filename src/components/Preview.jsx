function Preview ({ generalInfo }) {
    return (
        <div className="mt-10 max-w-md mx-auto bg-white p-6 border rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">CV Preview</h2>
            <p><strong>Name:</strong> {generalInfo.name}</p>
            <p><strong>Telephone:</strong> {generalInfo.telephone}</p>
            <p><strong>Email:</strong> {generalInfo.email}</p>
        </div>
    );
}

export default Preview