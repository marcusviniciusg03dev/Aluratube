import { createClient } from "@supabase/supabase-js";
import React from "react";

interface VideoInterface {
    created_at: string
    id: number
    playlist: string
    thumb: string
    title: string
    url: string
}

interface VideoPayloadInterface {
    playlist: string
    thumb: string
    title: string
    url: string
}

interface IPlaylistContext {
    playlists: { [playlist: string]: VideoInterface[] }
    addVideo: (payload: VideoPayloadInterface) => Promise<{ isSuccess: boolean }>
}

export const PlaylistContext = React.createContext<IPlaylistContext>({} as IPlaylistContext);

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

export default function PlaylistProvider({ children }) {
    const [playlists, setPlaylists] = React.useState({});

    const updatePlaylists = ({ new: newVideo }) => {
        const playlistsCopy = {...playlists};
        if (!playlistsCopy[newVideo.playlist]) playlistsCopy[newVideo.playlist] = [];
        playlistsCopy[newVideo.playlist].push(newVideo);
        setPlaylists(playlistsCopy);
    }

    const getVideos = async () => {
        return await supabase.from("videos").select("*");
    }

    async function addVideo(data: { title: string, url: string, playlist: string, thumb: string }) {
        const { error } = await supabase
          .from('videos')
          .insert(data);

        return { isSuccess: !error }
    }

    React.useEffect(() => {
        getVideos()
            .then(({ data: videos }) => {
                let newPlaylists = {};
                videos.forEach(video => {
                    if (!newPlaylists[video.playlist]) newPlaylists[video.playlist] = [];
                    if (newPlaylists[video.playlist].some(item => item.id == video.id)) return;
                    newPlaylists[video.playlist]?.push(video);
                });
                setPlaylists(newPlaylists);
            });
    }, []);

    supabase
        .from('videos')
        .on('INSERT', updatePlaylists)
        .subscribe();

    return (
        <PlaylistContext.Provider value={{ addVideo, playlists }}>
            {children}
        </PlaylistContext.Provider>
    )
}