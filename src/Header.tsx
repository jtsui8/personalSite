//HEADER test
import './styles/header.scss';
import ResumeBtn from './ResumeBtn.tsx';

function Header() {
	return (
		<>
			<header>
				<h1>Johnny Tsui</h1>
				<h2>Frontend Developer</h2>
				<p>
					I create accessible and visually engaging user interfaces, using modern technologies and design principles.
				</p>
				<ResumeBtn />
			</header>
		</>
	);
}

export default Header;
