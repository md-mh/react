import React, { useState } from 'react';

const InputFile = () => {
    const [data, setData] = useState()

    const handleFile = (e) => {
        console.log(e)
        if (e.target.files.length > 0) {
            setData(e.target.files[0])
            console.log(e.target.files[0])
        }
    }

    return (
        <>
            <input type='file' onChange={(e) => handleFile(e)} />
            <p>{data?.webkitRelativePath}</p>
            <a href={data?.webkitRelativePath} >Download</a>
        </>
    );
};

export default InputFile;