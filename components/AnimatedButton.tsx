import * as React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

type Props = {
  size: number;
  onPress: () => void;
};

class AnimatedButton extends React.Component<Props> {
  sizeAnim: Animated.Value;
  opacityAnim: Animated.Value;
  constructor(props: Props) {
    super(props);
    this.sizeAnim = new Animated.Value(0);
    this.opacityAnim = new Animated.Value(0.5);
  }

  handlePressIn = () => {
    this.sizeAnim.setValue(0);
    this.opacityAnim.setValue(0.5);
    Animated.timing(this.sizeAnim, {
      toValue: this.props.size,
      duration: 100,
      easing: Easing.linear,
    }).start();
  };

  handlePressOut = () => {
    Animated.timing(this.opacityAnim, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
    }).start();
  };

  render() {
    const {size, onPress} = this.props;
    return (
      <View
        style={{
          width: size,
          height: size,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            width: this.sizeAnim,
            height: this.sizeAnim,
            borderRadius: size,
            opacity: this.opacityAnim,
            backgroundColor: 'gray',
          }}></Animated.View>
        <TouchableOpacity
        style={{flex:1, justifyContent:'center',alignItems:'center'}}
            onPress={()=>{onPress()}}
          onPressIn={() => {
            this.handlePressIn();
          }}
          onPressOut={() => {
            this.handlePressOut();
          }}>
          {this.props.children}
        </TouchableOpacity>
      </View>
    );
  }
}
export default AnimatedButton;
