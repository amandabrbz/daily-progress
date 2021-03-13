import styled from 'styled-components'
import Title from './components/Title'

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`

function App() {
  return (
    <Main>
      <Title text="Progress Tracker"/>
    </Main>
  );
}

export default App;
