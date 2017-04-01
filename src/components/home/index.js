import { h, Component } from 'preact';
import { NoticeBar, Button, WingBlank, WhiteSpace, InputItem } from 'antd-mobile';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Button type="ghost" size="small" inline>这是一个普通的按钮</Button>
			</div>
		);
	}
}
