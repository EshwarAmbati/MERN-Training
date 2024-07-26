// import { useEffect, useRef, useState } from "react";
// import Navbar from "../components/navbar";
// import useCreateFolder from "../hooks/useCreateFolder";
// import useGetFileFolders from "../hooks/useGetFileFolders";
// import useUploadFile from "../hooks/useUploadFile";

// const HomePage = () => {
//     const [newFolder, setNewFolder] = useState("");
//     const inputRef = useRef(null);
//     const [showCreateFolder, setShowCreateFolder] = useState(false);
//     const { createFolder } = useCreateFolder();
//     const [folderStructure, setFolderStructure] = useState([{ _id: null, name: "Cloud Home" }]);
//     const { getFileFolders, fileFolders } = useGetFileFolders();

//     const parentFolder = folderStructure[folderStructure.length - 1];

//     const handleDoubleClick = (elem) => {
//         if (elem.type == "folder") {
//             setFolderStructure([...folderStructure, elem]);
//         } else {
//             window.open(elem.link);
//         }
//     };

//     const handleAllowCreateFolder = () => {
//         setShowCreateFolder(true);
//     };

//     const handleCreateFolder = async () => {
//         if (newFolder.length > 0) {
//             await createFolder({
//                 name: newFolder,
//                 parentId: parentFolder._id,
//             });
//             getFileFolders(parentFolder._id);
//             setShowCreateFolder(false);
//         }
//     };

//     useEffect(() => {
//         getFileFolders(parentFolder._id);
//     }, [folderStructure]);

//     const handleBackClick = (clickIdx) => {
//         const newFolderStructure = folderStructure.filter((elem, idx) => idx <= clickIdx);
//         setFolderStructure(newFolderStructure);
//     };
//     //-----------------------------------------------------------------------
//     const { isUploadAllowed, uploadFile } = useUploadFile();
//     const handleFileUpload = async (e) => {
//         if (isUploadAllowed) {
//             const file = e.target.files;
//             await uploadFile({
//                 file: file[0],
//                 parentId: parentFolder._id,
//             });
//             getFileFolders(parentFolder._id);
//         } else {
//             alert("Uploading is already in progress. Please wait...");
//         }
//     };
//     //-----------------------------------------------------------------------
//     return (
//         <div>
//             <Navbar />
//             <div className="homepage-main-container">
//                 <h3>Welcome to Cloud Home</h3>
//                 <button onClick={handleAllowCreateFolder}>Create Folder</button>
//                 <input className="file-upload-input" ref={inputRef} type="file" onChange={handleFileUpload} />
//                 <ul style={{ display: "flex", padding: "24px", gap: "24px" }}>
//                     {folderStructure.map((elem, idx) => {
//                         return <li onClick={() => handleBackClick(idx)}>{elem.name}</li>;
//                     })}
//                 </ul>
//                 <div>
//                     {showCreateFolder && (
//                         <div style={{ margin: "24px", padding: "24px", backgroundColor: "yellow" }}>
//                             <input value={newFolder} onChange={(e) => setNewFolder(e.target.value)} />
//                             <button onClick={handleCreateFolder}>Create</button>
//                             <button onClick={() => setShowCreateFolder(false)}>Cancel</button>
//                         </div>
//                     )}
//                 </div>
//                 <div>
//                     {fileFolders.map((elem) => {
//                         return (
//                             <div
//                                 style={{
//                                     backgroundColor: elem.type === "folder" ? "yellow" : "orange",
//                                     border: "1px solid grey",
//                                     borderRadius: "8px",
//                                     width: "fit-content",
//                                     padding: "8px 16px",
//                                     margin: "8px 16px",
//                                 }}
//                                 onDoubleClick={() => handleDoubleClick(elem)}
//                             >
//                                 <p>{elem.name}</p>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;





import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import useCreateFolder from "../hooks/useCreateFolder";
import useGetFileFolders from "../hooks/useGetFileFolders";
import useUploadFile from "../hooks/useUploadFile";

const HomePage = () => {
    const [newFolder, setNewFolder] = useState("");
    const inputRef = useRef(null);
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const { createFolder } = useCreateFolder();
    const [folderStructure, setFolderStructure] = useState([{ _id: null, name: "Cloud Home" }]);
    const { getFileFolders, fileFolders } = useGetFileFolders();

    const parentFolder = folderStructure[folderStructure.length - 1];

    const handleDoubleClick = (elem) => {
        if (elem.type === "folder") {
            setFolderStructure([...folderStructure, elem]);
        } else {
            window.open(elem.link);
        }
    };

    const handleAllowCreateFolder = () => {
        setShowCreateFolder(true);
    };

    const handleCreateFolder = async () => {
        if (newFolder.length > 0) {
            await createFolder({
                name: newFolder,
                parentId: parentFolder._id,
            });
            getFileFolders(parentFolder._id);
            setShowCreateFolder(false);
        }
    };

    useEffect(() => {
        getFileFolders(parentFolder._id);
    }, [folderStructure]);

    const handleBackClick = (clickIdx) => {
        const newFolderStructure = folderStructure.filter((elem, idx) => idx <= clickIdx);
        setFolderStructure(newFolderStructure);
    };

    //-----------------------------------------------------------------------
    const { isUploadAllowed, uploadFile } = useUploadFile();
    const handleFileUpload = async (e) => {
        if (isUploadAllowed) {
            const file = e.target.files;
            await uploadFile({
                file: file[0],
                parentId: parentFolder._id,
            });
            getFileFolders(parentFolder._id);
        } else {
            alert("Uploading is already in progress. Please wait...");
        }
    };
    //-----------------------------------------------------------------------

    const containerStyles = {
        background: "linear-gradient(to bottom right, #6e8efb, #a777e3)",
        minHeight: "100vh",
        padding: "20px",
        color: "#fff",
        fontFamily: "'Roboto', sans-serif",
    };

    const mainContainerStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        width: "80%",
        margin: "auto",
        maxWidth: "800px",
    };

    const buttonStyles = {
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        border: "none",
        borderRadius: "4px",
        color: "#fff",
        cursor: "pointer",
        margin: "10px",
        transition: "transform 0.3s ease",
    };

    const buttonHoverStyles = {
        transform: "scale(1.05)",
    };

    const folderListStyles = {
        display: "flex",
        padding: "24px",
        gap: "24px",
        flexWrap: "wrap",
    };

    const folderItemStyles = {
        backgroundColor: "#ffd700",
        border: "1px solid grey",
        borderRadius: "8px",
        padding: "8px 16px",
        margin: "8px 16px",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    const folderItemHoverStyles = {
        transform: "scale(1.05)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const fileItemStyles = {
        backgroundColor: "#ff8c00",
        border: "1px solid grey",
        borderRadius: "8px",
        padding: "8px 16px",
        margin: "8px 16px",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    const fileItemHoverStyles = {
        transform: "scale(1.05)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const createFolderStyles = {
        margin: "24px",
        padding: "24px",
        backgroundColor: "rgba(255, 255, 0, 0.8)",
        borderRadius: "10px",
    };

    const inputStyles = {
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        margin: "10px 0",
    };

    return (
        <div style={containerStyles}>
            <Navbar />
            <div style={mainContainerStyles} className="homepage-main-container">
                <h3>Welcome to Cloud Home</h3>
                <button
                    onClick={handleAllowCreateFolder}
                    style={buttonStyles}
                    onMouseEnter={(e) => (e.target.style.transform = buttonHoverStyles.transform)}
                    onMouseLeave={(e) => (e.target.style.transform = "none")}
                >
                    Create Folder
                </button>
                <input
                    className="file-upload-input"
                    ref={inputRef}
                    type="file"
                    onChange={handleFileUpload}
                    style={inputStyles}
                />
                <ul style={folderListStyles}>
                    {folderStructure.map((elem, idx) => (
                        <li key={idx} onClick={() => handleBackClick(idx)}>{elem.name}</li>
                    ))}
                </ul>
                <div>
                    {showCreateFolder && (
                        <div style={createFolderStyles}>
                            <input
                                value={newFolder}
                                onChange={(e) => setNewFolder(e.target.value)}
                                style={inputStyles}
                            />
                            <button
                                onClick={handleCreateFolder}
                                style={buttonStyles}
                                onMouseEnter={(e) => (e.target.style.transform = buttonHoverStyles.transform)}
                                onMouseLeave={(e) => (e.target.style.transform = "none")}
                            >
                                Create
                            </button>
                            <button
                                onClick={() => setShowCreateFolder(false)}
                                style={buttonStyles}
                                onMouseEnter={(e) => (e.target.style.transform = buttonHoverStyles.transform)}
                                onMouseLeave={(e) => (e.target.style.transform = "none")}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
                <div>
                    {fileFolders.map((elem, idx) => (
                        <div
                            key={idx}
                            style={elem.type === "folder" ? folderItemStyles : fileItemStyles}
                            onDoubleClick={() => handleDoubleClick(elem)}
                            onMouseEnter={(e) => {
                                if (elem.type === "folder") {
                                    e.currentTarget.style.transform = folderItemHoverStyles.transform;
                                    e.currentTarget.style.boxShadow = folderItemHoverStyles.boxShadow;
                                } else {
                                    e.currentTarget.style.transform = fileItemHoverStyles.transform;
                                    e.currentTarget.style.boxShadow = fileItemHoverStyles.boxShadow;
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "none";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <p>{elem.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
