// import React from 'react';

const frnd = async ({params}) => {
    const {frnd} = await params;
    console.log(frnd, 'id', typeof(frnd))

    const data = await fetch('http://localhost:3000/friends.json')
    const friends = await data.json()
    console.log(friends, "alll friend array ")
    const matched_f = friends.find(fn => fn.id === Number(frnd))
    console.log(matched_f)
    return (
        <div>
            <h1> details data shwoing page</h1>
        </div>
    );
};

export default frnd;