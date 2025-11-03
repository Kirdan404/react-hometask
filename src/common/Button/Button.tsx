import "../../styles/button.css";

type ButtonProps = {
  className?: string
  buttonText: string;
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  return <button className={props.className} onClick={props.onClick}>{props.buttonText}</button>;
}
