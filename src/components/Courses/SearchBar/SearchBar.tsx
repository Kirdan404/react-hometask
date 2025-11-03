import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import { standardPlaceholder } from "../../../constants";

export default function SearchBar() {
    return (
        <>
        <div className="searchBar">
            <div>
                <Input
                    className="inputBasic inputSearchBar"
                    type="text"
                    placeholder={standardPlaceholder}
                />
                <Button buttonText="SEARCH" onClick={() => alert('search')} />
            </div>
            <div className="addNewCourse">
                <Button buttonText="ADD NEW COURSE" onClick={() => alert('add new course')} />
            </div>
        </div>
        </>
    );
}
