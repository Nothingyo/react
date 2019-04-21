import React, { Component } from "react";
import './Slide.css';
const images = [
	{
		url:require('./picture/1.jpg') ,
		name: "挑战第一次，不试你怎么知道？"
	},
	{
		url:require('./picture/2.jpg') ,
		name: "疑案追声"
	},
	{
		url: require('./picture/3.jpg') ,
		name: "考研冲鸭！"
	},
	{
		url: require('./picture/4.jpg') ,
		name: "舞蹈"
	},
	{
		url: require('./picture/5.jpg') ,
		name: "爱是孤独的开始"
	}
];


class Slide extends Component {
	render() {
		return (
			<div id="slide">
				<Slide1 items={images} />
				<Slide2 />
			</div>
		);
	}
}

class Slide1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0,
			time: null
		};
	}

	showTime(){
		this.state.time= setInterval(() => {
			//console.log("curr is "+this.state.currentIndex);
			this.state.currentIndex += 1;
			if (this.state.currentIndex >= this.props.items.length) {
				this.state.currentIndex = 0;
			}
			this.setState({currentIndex:this.state.currentIndex});
		}, 3000);

	}

	setOnmouseEvent1() {
        let more = document.querySelector('.more');
        console.log(more);
        clearInterval(this.state.time);
        more.style.display = 'inline-block';
    }

    setOnmouseEvent2(){
    	let more = document.querySelector('.more');
        this.showTime();
        console.log(this);
        more.style.display = 'none';
    }


	
	componentDidMount() {
		this.showTime();
		console.log(this.state.time);
		}
	

	render() {
		
		return (
			<div id="slide1">
				<Picture items={this.props.items} currentIndex={this.state.currentIndex} onMouseOver={() => this.setOnmouseEvent1()} onMouseOut={()=>this.setOnmouseEvent2()} />
				<Trig />
			</div>
		);
	}
}

class Picture extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<ul
				className="picture"
				onMouseOver={() => this.props.onMouseOver()}
			>
				<li>
					<a href="#"><img src={this.props.items[this.props.currentIndex].url}></img>></a>
					<a href="#" className="title">{this.props.items[this.props.currentIndex].name}</a>
					<a href="#" className="more">更多></a>
				</li>
			</ul>
		);
	}
}


class Trig extends Component {

	render() {
		return null;
	}
}

class Slide2 extends Component {
	render() {
		return null;
	}
}

export default Slide;
