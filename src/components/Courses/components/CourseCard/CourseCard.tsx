import { mockedCoursesList, mockedAuthorsList } from "../../../../constants";
import Button from "../../../../common/Button/Button";
import '../../../../App.css';

type CourseCardProps = {
  title: string;
  description: string;  
  authors: string[];
  duration: number;
  created: string;
};

export default function CourseCard({title, description, authors, duration,       created}: CourseCardProps) {
    return (
        <div className="cousreCard">
            <div className="leftPart">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="rightPart">
                <p><b>Authors: </b>{authors}</p>
                <p><b>Duration: </b>{duration}</p>
                <p><b>Created: </b>{created}</p>
            </div>
        </div>
    );
}