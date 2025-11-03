import "../../../../styles/logo.css";

type LogoProps = {
    className?: string;
    source: string;
    alternativeText: string;
};

export default function Logo(props: LogoProps) {
    return (
        <img className={props.className} src={props.source} alt={props.alternativeText} />
    );
}
