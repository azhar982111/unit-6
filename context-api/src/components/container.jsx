import { useContext } from "react";
import { ThemeContext } from "../context/theme"
import styled from "styled-components";

const ContainerWrapper = styled.div`
background: ${({ isDarkMode }) => (isDarkMode ? "black" : "#cecece")};
color: ${({ isDarkMode }) => (isDarkMode ? "whitesmoke" : "black")};
`;

export default function Container() {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <button onClick={toggleTheme}>{isDarkMode ? "Light mode" : "Dark mode"}</button>
            <ContainerWrapper isDarkMode={isDarkMode}>theme</ContainerWrapper>
        </div>


    )
}