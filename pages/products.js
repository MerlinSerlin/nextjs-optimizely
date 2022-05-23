import React from 'react'
import { getUser } from '../utils/getUser';

const products = (props) => {
    const userId = props.user
    console.log(userId);
    return (
        <div>
            The user ID is {userId}
        </div>
    )
}

export async function getStaticProps(){
    const user = getUser();
    return {
        props: {
            user: user
        }
    }
}

export default products