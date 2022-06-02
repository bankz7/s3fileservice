import React, {useState, useEffect} from 'react';
import { saveAs } from 'file-saver'

const Download = () => {
const [fileList, setFileList] = useState([]);
useEffect(() => {
  fetch("http://localhost:8080/files/")
    .then(response => response.json())
    .then(data => {
      setFileList(data)
    })
}, [fileList]);

var handleClick = (key) => {
    fetch('http://localhost:8080/files/download/'+key).then((response) =>
            {
                response.blob().then((blob) => {
                  var blob = new Blob([blob], {type: "application/octet-stream"});
                  saveAs(blob, key);
                });
          } );
}
return(
        <div className="container pad">
            <div>
                <h4>Download Files</h4>
            </div>
            <div class="pad">
                 <ul>
                  {fileList.map(file => {
                    return <li key={file.key} onClick={() => handleClick(file.key)}>{file.key}</li>
                  })}
                </ul>
            </div>
        </div>

    );
}
export default Download;