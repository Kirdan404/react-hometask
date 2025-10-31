type ButtonProps = {
  buttonText: string;
  onClick: () => void;
};

export default function Button({ buttonText, onClick }: ButtonProps) {
  return <button className='btn' onClick={onClick}>{buttonText}</button>;
}
