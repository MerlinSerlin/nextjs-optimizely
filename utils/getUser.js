import React from 'react'

export const getUser = () => {
    // const valToReturn =  Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(valToReturn);
    const max = 100;
    const min = 0;
    const userId = Math.floor(Math.random() * (max - min + 1) + min).toString();
    // console.log(userId.toString());
    return userId.toString();
}