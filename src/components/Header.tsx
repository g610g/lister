import React from 'react'


export default function Header() {
    // obj.ge
    interface Point{
        x:number,
        y:string
    }
    function logPoint(p:Point){
        console.log(p)
    }

    const header_list = [
        "Home",
        "About",
        "Acknowledgements"
    ]
    const on_signup_click = () => {
        alert("Clicked the signup")
        const point3 = {x:1, y:"hello there", z:2.12}
        logPoint(point3)
     
    }
    return (
    <div className='flex w-full justify-between p-[1rem]'>
        <div className='w-1/2'>
            <ul className='flex justify-around'>
                {header_list.map((value, i) => {
                    return <li key={i} className='text-2xl font-Raleway text-white'>{value}</li>
                })}
            </ul>
        </div>
        <div className='text-2xl font-Raleway text-white px-3'>
            <button onClick={on_signup_click}>Sign In</button>
        </div>
    </div>
  )
}
