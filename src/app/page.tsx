import LeftSidebar from '../components/LeftSidebar'

import { BsImage } from 'react-icons/bs'
import { AiFillHeart, AiOutlineFileGif, AiOutlineRetweet } from 'react-icons/ai'
import { RiSurveyLine } from 'react-icons/ri'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { LuCalendarClock, LuFileBarChart2 } from 'react-icons/lu'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegComment } from 'react-icons/fa'
import { BiUpload } from 'react-icons/bi'

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center relative ">
      <div className="max-w-screen-xl w-full flex relative justify-between">
        <LeftSidebar />
        <main className="flex flex-col w-[600px] border-x border-neutral divide-y divide-neutral flex-none">
          {/* encabezado */}
          <div>
            <p className="font-bold text-3xl py-4 px-4">Inicio</p>
            <div className="flex w-full">
              <button className="btn btn-ghost rounded-none flex-1">
                Para ti
              </button>
              <button className="btn btn-ghost rounded-none flex-1">
                Siguiendo
              </button>
            </div>

            <div className="px-4 py-4 flex gap-x-4 justify-between">
              <div className="flex items-start gap-x-2">
                <div className="bg-slate-200 rounded-full w-12 h-12 flex justify-center items-center text-2xl">
                  E
                </div>
              </div>
              <div className="flex flex-col justify-around gap-y-2 py-2 flex-1">
                <textarea
                  className="textarea text-2xl w-full inline-block resize-y"
                  placeholder="¡¿Qué está pasando?!"
                ></textarea>
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <button className="text-primary text-2xl font-bold">
                      <BsImage />
                    </button>
                    <button className="text-primary text-2xl font-bold">
                      <AiOutlineFileGif />
                    </button>
                    <button className="text-primary text-2xl font-bold">
                      <RiSurveyLine />
                    </button>
                    <button className="text-primary text-2xl font-bold">
                      <RiEmotionHappyLine />
                    </button>
                    <button className="text-primary text-2xl font-bold">
                      <LuCalendarClock />
                    </button>
                    <button className="text-primary text-2xl font-bold">
                      <CiLocationOn />
                    </button>
                  </div>
                  <button className="btn btn-primary rounded-full btn-sm">
                    Twittear
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 flex gap-x-4">
            <div className="bg-slate-200 rounded-full w-12 h-12 flex justify-center items-center text-2xl">
              E
            </div>
            <div className="flex flex-col w-full">
              <div className="flex gap-x-2">
                <span className="text-primary-content font-bold">
                  Elon musk
                </span>
                <span>@elonmusk</span>
                <span>·</span>
                <span>22h</span>
              </div>
              <div className="text-primary-content">
                Practicing martial arts with my sparring partner
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-x-2">
                  <FaRegComment />
                  <span>3.591</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <AiOutlineRetweet />
                  <span>8.254</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <AiFillHeart />
                  <span>73 mil</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <LuFileBarChart2 />
                  <span>16.3 M</span>
                </div>
                <div className="flex items-center gap-x-2 text-2xl">
                  <BiUpload />
                  {/* <span>16.3 M</span> */}
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className="w-64 hidden lg:flex">right section</section>
      </div>
    </div>
  )
}
