import './App.css';
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #1c2127
`;

function App() {
    return (
        <AppContainer>Object Detection</AppContainer>
    );
}

export default App;
