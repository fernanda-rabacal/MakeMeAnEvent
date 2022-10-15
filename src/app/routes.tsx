import { Routes, Route, Navigate } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { CreateEvent } from '../pages/CreateEvent';
import { ErrorPage } from '../pages/Error';
import { EventsDetails } from '../pages/EventsDetails';
import { Home } from '../pages/Home';

export const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-event" 
          element={<CreateEvent />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/my-events" element={<EventsDetails />} />
        </Route>
      </Routes>
    );
}