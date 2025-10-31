import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import '../../../src/App.css';

export default function Header() {
    return (
        <div className="header">
            <Logo />
            <Button buttonText="LOGIN" onClick={() => alert('LOGIN')}/>
        </div>
    );
}