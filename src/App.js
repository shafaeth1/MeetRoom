import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import SignIn from './pages/Register/SignIn';
import ReceiveSingleCall from './pages/ReceiveSingleCall/ReceiveSingleCall';
import SingleCall from './pages/SingleCall/SingleCall';
import SupportPage from './pages/SupportPage/SupportPage';
import SignUp from './pages/Register/SignUp';
import LiveChat from './components/LiveChat/LiveChat';
import VideoConference from './pages/VideoConference/VideoConference';
import RequireAuth from './pages/Register/RequireAuth';
import Video from './components/Video/Video';
import Slider from './components/Slider/Slider';
import Chat from './components/Chat/Chat';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Participant from './components/Participant/Participant';
import Hero from './components/Hero/Hero';
import Hasan from './pages/Indivisual/Hasan';
import Roctim from './pages/Indivisual/Roctim';
import Alamin from './pages/Indivisual/Alamin';
import Hossain from './pages/Indivisual/Hossain';
import Ariful from './pages/Indivisual/Ariful';
import Nibras from './pages/Indivisual/Nibras';

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      {!user ? <Navbar /> : ''}

      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/signIn" element={<SignIn />}> </Route>
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/liveChat" element={<LiveChat />}> </Route>
        <Route path="/single" element={<SingleCall />}> </Route>
        <Route path="/receive" element={<ReceiveSingleCall />}> </Route>
        <Route path="/support" element={<SupportPage />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/Video" element={<Video />}> </Route>
        <Route path="/slide" element={<Slider />}> </Route>
        <Route path="/chat" element={<Chat />}> </Route>
        <Route path="/conference" element={<RequireAuth><VideoConference /></RequireAuth>}>
        </Route>
        <Route path="/chat" element={<Chat />}> </Route>
        <Route path="/participant" element={<Participant />}> </Route>
        <Route path="/hero" element={<Hero />}> </Route>
        
        {/* Indivisual Route */}
        <Route path="/hasan" element={<Hasan />}> </Route>
        <Route path="/roctim" element={<Roctim />}> </Route>
        <Route path="/alamin" element={<Alamin />}> </Route>
        <Route path="/hossain" element={<Hossain />}> </Route>
        <Route path="/ariful" element={<Ariful />}> </Route>
        <Route path="/nibras" element={<Nibras />}> </Route>
      </Routes>
      {!user ? <Footer /> : ''}
    </>
  );
}

export default App;
