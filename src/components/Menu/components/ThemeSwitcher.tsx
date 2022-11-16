import React, { useContext } from "react";
import styled from "styled-components"
import { ThemeModeContext, ThemeModes } from "../../../contexts/ThemeModeContext";

const StyledSwitch = styled.div<{ mode: ThemeModes }>`
    background-color: #333;
    border: 0;
    border-radius: 10000px;
    padding: 3px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 25px;
    width: 50px;
    position: relative;

    input[type="checkbox"] {
        display: none;
    }

    label {
        width: 50px;
    }

    span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 20px;
    }

    label:before {
        content: '';
        width: 25px;
        height: 25px;
        border: 1px solid #333;
        border: 0;
        border-radius: 100%;
        background: #fafafa;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        transition: all .3s;
        cursor: pointer;
        ${({ mode }) => mode == 'dark' && 'transform: translateX(100%);'}
    }
`;

const ThemeSwitcher = () => {
    const { mode, toggleMode } = React.useContext(ThemeModeContext);

    return (
        <StyledSwitch mode={useContext(ThemeModeContext).mode}>
            <input id="toggle-theme" type="checkbox" value={mode == 'dark' ? 'true' : 'false'} onChange={toggleMode} />
            <label htmlFor="toggle-theme">
                <span>
                    🌙
                </span>
                <span>
                    ☀️
                </span>   
            </label>
        </StyledSwitch>
    )
}

export default ThemeSwitcher;