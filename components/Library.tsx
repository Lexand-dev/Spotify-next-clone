import { AiOutlinePlus } from 'react-icons/ai'
import { TbPlaylist } from 'react-icons/tb'

import useAuthModal from '@/hooks/useAuthModal'
import useUploadModal from '@/hooks/useUploadModal'
import { useUser } from '@/hooks/useUsers'
import { Song } from '@/types'
import MediaItem from './MediaItem'

interface LibraryProps {
  songs : Song[] 
  }

const Library: React.FC<LibraryProps> = ({
  songs
}) => {
  
  const uploadModal = useUploadModal()
  const authModal = useAuthModal()
  const { user } = useUser()

  const onClick = () => {
    if (!user) {
      return authModal.onOpen()
    }
    return uploadModal.onOpen()
  }

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
          onClick={onClick}
          size={20}
          className="
            cursor-pointer
            text-neutral-400
            hover:text-white
            transition
            "
        />
      </div>
      <div
        className="
          flex
          flex-col
          gap-y-2
          mt-4
          px-3
        "
      >
        {songs.map((item) => (
              <MediaItem
                key={item.id}
                onClick={() => {}}
                data={item}
              />
          ))
        }
      </div>
    </div>
  )
}

export default Library
