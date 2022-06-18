import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = React.lazy(async () => import('../pages/Home').then((m) => ({ default: m.Home })));
const Page404 = React.lazy(async () => import('../pages/Page404').then((m) => ({ default: m.Page404 })));
const CreateEvent = React.lazy(async () => import('../pages/CreateEvent').then((m) => ({ default: m.CreateEvent })));
const EventsDetails = React.lazy(async () => import('../pages/EventsDetails').then((m) => ({ default: m.EventsDetails })));

export const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<Page404/>} />
  
        <Route path="/home" element={<Home />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/events-details" element={<EventsDetails />} />
      </Routes>
    );
}