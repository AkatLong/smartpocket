import { Theme } from "../types";
import { CHANGE_THEME } from "./actionTypes";

export const changeTheme = (theme: Theme) => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}