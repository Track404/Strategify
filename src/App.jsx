import LandingPage from './pages/LandingPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([{ path: '/', element: <LandingPage /> }]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
