import { SettingsActionTypes, SettingsState, Theme, Style } from "../types";

const initialState: SettingsState = {
    theme: Theme.Light,
    styles: {
        label: {
            color: 'black'
        },
        view: {
            backgroundColor: '#c95a37'
        },
        headerBackground: {
            backgroundColor: 'white'
        },
        headerBackgroundColor:'#3763c9',
        headerTextColor:'black'
    }
}

export default function settingsReducer(state = initialState, action: SettingsActionTypes) {
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                theme: action.payload,
                styles: { ...styles.get(action.payload) }
            }
        }
        default: {
            return state
        }
    }
}

const styles = new Map<Theme, Style>([
    [Theme.Light, {
        label: {
            color: 'black'
        },
        view: {
            backgroundColor: 'white'
        },
        headerBackground: {
            backgroundColor: '#3763c9'
        },
        headerBackgroundColor:'#3763c9',
        headerTextColor: 'white'
    },],
    [Theme.Dark, {
        label: {
            color: 'white'
        },
        view: {
            backgroundColor: 'black'
        },
        headerBackground: {
            backgroundColor: 'darkgrey'
        },
        headerBackgroundColor:'darkgrey',
        headerTextColor: 'white'
    }]
])