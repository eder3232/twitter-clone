import React from 'react'
import Link from 'next/link'

import { BiHomeCircle } from 'react-icons/bi'
import { GoBell } from 'react-icons/go'
import {
  FaMagnifyingGlass,
  FaRegBookmark,
  FaRegEnvelope,
  FaRegFileLines,
} from 'react-icons/fa6'
import { BsPatchCheck, BsTwitter, BsPerson, BsThreeDots } from 'react-icons/bs'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'

const navitagionItems = [
  {
    title: 'Inicio',
    icon: BiHomeCircle,
  },
  {
    title: 'Explorar',
    icon: FaMagnifyingGlass,
  },
  {
    title: 'Notificaciones',
    icon: GoBell,
  },
  {
    title: 'Mensajes',
    icon: FaRegEnvelope,
  },
  {
    title: 'Listas',
    icon: FaRegFileLines,
  },
  {
    title: 'Guardados',
    icon: FaRegBookmark,
  },
  {
    title: 'Verificado',
    icon: BsPatchCheck,
  },
  {
    title: 'Perfil',
    icon: BsPerson,
  },
  {
    title: 'Más opciones',
    icon: HiOutlineDotsCircleHorizontal,
  },
]

const LeftSidebar = () => {
  return (
    <section className="w-64 flex-col h-screen px-4 justify-between hidden lg:flex">
      <div className="w-full flex flex-col gap-y-4 my-4">
        <Link href="/" className="my-2 p-4 text-2xl">
          <BsTwitter className="text-4xl text-primary" />
        </Link>
        {navitagionItems.map((item) => (
          <Link
            key={item.title}
            href={`/${item.title.toLowerCase()}`}
            className="rounded-3xl flex items-center justify-start w-fit space-x-2 text-xl"
          >
            <div>
              <item.icon />
            </div>
            <div>{item.title}</div>
          </Link>
        ))}
        <button className="btn btn-primary rounded-full">Twittear</button>
      </div>
      <button className="btn btn-neutral rounded-full mb-4 h-16 flex items-center">
        <div className="flex justify-between w-full h-full items-center">
          <div className="bg-slate-100 rounded-full w-8 h-8 flex justify-center items-center">
            E
          </div>
          <div className="flex flex-col items-start gap-y-1">
            <div className="text-primary-content font-bold">eder</div>
            <div className="text-sm text-neutral-content">@eder_3232</div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
      </button>
    </section>
  )
}

export default LeftSidebar
