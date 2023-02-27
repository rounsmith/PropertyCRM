import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Profile from '../pages/Profile';
import Property from '../pages/Property';
import Agent from '../pages/Agent';
import Review from '../pages/Review';
import Message from '../pages/Message';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: 'property', element: <Property /> },
      { path: 'agent', element: <Agent /> },
      { path: 'review', element: <Review /> },
      { path: 'message', element: <Message /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

export default router;
