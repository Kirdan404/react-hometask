import CourseCard from "./components/Courses/components/CourseCard/CourseCard";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import { mockedCoursesList, mockedAuthorsList } from "./constants";

type CourseCardProps = {
    title: string;
    description: string;
};

export default function App() {
    return (
        <>
            <Header />
            <Courses />
        </>
    );
}