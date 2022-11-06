import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/LoginScreen";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeScreen />,
//   },
//   {
//     path: "test",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     ),
//   },
// ]);

function App() {
  const user = null;

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="test" element={<h1>Yayyyy</h1>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
