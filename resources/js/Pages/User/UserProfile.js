import { usePage } from '@inertiajs/inertia-react';
import React from 'react'

function UserProfile() {


 const {user} = usePage().props;
 console.log(user);
  return (
    <div>{user.firstname}</div>
  )
}

export default UserProfile