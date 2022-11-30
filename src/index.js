import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportwebVitals from './reportWebVitals';

//import NotificationList from './chapter_06/NotificationList';
//import Accommodate from './chapter_07/Accommodate';
//import ConfirmButton from './chapter_08/ConfirmButton';
//import LandingPage from './chapte_09/LandingPage';
//import AttendanceBook from './chapter_10/AttendanceBook';
//import SignUp from './chapter_11/SignUp';
//import Calculator from './chapter_12/Calculator';
//import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';

createRoot.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>,
  document.getElementById('root')
);

reportwebVitals();