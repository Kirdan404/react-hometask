import CourseCard from "./components/CourseCard/CourseCard";
import { mockedCoursesList, mockedAuthorsList } from "../../constants";


export default function Courses() {
    return (
        <>
            {
                mockedCoursesList.map(course =>
                    <CourseCard title={course.title} description={course.description} authors={course.authors} duration={course.duration} created={course.creationDate}/>
                )
            }
        </>
    );
}
