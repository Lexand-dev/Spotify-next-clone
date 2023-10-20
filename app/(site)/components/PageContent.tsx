"use client";

import SongItem from "@/components/SongItem";
import { Song } from "@/types";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({
  songs
}) => {
  if (songs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-white text-2xl font-semibold">
          No songs found
        </h1>
        <p className="text-neutral-500 text-sm mt-2">
          You have not uploaded any songs yet.
        </p>
      </div>
    )
  }
  return ( 
  <div
    className="
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-8
    gap-4
    mt-4
    "
  >
    {songs.map((song) => (
      <SongItem
        key={song.id}
        onClick={() => {}}
        data={song}
      />
    ))}
  </div> );
}

export default PageContent;