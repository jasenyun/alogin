import React, { useEffect } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { useLoadingContext } from 'react-router-loading'
import './app.css'

const Love = styled.div`
  color: red;
  font-size: 48px;
  text-align: center;
  margin-top: 12px;
`
function App() {
  const { formatMessage } = useIntl()
  const loadingContext = useLoadingContext()

  useEffect(() => {
    loadingContext.done()
  }, []) // eslint-disable-line

  return (
    <div className="App">
      <header className="App-header">
        <Love>Love is Love, You are So cute</Love>
        <p>{formatMessage({ id: 'home' })}</p>
      </header>
    </div>
  )
}

export default App
