'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({friend}) => {
    return (
      <Link href={`/${friend.id}`}>
      <div>
            
            <div className="card bg-base-100 w-60 shadow-sm ml-5">
  <figure className="px-10 pt-10">
    <Image
    src={friend.picture}
    alt={'Picture of Friend'}
    width={60}
    height={60}
    preload={"eager"}
    className='rounded-full'></Image>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p>{friend.days_since_contact}d ago </p>
    <p className='bg-green-300 rounded-full w-15'>{friend.tags[0]}</p>
    <p className={`${
      friend.status === "overdue"? `bg-red-500`: friend.status === "on-track"? `bg-green-300 `:
      `bg-yellow-300`} rounded-full w-20 whitespace-nowrap`}>{friend.status}</p>
    
  </div>
</div>
        </div>
      </Link>
    
          
   
    );
};

export default FriendCard;