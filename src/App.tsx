import './styles/app.scss';

function App() {
	return (
		<>
			<section>
				<p>
					With over a decade of dedicated expertise as a Front-End Developer, I bring a wealth of experience
					in crafting visually captivating and highly functional web experiences. My extensive proficiency in
					HTML5, CSS3, JavaScript, TypeScript and a range of frontend frameworks, including React and Vue.js,
					has consistently enabled me to deliver user-centric solutions that drive engagement and conversions
					across various industries. I'm not only well-versed in optimizing web performance and ensuring
					cross-browser compatibility but also excel in collaborating seamlessly with cross- functional teams,
					leading projects to successful fruition, and staying ahead of industry trends and emerging
					technologies. My unwavering commitment to delivering top-notch frontend solutions continues to drive
					innovation and excellence in my career.
				</p>
				<h2>Experiences</h2>
				<article>
					<h3>
						<a href="https://slickdeals.net/" target="_blank">
							Slickdeals LLC
						</a>
					</h3>
					<span>Frontend Developer</span>
					<span className="year">2016 - 2023</span>
					<ul>
						<li>Translated flat design files to clean, accessible and interactive user experiences.</li>
						<li>
							Developed and maintained user-facing websites using HTML, CSS (Sass), and JavaScript
							(TypeScript and Vue.js).
						</li>
						<li>
							Imparted specific expertise and knowledge to peers and staff through individual mentoring
							and team efforts.
						</li>
						<li>Researched new technologies related to front end development for future implementation.</li>
						<li>Reviewed design mockups to provide feedback to designers on usability.</li>
						<li>Provided ongoing maintenance support for existing projects after deployment.</li>
						<li>
							Collaborated closely with the back-end developers to integrate API calls into the front-end
							codebase.
						</li>
					</ul>
					<h4>Languages</h4>
					<ul className="skillList">
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Sass</li>
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>Vue.js</li>
						<li>PHP</li>
						<li>Twig</li>
						<li>Wordpress</li>
					</ul>
				</article>
				<article>
					<h3>R&R Partners</h3>
					<span>Frontend Developer</span>
					<span className="year">2013 - 2016</span>
					<ul>
						<li>Developed and maintained Wordpress themes.</li>
						<li>Provided ongoing maintenance support for existing projects after deployment.</li>
						<li>Integrated third-party APIs with existing Wordpress sites to extend functionality.</li>
						<li>Reviewed design mockups to provide feedback to designers on usability.</li>
						<li>
							Wrote style guidelines for client-facing applications developed by cross-functional teams.
						</li>
					</ul>
					<h4>Languages</h4>
					<ul className="skillList">
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Sass</li>
						<li>JavaScript</li>
						<li>jQuery</li>
						<li>PHP</li>
						<li>Wordpress</li>
					</ul>
				</article>
				<article>
					<h3>SK+G Advertising</h3>
					<span>Junior Web Developer</span>
					<span className="year">2011 - 2013</span>
					<ul>
						<li>
							Developed and implemented web applications using HTML, CSS, JavaScript, jQuery, AJAX and PHP
							technologies.
						</li>
						<li>Assisted in the design of user interface features, site animation and special effects.</li>
					</ul>
					<h4>Languages</h4>
					<ul className="skillList">
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>jQuery</li>
						<li>PHP</li>
					</ul>
				</article>
				<h2>Education</h2>
				<article>
					<span>
						Bachelor Of Science (B.S.)
						<br /> in Web Design and Interactive Media
					</span>
					<span>Art Institute of Las Vegas</span>
					<span>Las Vegas, NV</span>
					<span>May 2011</span>
				</article>
				<article>
					<span>
						Bachelor of Business Administration (B.B.A)
						<br /> in Advertising and Marketing Communications
					</span>
					<span>Baruch College - Zicklin School of Business</span>
					<span>New York City, NY</span>
					<span>May 2006</span>
				</article>
				<article></article>
			</section>
		</>
	);
}

export default App;
