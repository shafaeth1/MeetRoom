import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hasan from './pages/Indivisual/Hasan';
import Roctim from './pages/Indivisual/Roctim';
import Alamin from './pages/Indivisual/Alamin';
import Hossain from './pages/Indivisual/Hossain';
import Ariful from './pages/Indivisual/Ariful';
import Nibras from './pages/Indivisual/Nibras';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import SignIn from './pages/Register/SignIn';
import SupportPage from './pages/SupportPage/SupportPage';
import SignUp from './pages/Register/SignUp';
import LiveChat from './components/LiveChat/LiveChat';
import RequireAuth from './pages/Register/RequireAuth';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
<<<<<<< HEAD
import Participant from './components/Participant/Participant';
import Schdul from './components/Schdule/Schdul';
=======
import UserConference from './pages/ConferenceRoom/UserConference/UserConference';
import ConferenceRoom from './pages/ConferenceRoom/ConferenceRoom';
import VideoConference from './pages/ConferenceRoom/VideoConference/VideoConference';
import HomeConference from './pages/ConferenceRoom/HomeConference/HomeConference';
import ScheduleConference from './pages/ConferenceRoom/ScheduleConference/ScheduleConference';
import NotificationConference from './pages/ConferenceRoom/NotificationConference/NotificationConference';
import SettingConference from './pages/ConferenceRoom/SettingConference/SettingConference';
import MeetingSchedule from './components/MeetingSchedule/MeetingSchedule';
>>>>>>> a6039a76dde071a6126fbf0542446be5848d6101

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      {!user ? <Navbar /> : ''}

      <Routes>
        {/* ================Indivisual Route =================*/}
        <Route path="/hasan" element={<Hasan />}> </Route>
        <Route path="/roctim" element={<Roctim />}> </Route>
        <Route path="/alamin" element={<Alamin />}> </Route>
        <Route path="/hossain" element={<Hossain />}> </Route>
        <Route path="/ariful" element={<Ariful />}> </Route>
        <Route path="/nibras" element={<Nibras />}> </Route>

        {/*============== Frontend Route ====================*/}
        <Route path="/" element={<Home />}> </Route>
        <Route path="/signIn" element={<SignIn />}> </Route>
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/support" element={<SupportPage />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/liveChat" element={<LiveChat />}> </Route>
        <Route path="/schedule" element={<MeetingSchedule />}> </Route>     

        {/* ============Video Conference Room Route ===============*/}
        <Route path="/room" element={<RequireAuth><ConferenceRoom /></RequireAuth>}>
          <Route index element={<HomeConference/>}></Route>
          <Route path="users" element={<UserConference/>}></Route>
          <Route path="video" element={<VideoConference/>}></Route>
          <Route path="schedule" element={<ScheduleConference/>}></Route>
          <Route path="notifications" element={<NotificationConference/>}></Route>
          <Route path="settings" element={<SettingConference/>}></Route>
        </Route>
<<<<<<< HEAD
        <Route path="/chat" element={<Chat />}> </Route>
        <Route path="/Schdul" element={<Schdul />}> </Route>
        <Route path="/participant" element={<Participant />}> </Route>
=======
>>>>>>> a6039a76dde071a6126fbf0542446be5848d6101
      </Routes>
      {!user ? <Footer /> : ''}
    </>
  );
}

export default App;
