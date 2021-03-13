import styled from 'styled-components'
import PropTypes from 'prop-types'

const Tracker = (props) => {
  const { day, percentage } = props

  const Tracker = styled.div`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 40px;
    color: #ff6961;
  `

  const Day = styled.h2`
    text-align:center;
    width: 50px;
    border-right: solid 3px lightgrey;
  `

  return (
    <>
      <Tracker>
        <Day>{day}</Day> {percentage}%
      </Tracker>
    </>
  )
}

Tracker.propTypes = {
  day: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default Tracker
