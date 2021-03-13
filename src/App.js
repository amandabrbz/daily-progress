import styled from 'styled-components'
import Title from './components/Title'
import Board from './components/Board'

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #CCDDEE;
`

function App() {
  return (
    <Main>
      <Title text="Progress Tracker"/>
      <Board/>
    </Main>
  );
}

export default App;
