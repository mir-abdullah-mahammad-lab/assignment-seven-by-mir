import React from 'react';
import { HiH1 } from 'react-icons/hi2';
import FriendCard from '../FriendCard/FriendCard';

const HomeSectionFriends = async () => {
    const data = await fetch('http://localhost:3000/friends.json')
    
    const friends = await data.json()
    console.log('ALL FRINED', friends)
    return (
        <div className='flex flex-col items-center justify-center container mx-auto'>
            <p className='text-left text-2xl w-full container ml-10'>Your Friends</p>
            <div className='w-auto grid  grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-2 container m-5'>
          {friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)}
            </div>
        </div>
    );
};

export default HomeSectionFriends;