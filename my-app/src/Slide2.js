import React, {
	Component
} from "react";
import './Slide2.css';
const slide2_Images = [{
	url: require('./picture/slide2_0.jpg'),
	name: 'aaaaaaaaaaaaaa'
}, {
	url: require('./picture/slide2_1.jpg'),
	name: 'bbbbbbbb'
}, {
	url: require('./picture/slide2_2.jpg'),
	name: 'cccccc'
}, {
	url: require('./picture/slide2_3.jpg'),
	name: '如此丧心病狂的作者你可见过？情侣全悲剧！单身狗必看！'
}, {
	url: require('./picture/slide2_4.jpg'),
	name: 'eeeeeee'
}, {
	url: require('./picture/slide2_5.jpg'),
	name: 'ffffffff'
}, {
	url: require('./picture/slide2_6.jpg'),
	name: 'gggggggg'
}, {
	url: require('./picture/slide2_7.jpg'),
	name: 'wowowowwowow'
}]

class Slide2 extends Component {
	render() {
		let slide2_images = [];
		slide2_Images.map((e, index) => {
			slide2_images.push(
				<Slide2_images 
				  e={e} 
				  key={'Slide2_images'+index}
				/>);
		})
		return (
			<div id="slide2">
		{
			slide2_images
		}
			</div>
		);
	}
}

class Slide2_images extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onMouse: false,
		};
	}

	render() {
		const {
			e
		} = this.props;
		return (<div 
				  className="slide2_images" 
				  onMouseOver={()=>{this.setState({onMouse:true})}} 
				  onMouseOut={()=>{this.setState({onMouse:false})}}
				>
					<a href="#"  ><img src={e.url}></img></a>
					<div className={this.state.onMouse?'slide2_show':'slide2_hide'}>
						<a href="#">{e.name}</a>
						<a href="#" title="稍后再看">
							<img 
							  className="slide2_clock" 
							  src={require('./picture/slide2_clock.png')}
							></img>
						</a>
					</div>
				</div>);
	}
}
export default Slide2;