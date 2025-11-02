import Button from "../../../common/Button/Button";

export default function SearchBar() {
    return (
        <>
        <div className="searchBar">
            <div>
                <input placeholder="Input text"></input>
                <Button buttonText="SEARCH" onClick={() => alert('search')} />
            </div>
            <div className="addNewCourse">
                <Button buttonText="ADD NEW COURSE" onClick={() => alert('add new course')} />
            </div>
        </div>
        </>
    );
}