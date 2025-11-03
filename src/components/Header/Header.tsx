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
      <Logo source={logoUrl} alternativeText={logoAlternativeText} />
      <Button
        buttonText={loginText.toLocaleUpperCase()}
        onClick={() => alert(loginText)}
      />
    </div>
  );
}
