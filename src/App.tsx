import Header from "./components/Header/Header";
import "./App.css";
import SearchBar from "./components/Courses/SearchBar/SearchBar";
import LoginPage from "./components/LoginPage/LoginPage";

export default function App() {
  return (
    <div className="appLayout">
      <Header />

      <main className="content">
        <SearchBar />
        {/* <CourseInfo /> */}
        {/* <Courses /> */}
        {/* <EmptyCourseList /> */}
        {/* <LoginPage /> */}
      </main>
    </div>
  );
}
