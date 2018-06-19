import React, { Component } from 'react';

import basicPageStyle from '../material-kit-react/styles/basicPageStyle.jsx';

import Header from '../material-kit-react/components/header.jsx';
import Parallax from '../material-kit-react/components/parallax.jsx';

class Blog extends Component {
	render() {
		const { classes, ...rest } = this.props;

		return (
			<div className="App">
				<Header
						color="transparent"
						brand="My Blog"
						fixed
						changeColorOnScroll={{
							height: 200,
							color: "white"
						}}
						{...rest}
					/>
				<Parallax small filter image={require("../assets/img/profile-bg.jpg")} />
				<div style={Object.assign(basicPageStyle.main, basicPageStyle.mainRaised)}>	
					//{this.props.children}
				</div>
			</div>
		);
	}
}

export default Blog;
