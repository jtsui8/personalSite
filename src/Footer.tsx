import './styles/footer.scss';
import Social from './Social.tsx';

function Footer() {
	const year = new Date().getFullYear();

	return (
		<>
			<footer>
				<Social />
				&copy;{year}
			</footer>
		</>
	);
}

export default Footer;
