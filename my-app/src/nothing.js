		let morStyle = {
			position: absolute,
			width: 50,
			height: 24,
			right: 15,
			bottom: 35,
			background: rgba(0, 0, 0, .64),
			borderRadius: 4,
			textDecoration: none,
			textAlign: center,
			display: inline - block,
			fontSize: 14,
			lineHeight: 24,
			color: # fff;
		}


		<Trig  onClick={()=>{this.indexChange(0)}} currentIndex={currentIndex} className={currentIndex===0?'on':'hide'} /> <
		Trig onClick = {
			() => {
				this.indexChange(1)
			}
		}
		currentIndex = {
			currentIndex
		}
		className = {
			currentIndex === 1 ? 'on' : 'hide'
		}
		/> <
		Trig onClick = {
			() => {
				this.indexChange(2)
			}
		}
		currentIndex = {
			currentIndex
		}
		className = {
			currentIndex === 2 ? 'on' : 'hide'
		}
		/> <
		Trig onClick = {
			() => {
				this.indexChange(3)
			}
		}
		currentIndex = {
			currentIndex
		}
		className = {
			currentIndex === 3 ? 'on' : 'hide'
		}
		/> <
		Trig onClick = {
			() => {
				this.indexChange(4)
			}
		}
		currentIndex = {
			currentIndex
		}
		className = {
			currentIndex === 4 ? 'on' : 'hide'
		}
		/>



		}



		this.state = {
			onmouse: false,
		}
		this.state.onmouse ? "animate_content_item_show" : "animate_content_item"
		onMouseOver = {
			this.setState({
				onmouse: true
			})
		}
		onMouseOut = {
			this.setState({
				onmouse: false
			})
		}