import './styles/resumeBtn.scss';
import resume from './assets/johnny-tsui-resume-082724.pdf';

function ResumeBtn() {
	return (
		<>
			<a className="btn-55" href={resume} target="_blank">
				<span>My Resume</span>
			</a>
		</>
	);
}

export default ResumeBtn;
