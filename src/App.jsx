// src/App.jsx

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';

const App = () => {
  
  return (
    <>
      <NavBar />
 
      <Routes>

        <Route path='/sign-up' element={<SignUpForm />} />

      </Routes>
    </>
  );
};

export default App;

