import UrlField from './components/UrlField.jsx'
import EmailForm from './components/EmailForm.jsx'
import './App.css'
import ListItem from './components/ListItem'
import urlIcon from "./assets/url.png"
import QrPreview from './components/QrPreview.jsx'
import ButtonGroup from './components/ButtonGroup.jsx'

function App() {

  return (
    <div className='container'>
      <div className='box'>
        <ul >
          <ButtonGroup />
        </ul>
        <div>
          <UrlField />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0',
          margin: '0'
        }}>
          <ListItem iconUrl={null} label={"Generate"} toolTipText={null} />
        </div>
      </div>
      <div className='box'>
        <QrPreview />
      </div>

    </div>
  )
}

export default App
