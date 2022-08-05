import { useEffect } from "react"
import { useIntl } from "react-intl"
import { useLoadingContext } from "react-router-loading"

function App() {
  const { formatMessage } = useIntl()
  const loadingContext = useLoadingContext()

  useEffect(() => {
    loadingContext.done()
  }, []) // eslint-disable-line

  return (<div>
    <div>认证页面</div>
  </div>)
}

export default App