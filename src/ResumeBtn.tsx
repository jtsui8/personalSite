import './styles/resumeBtn.scss';
import resume from './assets/johnny-tsui-resume-082724.pdf';

function ResumeBtn() {
	return (
		<>
			<a className="resumeBtn" href={resume} target="_blank">
				My Resume
			</a>
		</>
	);
}

export default ResumeBtn;
