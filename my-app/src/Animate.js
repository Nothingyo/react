import React, {
	Component
} from 'react';
import './Animate.css';
import AnimateLeft from './AnimateLeft';
import AnimateRight from './AnimateRight';

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

export default Animate;