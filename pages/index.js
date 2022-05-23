import GenerateUserButton from '../components/generateUserButton';
import { useDecision } from '@optimizely/react-sdk';
import { useContext, useEffect } from 'react'
import UserContext from '../store/user-context';

export default function Home(props) {
  const userCtx = useContext(UserContext);
  const [decision] = useDecision('trial_period', { autoUpdate: true }, 
  // {overrideUserId: userCtx.userId}
  );

  return (
    <>
      <div>
        The number of days for the trial period is {decision.variables['days']}
      </div>
      <GenerateUserButton/>
    </>
  );
}


