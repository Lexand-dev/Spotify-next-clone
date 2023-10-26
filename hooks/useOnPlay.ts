import { Song } from "@/types";

import useAuthModal from "./useAuthModal";
import usePlayer from "./usePlayer";
import useSubscribeModal from "./useSubscribeModal";
import { useUser } from "./useUsers";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const subscribeModal = useSubscribeModal();
  const authModal = useAuthModal();
  const { subscription, user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    /* if (!subscription) {
      return subscribeModal.onOpen() ;
    } */
    //TODO: remove comment above and uncomment below

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  }

  return onPlay;
};

export default useOnPlay;