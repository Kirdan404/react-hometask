import { mockedCoursesList, mockedAuthorsList } from "../../../../constants";
import Button from "../../../../common/Button/Button";
import '../../../../App.css';
import getCourseDuration from "../../../../helpers/getCourseDuration";
import formatCreationDate from "../../../../helpers/formatCreationDate";
import getAuthros from "../../../../helpers/getAuthors";

type CourseCardProps = {
  title: string;
  description: string;  
  authors: string[];
  duration: number;
  created: string;
};

export default function CourseCard({title, description, authors, duration,      created}: CourseCardProps) {
    return (
        <div className="cousreCard">
            <div className="leftPart">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="rightPart">
                <p className="authors"><b>Authors: </b>{getAuthros(authors).join(", ")}</p>
                <p><b>Duration: </b>{getCourseDuration(duration)}</p>
                <p><b>Created: </b>{formatCreationDate(created)}</p>
                <Button buttonText="SHOW COURSE" onClick={() => alert('show course')} />
            </div>
        </div>
    );
}