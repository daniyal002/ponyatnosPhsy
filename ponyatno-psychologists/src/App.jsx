import './App.css';
import RegistrationAndAuthorization from './module/RegistrationAndAuthorization/RegistrationAndAuthorization';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './module/RegistrationAndAuthorization/components/Registration/Registration';
import Authorization from './module/RegistrationAndAuthorization/components/Authorization/Authorization';
import PrivateRoute from './components/PrivateRoute';
import ProfilePsychologist from './module/ProfilePsychologist/ProfilePsychologist';
import PsychologistList from './module/PsychologistList/PsychologistList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="auth/" element={<RegistrationAndAuthorization />}>
            <Route path="login" element={<Authorization />} />
            <Route path="reg" element={<Registration />} />
          </Route>
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <ProfilePsychologist />
              </PrivateRoute>
            }
          />
          <Route
            path="allpsychologist"
            element={
              <PrivateRoute>
                <PsychologistList />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
