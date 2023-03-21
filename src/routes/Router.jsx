import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from '../App';
import Profile from '../pages/Profile';
import Property from '../pages/Properties/Property';
import Agent from '../pages/Agent';
import Review from '../pages/Review';
import Message from '../pages/Message';
import Dashboard from '../pages/Dashboard';
import Properties from '../pages/Properties';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="properties">
        <Route index element={<Properties />} />
        <Route path=":id" element={<Property />} />
      </Route>
      <Route path="agent" element={<Agent />} />
      <Route path="review" element={<Review />} />
      <Route path="message" element={<Message />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

export default router;
