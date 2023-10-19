import { AiOutlinePlus } from 'react-icons/ai'
import { TbPlaylist } from 'react-icons/tb'

export default function Library() {
  return (
    <div className="flex flex-col">
      <div 
        className="
        flex items-center justify-between px-5 pt-4
        "
      >
        <div
          className="
          inline-flex items-center gap-x-2
          "
        >
          <TbPlaylist className="text-neutral-400" size={20} />
          <p
            className="
            text-neutral-400
            font-medium
            text-md
            "
          >Your library</p>
        </div>
        <AiOutlinePlus
          /* onClick={onClick} */
          size={20}
          className="
            cursor-pointer
            text-neutral-400
            hover:text-white
            transition
            "
        />
      </div>
    </div>
  )
}
