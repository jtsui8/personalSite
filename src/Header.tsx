import './styles/header.scss';
import Logo from './assets/logo.svg';

function Header() {
	return (
		<>
			<header>
				<div class="container">
					<img src={Logo} alt="Johnny Tsui Logo" class="logo" />
				</div>
			</header>
		</>
	);
}

export default Header;
