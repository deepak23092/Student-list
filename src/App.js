import './App.css';
import Addinfo from './components/Addinfo';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import InfoState from './context/info/InfoState'
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <InfoState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container my-4">
          <Routes>
            <Route exact path='/' element={<Addinfo showAlert={showAlert} />} />
            <Route exact path='/details' element={<Details showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </InfoState>
  );
}

export default App;
