interface TitleProps {
	headline: string;
}

const Title: React.FC<TitleProps> = (props) => {
	const { headline } = props;
	return headline
};

export default Title;
