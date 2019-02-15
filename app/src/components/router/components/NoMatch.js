import React from 'react'
import styled from 'styled-components'

export default function NoMatch() {
  return (
    <BodyWrapper>
      <h1>404</h1>
      <h3>
        {/* No match for <code>{location.pathname}</code> */}
      </h3>
    </BodyWrapper>
  )
}

const BodyWrapper = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;