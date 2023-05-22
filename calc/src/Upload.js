import { useState } from "react";

const Upload = () => {

    // const [selectedFile, setSelectedFile] = useState(null);

    // const handleImageUpload = (e) => {
    //     console.log(e.target.files[0])
    //     const file = e.target.files[0];
    //     setSelectedFile(URL.createObjectURL(file));
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const renderFilePreview = () => {
        if (selectedFile) {
            if (selectedFile.type.startsWith('image/')) {
                return <img src={URL.createObjectURL(selectedFile)} alt={selectedFile.name} width="10%" height="10%" />;
            } else if (selectedFile.type.startsWith('video/')) {
                return (
                    <video controls>
                        <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} width="300" height="200"/>
                    </video>
                );
            } else if (selectedFile.type.startsWith('audio/')) {
                return (
                    <audio controls>
                        <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
                    </audio>
                );
            } else if (selectedFile.type === 'application/pdf') {
                return <embed src={URL.createObjectURL(selectedFile)} width="100%" height="600px" />;
            } else {
                return <p>Unsupported file type: {selectedFile.name}</p>;
            }
        } else {
            return null;
        }
    };

    return (
        <>
            {/* <div style={{ textAlign: "center" }}>
                <input
                    type="file"
                    accept="image/*, video/*, audio/*, application/pdf"
                    onChange={handleImageUpload}
                />
                <img src={selectedFile} alt="Uploaded" style={{ maxWidth: "50%", height: "500px" }} />
                <video controls>
                    <source src={selectedFile} type="video/mp4" />
                </video>
                <audio controls>
                    <source src={selectedFile} type="audio/mp3" />
                </audio>
                <iframe src={selectedFile} title="Uploaded PDF" style={{ width: "100%", height: "500px" }}></iframe>
            </div> */}

            <div>
                <input type="file" onChange={handleFileChange} />
                {renderFilePreview()}
            </div>
        </>
    )
}
export default Upload;


   