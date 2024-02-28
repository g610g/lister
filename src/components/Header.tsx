import React from 'react'

export default function Header() {
    const header_list = [
        'Home',
        'About',
        'Acknowledgements'

    ];
    return (
    <div className='flex w-full justify-between p-[1rem]'>
        <div className='w-1/2'>
            <ul className='flex justify-around'>
                {header_list.map((value, i) => {
                    return <li key={i} className='text-2xl font-Raleway text-white'>{value}</li>
                })}
            </ul>
        </div>
        <div className='text-2xl font-Raleway text-white px-3'><button>Sign In</button></div>
    </div>
  )
}
