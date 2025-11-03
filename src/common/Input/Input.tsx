type InputProps = {
  type: string;
  placeholder: string;
  className?: string;
};

export default function Input({ type, placeholder, className }: InputProps) {
  return <input className={className} type={type} placeholder={placeholder} />;
}
