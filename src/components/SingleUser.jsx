import React from 'react'

const SingleUser = ({user}) => {
  return (
    
<div 
 class=
 'flex bg-zinc-800 w-full justify-center'
 >
  <div 
   class=
   "grid grid-cols-2 h-48 w-[700px] mt-10 bg-purple-800 rounded-lg items-center justify-center"
  >
    <div 
     class=
     "flex h-36 w-fit mx-20"
     >
        <img class= "rounded-full "src={user.picture.large}  alt="" />
    </div>
    <div 
     class=
     "flex flex-col w-64 h-fit text-xl text-white font-bold"
      >
        <h3 class=""> 
          {user.name.first} {user.name.last}
        </h3>
        <p class="flex h-fit w-fit">
          Email {user.email}
        </p>
        <p class="flex w-fit h-fit">
          {user.location.country} | {user.location.city}
        </p>
    </div>
  </div>
</div>
  )
}

export default SingleUser