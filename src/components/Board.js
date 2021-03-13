import styled from 'styled-components'

const Board = (props) => {
  const Board = styled.section`
    margin: 20px auto;
    display: flex;
    flex-direction: center;
    align-items: center;
    min-width: 20vw;
    min-height: 20vh;
    max-width: 40vw;
    max-height: 70vh;
    background: #fff;
    border-radius: 20px;
    box-shadow: 2px 5px 20px 0.4px rgba(0,0,0,0.1);
    padding: 16px;
  `

  return <Board>hello</Board>
}

export default Board
