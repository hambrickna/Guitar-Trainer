import { Home } from './components/views/HomePage/HomePage.jsx';
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar.jsx'
import { ToolsPage } from './components/views/ToolsPage/ToolsPage.jsx';

const HeaderLayout = () => (
  <>
    <header>
      <NavBar />
    </header>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/scales",
        element: <Home />
      },
      {
        path: "/chords",
        element: <Home />
      },
      {
        path: "/fretboard-trainer",
        element: <ToolsPage />
      }
    ],
  },
]);

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
