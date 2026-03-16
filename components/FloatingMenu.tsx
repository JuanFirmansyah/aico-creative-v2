"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import { Menu, X } from "lucide-react"

gsap.registerPlugin(Draggable)

interface NavItem {
  name: string
  link: string
  icon: React.ElementType
}

interface SocialItem {
  name: string
  link: string
  icon: React.ElementType
}

interface FloatingMenuProps {
  navMenu: NavItem[]
  socialMenu: SocialItem[]
}

export default function FloatingMenu({ navMenu, socialMenu }: FloatingMenuProps){

const orbRef = useRef<HTMLDivElement>(null)
const menuRef = useRef<HTMLDivElement>(null)

const [open,setOpen] = useState(false)

useEffect(()=>{

if(!orbRef.current || !menuRef.current) return

const orb = orbRef.current
const menu = menuRef.current

let dragMoved = false

function updateMenuPosition(){

const rect = orb.getBoundingClientRect()

gsap.set(menu,{
left: rect.left + rect.width/2,
top: rect.top + rect.height/2
})

}

Draggable.create(orb,{

type:"x,y",

bounds:{
minX:10,
minY:10,
maxX:window.innerWidth - 80,
maxY:window.innerHeight - 80
},

edgeResistance:0.9,

onPress(){
dragMoved=false
},

onDrag(){
dragMoved=true
updateMenuPosition()
},

onRelease(){
updateMenuPosition()
}

})

updateMenuPosition()

orb.addEventListener("click",()=>{

if(dragMoved) return

setOpen(v=>!v)

})

},[])

useEffect(()=>{

if(!menuRef.current) return

if(open){

gsap.to(menuRef.current,{
scale:1,
opacity:1,
duration:0.35,
ease:"power3.out"
})

}else{

gsap.to(menuRef.current,{
scale:0,
opacity:0,
duration:0.25
})

}

},[open])

const items = [...navMenu,...socialMenu]

return(

<div className="md:hidden">

{/* ORB */}

<div
ref={orbRef}
className="fixed bottom-10 right-10 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center z-50 shadow-2xl cursor-grab active:cursor-grabbing"
>

<div className="relative w-6 h-6">

<Menu
className={`absolute transition-all duration-300 ${open?"opacity-0 rotate-90":"opacity-100 rotate-0"}`}
/>

<X
className={`absolute transition-all duration-300 ${open?"opacity-100 rotate-0":"opacity-0 -rotate-90"}`}
/>

</div>

</div>

{/* RADIAL MENU */}

<div
ref={menuRef}
className="fixed z-40"
style={{
transform:"translate(-50%,-50%) scale(0)",
opacity:0
}}
>

{items.map((item,i)=>{

const radius = 110
const angle = (i/items.length) * Math.PI * 2

const x = Math.cos(angle) * radius
const y = Math.sin(angle) * radius

const Icon = item.icon

return(

<a
key={item.name}
href={item.link}
style={{transform:`translate(${x}px,${y}px)`}}
className="absolute w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-all duration-200 hover:scale-110 shadow-lg"
>

<Icon size={20}/>

</a>

)

})}

</div>

</div>

)

}