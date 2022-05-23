import { useEffect, useContext } from 'react'

import { OptimizelyProvider, createInstance, useDecision } from '@optimizely/react-sdk';

import UserContext from '../store/user-context';

const OptimizelyWrapper = (props) => {
  const userCtx = useContext(UserContext);
  const userId = userCtx.userId;
  const optimizelyClient = createInstance({
    sdkKey: 'Pk297cy5nQpzfYaLy9jzt'
  });

  useEffect(() => {
    console.log('User ID changed!')
  }, [userCtx.userId])

  return (
    <OptimizelyProvider
      optimizely={optimizelyClient}
      timeout={500}
      user={{id: userId,}}
      isServerSide
    >
      {props.children}
    </OptimizelyProvider>
  );
}

export default OptimizelyWrapper;