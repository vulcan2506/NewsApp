import React from 'react'
import {Bars3Icon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import Navlinks from './Navlinks'
import SearchBox from './SearchBox'
import { NewsContext } from '../context/newscontext.'
import { useContext } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
function Header() {
 const[currentUser, ser]
  const addToFirebase = async user =>{
    await setDoc(doc(db,'users',user.email),{
        email:user.email,
        name: user.displayName
    })
}


const handlUserAuth = async () =>{
    const userData =  await signInWithPopup(auth,provider)
    const user = userData.user;
    console.log(user)
    setCurrentUser(user)
    addToFirebase(user)
}  return (
    <header>
        <div className="grid grid-cols-3 p-10 items-center">
            <Bars3Icon className='h-8 w-8 cursor-pointer'/>
            <Link href='/' prefetch={false}>
                <h1 className='font-serif text-4xl text-center'>The News Center</h1>
            </Link>
            <div className='flex items-centerjustify-end
            space-x-2'>
                <button onClick={handleUserAuth} className='hidden md:inline bg-slate-900
                text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full
                dark:bg-slate-800'>Subscribe Now</button>
            </div>
        </div>
        <Navlinks/>
        <SearchBox/>
    </header>
  )
}

export default Header