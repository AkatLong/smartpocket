import { RootState } from "../store/types";
import { View, StyleProp, ViewStyle, Text, TextStyle, TextProperties, TextProps } from "react-native";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

const mapStateToProps = (state: RootState) => ({
    styles: state.settingsReducer.styles
})

const connector = connect(
    mapStateToProps,
    {}
)

type DefaultProps = {
    style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
}

type Props = ConnectedProps<typeof connector> & DefaultProps

const screen: React.FunctionComponent<Props> = (props) => {
    return (
        <View style={[{ flex: 1 }, props.styles.view, props.style]}>
            {props.children}
        </View>
    );
};

const label: React.FunctionComponent<Props & TextProps> = (props) => {
    return (
        <Text {...props} style={[props.styles.label, props.style]}>
            {props.children}
        </Text>
    );
};

export const Screen = connector(screen);
export const Label = connector(label);

