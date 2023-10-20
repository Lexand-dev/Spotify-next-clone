import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return ( 
    <div 
        className="
          transition 
          opacity-0 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-green-500 
          p-4 
          drop-shadow-md
          traslate
          translate-y-1/2
          group-hover:opacity-100
          group-hover:translate-y-0 
          hover:scale-110
        "
      >
        <FaPlay className="text-black" />
      </div>
   );
}
 
export default PlayButton;