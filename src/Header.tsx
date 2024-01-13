import './styles/header.scss';
import Logo from './assets/logo.svg';

function Header() {
	return (
		<>
			<header>
				<div className="container">
					<img src={Logo} alt="Johnny Tsui Logo" className="logo" />
				</div>
			</header>
		</>
	);
}

export default Header;
