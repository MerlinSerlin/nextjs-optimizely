import OptimizelyWrapper from '../optimizely/OptimizelyWrapper'

import { UserContextProvider } from '../store/user-context'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <OptimizelyWrapper >
        <Component {...pageProps} />
      </OptimizelyWrapper>
    </UserContextProvider>
  )
}

export default MyApp
