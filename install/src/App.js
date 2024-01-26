import AllComponents from "./components/AllComponents";
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <AllComponents />s
      </BrowserRouter>
    </div>
  );
}

export default App;
