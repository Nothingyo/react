import React, {
	Component
} from "react";
import './Slide.css';
import Slide2 from './Slide2';

const images = [{
	url: require('./picture/1.jpg'),
	name: "挑战第一次，不试你怎么知道？"
}, {
	url: require('./picture/2.jpg'),
	name: "疑案追声"
}, {
	url: require('./picture/3.jpg'),
	name: "考研冲鸭！"
}, {
	url: require('./picture/4.jpg'),
	name: "舞蹈"
}, {
	url: require('./picture/5.jpg'),
	name: "爱是孤独的开始"
}];


class Slide extends Component {
	render() {
		return (
			<div id="slide" key={this.id}>
				<Slide1 items={images} key={'slide1_images'}/>
				<Slide2 />
			</div>
		);
	}
}
let timer = null;
let isnone = 'none';
class Slide1 extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0
		};
	}


	showTime() {
		timer = setInterval(() => {
			//console.log("curr is "+this.state.currentIndex);
			let [currentIndex] = [this.state.currentIndex];
			currentIndex += 1;
			if (currentIndex >= this.props.items.length) {
				currentIndex = 0;
			}
			this.setState({
				currentIndex: currentIndex
			});
		}, 3000);

	}
	indexChange = (i) => {
		//console.log(this.index);
		this.setState({
			currentIndex: i
		});
		clearInterval(timer);
		this.showTime();
	}
	componentWillMount() {
		this.showTime();
		//console.log(timer);
	}
	componentWillUnmount() {
		clearInterval(timer);
	}
	render() {
		let [currentIndex] = [this.state.currentIndex];
		let statement = [];
		for (let i = 0; i < 5; i++) {
			statement.push(<Trig  
						onClick={()=>{this.indexChange(i)}} 
						currentIndex={currentIndex} 
						className={currentIndex===i?'on':'hide'} 
						key={'Trig'+i}/>);
		}
		return (
			<div id="slide1">
			{
				this.props.items.map((e,index)=>{
				return index === currentIndex ? 
				<Picture e={e} 
				onMouseOver={() => {clearInterval(timer);}} 
				onMouseOut={()=>{this.showTime();} } 
				key={'Picture'+index}/>
				: null
			})
	}
	<ul className="trig">{statement}</ul> 
	</div>
		);
	}

}

class Picture extends Component {


	render() {
		const {
			e
		} = this.props
		return (
			<ul
				className="picture"
				onMouseOver={() => this.props.onMouseOver()}
					onMouseOut={()=>this.props.onMouseOut()}
			>
				<li>
					<a href="#"><img src={e.url}></img>></a>
					<a href="#" className="title">{e.name}</a>
					<a href="#" className="more" >更多></a>
				</li>
			</ul>
		);
	}
}


class Trig extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<span 
			className ={this.props.className} 
			onClick = {() => {this.props.onClick()}} 
			> 
			</span>);
	}
}


export default Slide;