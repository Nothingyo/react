import React, {
    Component
} from 'react';
import './AnimateRight.css';
const Right_Items = [{
        seq: 0,
        url: require('./picture/animate_0.jpg'),
        illustration: 'aaa看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_1.jpg'),
        illustration: 'bbb看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_2.jpg'),
        illustration: 'ccc看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_3.jpg'),
        illustration: 'ddd看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_4.jpg'),
        illustration: 'eee看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_5.jpg'),
        illustration: 'fff看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_6.jpg'),
        illustration: 'ggg看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_7.jpg'),
        illustration: 'hhh看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_8.jpg'),
        illustration: 'iii看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_9.jpg'),
        illustration: 'jjj看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_10.jpg'),
        illustration: 'kkk看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_11.jpg'),
        illustration: 'lll看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_12.jpg'),
        illustration: 'mmm看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }, {
        seq: 0,
        url: require('./picture/animate_13.jpg'),
        illustration: 'nnn看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }

]

class AnimateRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all: true,
        }
    }
    render() {
        return (
            <div className="animate_right">
                <RankHead 
                  all={this.state.all}
                  onClickAll={()=>this.setState({all:true})}
                  onClickOriginal={()=>this.setState({all:false})}
                />
                <RankList 
                  all={this.state.all}
                />
                <a href="#" className="search-more">查看更多</a>
            </div>
        );
    }
}

class RankHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="rank-head">
            <h3>排行</h3>
            <div className="rank-tab">
              <div 
                className={this.props.all?"rank-tabon":"rank-taboff"} 
                onClick={()=>this.props.onClickAll()}
              >全部
              </div>
              <div 
                className={this.props.all?"rank-taboff":"rank-tabon"} 
                onClick={()=>this.props.onClickOriginal()}
              >原创
              </div>
            </div>
            <div className="select-date">三日></div>
        </header>
        );
    }
}

class RankList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            change: true,
        }
    }
    addSeq = (index) => {
        Right_Items[index].seq += 1;
        console.log(Right_Items[index] + ' index is' + index);
        Right_Items.sort((a, b) => b.seq - a.seq);
        //更新state,重新渲染
        this.setState({
            change: true
        });
    }
    render() {
        let page = this.props.all ? 0 : 6;
        let list = [];
        Right_Items.map((e, index) => {
            if (index - page === 0) {
                list.push(
                    <li className="rank-item-first" onClick={()=>{this.addSeq(index)}}>
                      <i className="rank-number-first">{index- page+1}</i>
                      <a className="rank-item-illustration">
                        <img src={e.url}></img>
                        {e.illustration}
                      </a>
                    </li>
                );
            } else if (index - page === 1 || index - page === 2) {
                list.push(
                    <li className="rank-item" onClick={()=>{this.addSeq(index)}}>
                      <i className="rank-number-red">{index- page+1}</i>
                      <a className="rank-item-illustration">{e.illustration}</a>
                    </li>
                );
            } else if (index - page <= 6 && index - page > 0) {
                list.push(
                    <li className="rank-item" onClick={()=>{this.addSeq(index)}}>
                      <i className="rank-number">{index- page+1}</i>
                      <a className="rank-item-illustration">{e.illustration}</a>
                    </li>
                );
            }
        });
        return (
            <div className="rank-list">
            <ul className="rank-list-items">{list}</ul>
        </div>
        );
    }
}

export default AnimateRight;