import "./App.css";
import RegistrationAndAuthorization from "./module/RegistrationAndAuthorization/RegistrationAndAuthorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authorization from "./module/RegistrationAndAuthorization/components/Authorization/Authorization";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePsychologist from "./module/ProfilePsychologist/ProfilePsychologist";
import PsychologistList from "./module/PsychologistList/PsychologistList";
import SelectRole from "./module/RegistrationAndAuthorization/components/SelectRole/SelectRole";
import QuizForm from "./module/Quiz/Quiz";
import QuizCancel from "./module/Quiz/QuizCancel";
import WordPressPage from "./staticPage/business-psyholog";
import BusinessPsyholog from "./staticPage/business-psyholog";
import Main from "./staticPage/main";
import Detskijpsihologonlajn from "./staticPage/detskij-psiholog-onlajn";
import Faq from "./staticPage/faq";
import Otzyvy from "./staticPage/otzyvy";
import Payment from "./staticPage/payment";
import Psychologists from "./staticPage/psychologists";
import Semejnyjpsihologonlajn from "./staticPage/semejnyj-psiholog-onlajn";
import Vacancy from "./staticPage/vacancy";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="auth/" element={<RegistrationAndAuthorization />}>
            <Route path="login" element={<Authorization />} />
            <Route path="reg" element={<SelectRole />} />
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
          <Route path="quiz" element={<QuizForm />} />
          <Route path="quizcancel" element={<QuizCancel />} />
          <Route path="business" element={<BusinessPsyholog />} />
          <Route path="/" element={<Main />} />
          <Route
            path="detskijpsihologonlajn"
            element={<Detskijpsihologonlajn />}
          />
          <Route path="faq" element={<Faq />} />
          <Route path="otzyvy" element={<Otzyvy />} />
          <Route path="payment" element={<Payment />} />
          <Route path="psychologists" element={<Psychologists />} />
          <Route
            path="semejnyjpsihologonlajn"
            element={<Semejnyjpsihologonlajn />}
          />
          <Route path="vacancy" element={<Vacancy />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
