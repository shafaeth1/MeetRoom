import React, { useEffect } from 'react';
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

import UserConference from './pages/ConferenceRoom/UserConference/UserConference';
import ConferenceRoom from './pages/ConferenceRoom/ConferenceRoom';
import VideoConference from './pages/ConferenceRoom/VideoConference/VideoConference';
import HomeConference from './pages/ConferenceRoom/HomeConference/HomeConference';
import ScheduleConference from './pages/ConferenceRoom/ScheduleConference/ScheduleConference';
import NotificationConference from './pages/ConferenceRoom/NotificationConference/NotificationConference';
import SettingConference from './pages/ConferenceRoom/SettingConference/SettingConference';
import MeetingSchedule from './components/MeetingSchedule/MeetingSchedule';
import { connectWithSocketIOServer } from './utils/wss';
import Error from './components/Error/Error';
import Dashboard from './pages/Dashboard/Dashboard';
import AllUser from './pages/Dashboard/AllUser';
import MyReview from './pages/Dashboard/MyReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddMember from './pages/Dashboard/AddMember';
import ManageMember from './pages/Dashboard/ManageMember';
import useAdmin from './hooks/useAdmin'


function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  useEffect(() => connectWithSocketIOServer(), [])
  return (
    <>
      {admin || !user ? <Navbar /> : ''}

      <Routes>
        {/* ================Indivisual Route =================*/}
        <Route path="/hasan" element={<Hasan />}> </Route>
        <Route path="/roctim" element={<Roctim />}> </Route>
        <Route path="/alamin" element={<Alamin />}> </Route>
        <Route path="/hossain" element={<Hossain />}> </Route>
        <Route path="/ariful" element={<Ariful />}> </Route>
        <Route path="/nibras" element={<Nibras />}> </Route>

        {/* ================Website Route =================*/}
        <Route path="/" element={<Home />}> </Route>
        <Route path="/signIn" element={<SignIn />}> </Route>
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/support" element={<SupportPage />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/liveChat" element={<LiveChat />}> </Route>
        <Route path="/schedule" element={<MeetingSchedule />}> </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path='dashboard/users' element={<><AllUser></AllUser></>}> </Route>
          <Route path='dashboard/addMembers' element={<><AddMember></AddMember></>}> </Route>
          <Route path='dashboard/manageMembers' element={<><ManageMember></ManageMember></>}> </Route>
          <Route index element={<MyReview></MyReview>}></Route>
        </Route>

        {/* ================Application Route =================*/}
        <Route path="/room" element={<RequireAuth><ConferenceRoom /></RequireAuth>}>
          <Route index element={<HomeConference />}></Route>
          <Route path="users" element={<UserConference />}></Route>
          <Route path="video" element={<VideoConference />}></Route>
          <Route path="schedule" element={<ScheduleConference />}></Route>
          <Route path="notifications" element={<NotificationConference />}></Route>
          <Route path="settings" element={<SettingConference />}></Route>
        </Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <ToastContainer />
      {admin || !user ? <Footer /> : ''}
    </>
  );
}

export default App;
