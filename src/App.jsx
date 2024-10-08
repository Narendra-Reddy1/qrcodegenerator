import './App.css'
import QrPreview from './components/QrPreview.jsx'
import LeftComponent from './components/LeftComponent.jsx'
import { useState } from 'react'

function App() {
  const [qrUrl, setQrUrl] = useState("")

  const [qrColor, setQrColor] = useState("#FFF")

  return (
    <div className='container'>
      <LeftComponent qrColor={qrColor} setQrUrl={setQrUrl} />
      <div className='box'>
        <QrPreview qrUrl={qrUrl} setQrColor={setQrColor} />
      </div>
    </div >
  )
}

export default App
