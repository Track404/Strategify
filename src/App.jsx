import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/form', element: <FormPage /> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
