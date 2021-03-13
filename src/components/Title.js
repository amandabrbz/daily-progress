import styled from 'styled-components'
import PropTypes from 'prop-types'

function Title(props) {
  const { text } = props
  const Title = styled.h1`
    font-size: 2rem;
    font-family: sans-serif;
    color: #b19cd9;
    text-shadow: 1px 1px #fff;
  `
  return <Title>{text}</Title>
}

Title.propTypes = { 
  text: PropTypes.string.isRequired
}

export default Title
