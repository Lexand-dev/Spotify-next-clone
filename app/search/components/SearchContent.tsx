"use client";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";
import React from "react";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({
  songs
}) => {

  if (songs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-semibold text-white">
          No songs found
        </h1>
        <p className="text-white text-opacity-50">
          Try searching for something else
        </p>
      </div>
    )
  }

  return ( 
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id}
          className="flex items-center gap-x-4 w-full"
        >
          <div className="flex-1">
            <MediaItem
              onClick={() => {}}
              data={song}
            />
          </div>
          {/* TODO: add Like Button Here */}
        </div>
      ))}
    </div>
  );
}

export default SearchContent;