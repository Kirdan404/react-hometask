type LogoProps = {
    source: string;
    alternativeText: string;
};

export default function Logo(props: LogoProps) {
    return (
        <img src={props.source} alt={props.alternativeText} />
    );
}
