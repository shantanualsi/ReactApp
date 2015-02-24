var React = require('react');


var navigationConfig = [
	{
		href: 'http://localhost/',
		text: 'Shantanu\'s React App'
	}
];

// Mixins can also be created, so if two classes use the same configuration or set of events, we can reuse this mixin by 
// IF A PROPERTY IS SET IN A MIXIN, YOU CANNOT OVERRIDE IT IN THE COMPONENT
var ExampleMixin = {
	componentDidMount:function() {

	},
	componentWillMount:function(){

	},
	componentWillUnmount:function() {

	}
};

var Component1 = React.createClass({
	mixins:[ExampleMixin],
	render:function() {
		return (<h1>Hello</h1>);
	}
});

var Component2 = React.createClass({
	mixins:[ExampleMixin],
	render:function() {
		return (<h1>World</h1>);
	}
});




var App = React.createClass({
	//  -----------------------------Component Lifecycles -----------------------------
	componentWillMount: function(){
		console.log("Component will mount - Called once initially, can be used for XHR");
	},

	render: function (){
		console.log("Rendering - this gets called many times in a components life");
		// return React.createElement('div',{className:'navigation'},"Hello, my name is Shantanu!")


		// Get the config
		var config = this.props.config;
		var items = config.map(function (item) {
			return(
			<li class="nav-item">	
				<a class="nav-link" href={item.href}>
					{item.text}
				</a>
			</li>
			);
			
		});
		return (
			<div className="navigation">{items}</div>
		);
	},

	componentDidMount: function(){
		console.log("Component Did Mount -called after component is mounted. can use it for DOM manupulation eg. to render charts, can also bind some event listners here");
		// You can get access to the root DOM Node of the component
		var node = this.getDOMNode();
	},

	componentWillUnmount: function(){
		console.log("Component Will Unmount - Can do unbinding of any event listeners related to this component")
	},

	//  -----------------------------Component Methods -----------------------------
	getInitialState: function () {
		// Called on the creation of the component
		console.log("Get Initial State - can be used to initialize some initial configuration variables");
		return {
			openDropDown: -1
		};
	},

	// getDefaultProps: function () {
	// 	// The default values of the properties of the component at initialization. These are cached and cannot be changed
	// 	console.log("Get DefaultProps");
	// 	config = []
	// },

	propTypes:function () {
		console.log("Setting prop types - We can set the datatype of each property expected")
		config :React.PropTypes.Array
	},
})


// React.render(<App/>, document.getElementById('example'));
React.render(<App config={ navigationConfig }/>, document.body)