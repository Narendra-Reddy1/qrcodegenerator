import React from 'react'
import ListItem from './ListItem';
import downloadIcon from "../assets/download.png";
import copyIcon from "../assets/copy.png";
import frame from "../assets/frame.png";

const QrPreview = ({ qrUrl, setQrColor }) => {

    const handleCopyImage = async () => {
        if (!qrUrl) return
        // Convert the data URL to a Blob
        const response = await fetch(qrUrl);
        const blob = await response.blob(); // Create a Blob from the image URL
        const item = new ClipboardItem({ 'image/png': blob }); // Create a ClipboardItem
        await navigator.clipboard.write([item]); // Write the ClipboardItem to the clipboard
        alert('QR Code image copied to clipboard!'); // Notify the user
    };

    const handleDownload = () => {
        if (!qrUrl) return;
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
            <div className='qr-container'>
                <h3>QR Preview</h3>
            </div>
            <div className='qr-container'>
                <br />
                <img src={frame} alt="QR Preview" id='qr' />

                <label className="color-picker-label">
                    Choose Pattern Color
                    <input
                        type="color"
                        className="color-picker-input"
                        id='qrColor' onChange={(e) => setQrColor(e.target.value)}
                    />
                </label>
                <div className='button-group'>
                    <ListItem label={"Download"} iconUrl={downloadIcon} onClick={handleDownload} extraId='downloadQr' />
                    <ListItem label={"Copy"} iconUrl={copyIcon} onClick={handleCopyImage} />
                    {/* <button id='downloadQr' >Download</button>
                    <button id='copyQr' >Copy</button> */}
                </div>
            </div>
        </>
    )
}

export default QrPreview