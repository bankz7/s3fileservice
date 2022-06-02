import React, {useState, useEffect} from 'react';

const UploadPage = () => {
        const [selectedFile, setSelectedFile] = useState();
        const [isSelected, setIsSelected] = useState(false);
        const [uploadedMsg, setUploadedMsg] = useState();

        const changeHandler = (event) => {
            setSelectedFile(event.target.files[0]);
            setIsSelected(true);
        };
        const handleSubmission = () => {
            const formData = new FormData();
            formData.append('file', selectedFile);
            fetch("http://localhost:8080/files/upload",
                {
                    method: 'POST',
                    body: formData
                }
            )
            .then(response => response.text())
            .then((result) => {
                setUploadedMsg(result);
            })
            .catch((error) => {
                setUploadedMsg(error);
            });
        }
        return (
            <div className="container pad">
                <div>
                    <h4>Upload File to S3</h4>
                </div>
                <div class="pad">
                    <input type="file" name="file" onChange={changeHandler} />
                        {isSelected ? (
                            <div>
                                <p>Filename: {selectedFile.name}</p>
                                <p>Filetype: {selectedFile.type}</p>
                                <p>Size in bytes: {selectedFile.size}</p>
                                <p>
                                    lastModifiedDate:{' '}
                                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                                </p>
                            </div>
                        ) : (
                            <p>Select a file to show details</p>
                        )}
                    <div>
                        <button onClick={handleSubmission}>Submit</button>
                        {uploadedMsg}
                    </div>
                </div>
            </div>
        );
}
export default UploadPage;