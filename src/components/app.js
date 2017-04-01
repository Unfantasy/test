import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { NoticeBar, Button, WingBlank, WhiteSpace, InputItem } from 'antd-mobile';

import Header from './header';
import Home from './home';
import Profile from './profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event	"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />

        <NoticeBar type="success" mode="closable">国庆期间余额宝收益和转出到账时间</NoticeBar>

        <InputItem
          placeholder="输入"
        >标题</InputItem>

        <InputItem
          placeholder="0.00"
          extra="元"
        >价格</InputItem>

        <WhiteSpace size="lg" />

        <WingBlank>
          <Button className="btn" type="primary">primary 按钮</Button>
        </WingBlank>

			</div>
		);
	}
}
