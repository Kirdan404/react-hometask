import CourseCard from "./components/Courses/components/CourseCard/CourseCard";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import { mockedCoursesList, mockedAuthorsList } from "./constants";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import "./App.css";
import SearchBar from "./components/Courses/SearchBar/SearchBar";
import CourseInfo from "./components/CourseInfo/CourseInfo";

type CourseCardProps = {
    title: string;
    description: string;
};

export default function App() {
    return (
        <div className="appLayout">
            <Header />
            
            <main className="content">
                <SearchBar />
                {/* <CourseInfo /> */}
                <Courses />
                {/* <EmptyCourseList /> */}
            </main>
        </div>
    );
}
