import UserContext from "../store/user-context"

import { useContext } from 'react';

const GenerateUserButton = () => {
    const userCtx = useContext(UserContext);

  return (
    <button onClick={userCtx.generateRandomUser}>
        Click to generate random ID
    </button>
  )
}

export default GenerateUserButton