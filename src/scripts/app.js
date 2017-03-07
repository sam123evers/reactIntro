import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'




var BlogPage = React.createClass({
  	render: function() {
  		return (
  			<div className="blog-page">
  				<Banner/>
  				<TotalColumn/>
  				<Twitter/>
  			</div>
  		)
  	}
 }) 

var Banner = React.createClass ({
	render: function() {
		return (
			<div className="banner-div">
				<img className="houston" src="http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
				<img className="bannerLogo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
			</div>
		)
	}
})

var TotalColumn = React.createClass ({
	render: function() {
		return (
			<div className="total-column">
				<RightColumn/>
				<LeftColumn/>
			</div>
		)
	}
})



var LeftColumn = React.createClass ({
	render: function() {
		return (
			<div className="left-column">
				<h3>The Iron Hard | Houston</h3>
				<p>Happenings and updates from the Iron Yard in Houston, TX.</p>
				<h3>Search</h3>
				<input/>
			</div>
		)
	}
})

var RightColumn = React.createClass ({
	render: function() {
		return (
			<div className="right-column">
				<h2>September 22 starts a new class of The Iron Yard Students</h2>
				<img className="classroom" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
				<p className="fillertext">Forage wayfarers mixtape austin street art. Street art ugh hoodie XOXO blog. Fanny pack actually 
				banh mi bicycle rights authentic.</p>
			</div>
		)
	}
})

var Twitter = React.createClass ({
	render: function() {
		return (
			<div className="twitter">
				<h3 className="post">Never Miss a Post!</h3>
				<TwitterDivOne/>
			</div>
		)
	}
})

var TwitterDivOne = React.createClass ({
	render: function() {
		return(
			<div className="twitter-div-one">
				<img className="twitterpic" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
				<TwitterDivTwo/>
				<button className="followbutton">+ follow</button>
			</div>

		)
	}
})

var TwitterDivTwo = React.createClass ({
	render: function() {
		return(
			<div className="twitter-div-two">
				<h2 className="tiyhouston">TIY | Houston</h2>
				<p className="twitterP">The Iron Yard Houston</p>
			</div>
		)
	}
})




var app = function() {
	//document.querySelector('.container').innerHTML = BlogPage
	//var libraryName = 'react'
	ReactDOM.render(<BlogPage />, document.querySelector('.container'))

}





// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..