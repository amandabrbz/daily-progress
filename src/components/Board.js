import styled from 'styled-components'
import Tracker from './Tracker'

const Board = (props) => {
  const Board = styled.section`
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 20vw;
    max-width: 40vw;
    max-height: 70vh;
    background: #fff;
    border-radius: 20px;
    box-shadow: 2px 5px 20px 0.4px rgba(0, 0, 0, 0.1);
    padding: 16px;
  `

  const days = [
    {
      day: 'S',
      per: 40,
    },
    {
      day: 'M',
      per: 30,
    },
    {
      day: 'T',
      per: 60,
    },
    {
      day: 'W',
      per: 60,
    },
    {
      day: 'T',
      per: 60,
    },
    {
      day: 'F',
      per: 90,
    },
    {
      day: 'S',
      per: 10,
    },
  ]

  return (
    <Board>
      {days.map((day) => (
        <Tracker day={day.day} percentage={day.per} key={day.day} />
      ))}
    </Board>
  )
}

export default Board
