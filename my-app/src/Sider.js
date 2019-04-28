import React, {
	Component
} from 'react';
import './Sider.css';

const sider_Items = [{
	name: "直播"
}, {
	name: "动画"
}, {
	name: "番剧"
}, {
	name: "国创"
}, {
	name: "音乐"
}, {
	name: "舞蹈"
}, {
	name: "游戏"
}, {
	name: "科技"
}, {
	name: "数码"
}, {
	name: "生活"
}, {
	name: "鬼畜"
}, {
	name: "时尚"
}, {
	name: "广告"
}, {
	name: "娱乐"
}, {
	name: "专栏"
}, {
	name: "电影"
}, {
	name: "TV剧"
}, {
	name: "影视"
}, {
	name: "纪录片"
}]

class Sider extends Component {
	render() {
		let siderStyle = {

			position: "fixed",
			top: 10,
			right: 10,
			width: 46,
			backgroundColor: "#f6f9fa",
			textAlign: "center",
			borderRadius: 4,
			border: "solid #F0F8FF",

		}
		let sider = [];
		sider_Items.map((e, index) => {
			sider.push(
				<div 
					className="sider_item" 
					key={'sider_item'+index}
				>
				  {e.name}
				</div>
			);
		});
		return ( <
			div id = "sider"
			style = {
				siderStyle
			} > {
				sider
			} <
			/div>);

		}
	}

	export default Sider;