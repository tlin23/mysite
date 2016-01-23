// Reuires

var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./navbar');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require('react-bootstrap/lib/Button');
var Image = require('react-bootstrap/lib/Image');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

// Components
// Tizzite Client
var MySite = React.createClass({
	render: function() {
		return (
			<div className='my-site'>
				<Navbar />
				<div className='jumbo-content'>
					<br/>
					<br/>
					<br/>
					<Grid>
						<Row>
						  <Col xs={6} md={4}>
						    <Image src="assets/img/profile2.png" rounded />
						  </Col>
						  <Col xs={6} md={4}>
						    <Image src="assets/img/profile.png" circle />
						  </Col>
						  <Col xs={6} md={4}>
						    <Image src="assets/img/profile3.png" thumbnail />
						  </Col>
						</Row>
					</Grid>
				</div>
				<div className='site-content'>
					<div className='summary'>
						<p> Hello! </p>
						<p>
							My name is Terry and I am a sophmore in computer science at the University of
							British Columbia (expected to graduate in May 2017). I also hold a M.Sc. from 
							University of Victoria where I studied Psychology and Cognitive Neuroscience before 
							pursuing CS full-time.
						</p>
						<p>
							I mainly code in Python and Javascript, and I have some experience with Java, 
							C++ and C. I am most enthusiastic about building utility applications that help people 
							achieve their goals in the most efficient and user-friendly way possible. In my spare time, 
							I build web applications (see Tizzite and Graffiki) aimed to inspire creativity and social 
							connections with others around the world. I have implemented these ideas using different 
							frameworks (Django, Pyramid, Flask) and libraries (React.js, JQuery.js). You can find
							more details about my projects and myself in my resume or by contacting me. Please 
							don’t hesitate to reach out if you have any questions – I’d love to chat! 
						</p>
					</div>
					<embed src="assets/file/Terry-Lin-Resume.pdf" width="100%" height="1000" alt="pdf"/>
				</div>
			</div>
		)
	}
});



//////////////////////////////////////////////////////////////////////////////////////////

// // Mount to html
ReactDOM.render(
  <MySite />,
  document.getElementById('content')
);
//////////////////////////////////////////////////////////////////////////////////////////