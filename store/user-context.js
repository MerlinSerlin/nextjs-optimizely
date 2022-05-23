import { createContext, useState } from 'react';

import { getUser } from '../utils/getUser';

// context is a JavaScript object

// createContext takes an argument, which will be the initial value 

const UserContext = createContext({
    userId: null,
    decision: {},
    generateRandomUser: () => {},
});

export function UserContextProvider(props) {
    const [userId, setUserId] = useState('123');

    const generateRandomUserHandler = () => {
        setUserId(() => getUser());
    } 

    const context = {
        userId: userId,
        generateRandomUser: generateRandomUserHandler,
    };

    return (
    <UserContext.Provider value={context}>
        {props.children}
    </UserContext.Provider>)
}

export default UserContext;