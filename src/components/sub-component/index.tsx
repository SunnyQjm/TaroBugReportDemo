import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

export default class SubComponent extends Taro.Component{

  constructor(props) {
    super(props);
    this.onTest = this.onTest.bind(this);
  }

  onTest() {
    console.log('on subcompoent click');
    this.props.onParentClick();

  }

  render(): any {
    return (
      <View onClick={this.onTest}>Test</View>
    )
  }
}
