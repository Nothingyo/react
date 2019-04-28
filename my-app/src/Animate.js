import React, {
	Component
} from 'react';
import './Animate.css';

const animate_images1 = [{
		url: require('./picture/animate_0.jpg'),
		time: '09:08',
		text: '这是简介这是简介这是简介这是简介这是简介这是简介'
	}, {
		url: require('./picture/animate_1.jpg'),
		time: '04:48',
		text: '这是简介这是简介这是简介这是简介这是简介这是简介'
	}, {
		url: require('./picture/animate_2.jpg'),
		time: '05:22',
		text: '这是简介这是简介这是简介这是简介这是简介这是简介'
	}, {
		url: require('./picture/animate_3.jpg'),
		time: '23:01',
		text: '这是简介这是简介这是简介这是简介这是简介这是简介'
	}, {
		url: require('./picture/animate_4.jpg'),
		time: '20:41',
		text: '这是简介这是简介这是简介这是简介这是简介这是简介'
	}, {
		url: require('./picture/animate_5.jpg'),
		time: '02:22',
		text: '这是简介这是简介这是简介这是简介这是简介这是简介'
	},

	{
		url: require('./picture/animate_6.jpg'),
		time: '06:52',
		text: '这是简介这是简介这是简介这是简介这是简介这是简介'
	}, {
		url: require('./picture/animate_7.jpg'),
		time: '12:57',
		text: '这是简介这是简介这是简介这是简介这是简介这是简介'
	},
]

const animate_images2 = [{
	url: require('./picture/animate_8.jpg'),
	time: '09:08',
	text: '这是简介这是简介这是简介这是简介这是简介这是简介'
}, {
	url: require('./picture/animate_9.jpg'),
	time: '09:08',
	text: '这是简介这是简介这是简介这是简介这是简介这是简介'
}, {
	url: require('./picture/animate_10.jpg'),
	time: '09:08',
	text: '这是简介这是简介这是简介这是简介这是简介这是简介'
}, {
	url: require('./picture/animate_11.jpg'),
	time: '09:08',
	text: '这是简介这是简介这是简介这是简介这是简介这是简介'
}, {
	url: require('./picture/animate_12.jpg'),
	time: '09:08',
	text: '这是简介这是简介这是简介这是简介这是简介这是简介'
}, {
	url: require('./picture/animate_13.jpg'),
	time: '09:08',
	text: '这是简介这是简介这是简介这是简介这是简介这是简介'
}, {
	url: require('./picture/animate_14.jpg'),
	time: '09:08',
	text: '这是简介这是简介这是简介这是简介这是简介这是简介'
}, {
	url: require('./picture/animate_15.jpg'),
	time: '09:08',
	text: '这是简介这是简介这是简介这是简介这是简介这是简介'
}]

class Animate extends Component {

	render() {
		return (
			<div id="animate">
				<AnimateLeft />
				<AnimateRight />
			</div>
		);
	}
}

class AnimateLeft extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstTab: true,
		};
	}
	render() {
		return (
			<div className="animate_left">
				<Headline 
				  firstTab={this.state.firstTab} 
				  onClick1={()=>{this.setState({firstTab:true})}}
				  onClick2={()=>{this.setState({firstTab:false})}}
				/>
				<Content firstTab={this.state.firstTab}/>
			</div>
		);
	}

}

class Headline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstTab: true,
		};
	}

	render() {
		const numberHop = [1000];
		return (
			<div className="animate_headline">
					<div className="headline_picture"></div>
					<a href="#">动画</a>
					<div className="animate_tab">
						<div 
						  className={this.props.firstTab?"animate_tab_itemon":"animate_tab_item"}
						  onClick={()=>{this.props.onClick1()}}
						>
						有新动态
						</div>
						<div 
						  className={this.props.firstTab?"animate_tab_item":"animate_tab_itemon"}
						  onClick={()=>{this.props.onClick2()}}
						>
						最新投稿
						</div>
					</div>
					<a href="#" className="animate_headline_numberhop">{numberHop}条新动态</a>
					<a href="#" className="animate_headline_more">更多></a>
			</div>
		);
	}
}

class Content extends Component {
	constructor(props) {
		super(props);
	}
	showContent = (firstTab) => {
		let content = [];
		if (firstTab === true) {
			animate_images1.map((e, index) => {
				content.push(<ContentItem 
								e={e} 
								key={'ContentItem'+index}
							/>);
			});
		} else {
			animate_images2.map((e, index) => {
				content.push(<ContentItem 
								e={e} 
								key={'ContentItem'+index}
							/>);
			});
		}
		return content;
	}
	render() {
		return (
			<div className="animate_content">
			{
				this.showContent(this.props.firstTab)
			}
			</div>
		);
	}
}

class ContentItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let {
			e
		} = this.props;
		return (
			<div className="animate_content_item">
            	<div 
            	  className="animate_content_images"
            	 >
             	  <a href="#" className="animate_content_images_a" >
           			<img src={e.url}></img>
					<p style={{color:'#000'}}>{e.text}</p>
            		  <div className="PlayAndDanmarku">
        			  	<img src={require("./picture/danmaku.png")}></img>
                		<img src={require("./picture/playnumber.png")}></img>
             		  </div>
       			  </a>
            	</div>
            	<div className="animate_content_item_hide" >
            	  <a href="#" >{e.time}</a>
  				  <a href="#" title="稍后再看">
             		<img 
             		  className="animate_clock" 
             		  src={require("./picture/slide2_clock.png")}
					></img>
           		  </a>
            	</div>
       		</div>
		);
	}
}

class AnimateRight extends Component {
	render() {
		return (
			<div className="animate_right">
			</div>
		);
	}

}
export default Animate;