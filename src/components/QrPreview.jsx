import React from 'react'
import ListItem from './ListItem';

const QrPreview = ({ qrUrl, setQrColor }) => {

    const handleCopyImage = async () => {
        console.log("COpying....", qrUrl)
        if (qrUrl) {
            // Convert the data URL to a Blob
            console.log("COpying....")
            const response = await fetch(qrUrl);
            const blob = await response.blob(); // Create a Blob from the image URL
            const item = new ClipboardItem({ 'image/png': blob }); // Create a ClipboardItem
            await navigator.clipboard.write([item]); // Write the ClipboardItem to the clipboard
            alert('QR Code image copied to clipboard!'); // Notify the user
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a'); // Create an anchor element
        //const link = document.getElementById("downloadQr")
        console.log("downloading.....")
        link.href = qrUrl; // Set the URL of the QR code
        link.download = 'qr_code.png'; // Set the filename for download
        document.body.appendChild(link); // Append the link to the document
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove the link from the document
    };

    return (
        <>
            <h3>QR Preview</h3>
            <div>
                <img src="" alt="" id='qr' />
                <br></br>  <input type="color" id='qrColor' onChange={(e) => setQrColor(e.target.value)}></input>
                <div className='button-group'>
                    <ListItem label={"Download"} onClick={handleDownload} extraId='downloadQr' />
                    <ListItem label={"Copy"} onClick={handleCopyImage} />
                    {/* <button id='downloadQr' >Download</button>
                    <button id='copyQr' >Copy</button> */}
                </div>
            </div>
        </>
    )
}

export default QrPreview