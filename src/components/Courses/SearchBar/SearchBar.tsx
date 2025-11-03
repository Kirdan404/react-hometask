import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import { searchText, standardPlaceholder } from "../../../constants";
import {capitalize} from "../../../helpers/capitalize"
import "../../../styles/searchBar.css";

export default function SearchBar() {
    return (
        <>
            <div className="searchBar">
                <div>
                    <Input className="inputBasic inputSearch" type="text" placeholder={capitalize(standardPlaceholder)} />
                    <Button className="buttonBasic" buttonText={searchText.toLocaleUpperCase()} onClick={() => alert(searchText.toLocaleUpperCase())} />
                </div>
                <div className="addNewCourse">
                    <Button className="buttonBasic" buttonText="ADD NEW COURSE" onClick={() => alert('add new course')} />
                </div>
            </div>
        </>
    );
}