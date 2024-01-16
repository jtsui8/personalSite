import './styles/resumeBtn.scss';
import resume from './assets/Johnny_Tsui_Resume.pdf';

function ResumeBtn() {
	return (
		<>
			<a className="resumeBtn" href={resume} download>
				My Resume
			</a>
		</>
	);
}

export default ResumeBtn;
