import styled from 'styled-components'


function Title(props) {
  const { text } = props
  const Title = styled.h1`
    font-size: 2rem;
    font-family: sans-serif;
    color: #b19cd9;
  `
  return (
    <Title>{text}</Title>
  )
}

export default Title
