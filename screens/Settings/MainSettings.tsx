import React from "react";
import { RootState, Theme } from "../../store/types"
import { changeTheme } from "../../store/actions/settings";
import { connect, ConnectedProps } from "react-redux";
import { ScrollView, View } from "react-native";
import AnimatedButton from "../../components/AnimatedButton";
import { Screen, Label } from "../../components/ConnectedComponents";

const mapStateToProps = (state: RootState) => ({
    settings: state.settingsReducer,
});

const mapDispatchToProps = {
    changeTheme: changeTheme,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const MainSettings: React.FunctionComponent<Props> = props => {
    return (
        <Screen>    
        <Label>Settings</Label>
        </Screen>
    )
}

export default connector(MainSettings)