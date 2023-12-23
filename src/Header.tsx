import './styles/header.scss';
import Logo from './assets/logo.svg';

function Header() {
	return (
		<>
			<header>
				<img src={Logo} alt="Johnny Tsui Logo" />
			</header>
		</>
	);
}

export default Header;
