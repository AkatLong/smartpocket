import * as React from 'react';
import {
  View,
  Animated,
  Easing,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';

type Props = {
  size: number;
  backgroundColor?: string;
  onPress: () => void;
  borderColor?: string;
  borderWidth?: number;
  style?: StyleProp<ViewStyle>
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
    const { size, style, onPress, backgroundColor, borderWidth, borderColor } = this.props;
    return (
      <View
        style={
          [{
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: backgroundColor,
            borderRadius: size,
            borderWidth,
            borderColor
          },
            style]
        }>
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
          style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => { onPress() }}
          onPressIn={() => {
            this.handlePressIn();
          }}
          activeOpacity={.9}
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
