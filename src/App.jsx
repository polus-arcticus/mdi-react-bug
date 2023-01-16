import { mdiBugOutline  } from '@mdi/js';
import Icon from '@mdi/react'
import styled from 'styled-components'

const StyledBug = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`
function App() {

  return (
    <div className="App">
      <StyledBug>
        <Icon size={5} path={mdiBugOutline} />
      </StyledBug>
    </div>
  )
}

export default App
