import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import CharacterInfo from "./pages/CharacterInfo/CharacterInfo";
import CharactersList from "./pages/CharactersList/CharactersList";
import SearchLoaction from "./pages/SearchLocation/SearchLoaction";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<CharactersList />} />
      <Route path="/:id" element={<CharacterInfo />} />
      <Route path="/search" element={<SearchLoaction />} />
    </>
  )
);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />;
    </div>
  );
};

export default App;
