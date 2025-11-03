import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import "../../styles/header.css";
import { logoUrl, logoAlternativeText, loginText } from "../../constants";

type HeaderProps = {
  className?: string;
};

export default function Header({ className = "header" }: HeaderProps) {
  return (
    <div className={className}>
      <Logo className="logoHeader" source={logoUrl} alternativeText={logoAlternativeText} />
      <Button
        className="buttonBasic"
        buttonText={loginText.toLocaleUpperCase()}
        onClick={() => alert(loginText)}
      />
    </div>
  );
}
