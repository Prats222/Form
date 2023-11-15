import {Routes,Route} from 'react-router-dom'
import Login from './Auth/Login';
import Welcome from './Auth/welcome';
function App() {
  return (
   <>
<Routes>

<Route path="/login" element={<Login />}   />
<Route path="/welcome" element={<Welcome />} />

</Routes>
   </>
  );
}

export default App;
