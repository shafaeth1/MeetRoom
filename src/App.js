import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';
import SignIn from './pages/Register/SignIn';
import ReceiveSingleCall from './pages/ReceiveSingleCall/ReceiveSingleCall';
import SingleCall from './pages/SingleCall/SingleCall';
import SupportPage from './pages/SupportPage/SupportPage';
import SignUp from './pages/Register/SignUp';
import LiveChat from './components/LiveChat/LiveChat';
import VideoConference from './pages/VideoConference/VideoConference';
import RequireAuth from './pages/Register/RequireAuth';
import Chat from './components/Chat/Chat';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Participant from './components/Participant/Participant';
import Hero from './components/Hero/Hero';

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      {!user ? <Navbar /> : ''}

      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/signIn" element={<SignIn />}> </Route>
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/join" element={<Join />}> </Route>
        <Route path="/liveChat" element={<LiveChat />}> </Route>
        <Route path="/single" element={<SingleCall />}> </Route>
        <Route path="/receive" element={<ReceiveSingleCall />}> </Route>
        <Route path="/support" element={<SupportPage />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/conference" element={<RequireAuth><VideoConference /></RequireAuth>}>
        </Route>
        <Route path="/chat" element={<Chat />}> </Route>
        <Route path="/chat" element={<Participant />}> </Route>
        <Route path="/hero" element={<Hero />}> </Route>
      </Routes>
      {!user ? <Footer /> : ''}
    </>
  );
}

export default App;
