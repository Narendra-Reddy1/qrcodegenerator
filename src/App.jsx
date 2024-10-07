import './App.css'
import QrPreview from './components/QrPreview.jsx'
import LeftComponent from './components/LeftComponent.jsx'

function App() {

  return (
    <div className='container'>
      <LeftComponent />
      <div className='box'>
        <QrPreview />
      </div>

    </div>
  )
}

export default App
