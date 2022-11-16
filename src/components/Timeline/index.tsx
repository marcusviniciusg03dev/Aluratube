import React from "react";
import { PlaylistContext } from "../../contexts/PlaylistsContext";
import StyledTimeline from "./styles";

const Favorite = ({ githubUsername }) => {
  const [favorite, setFavorite] = React.useState(undefined);

  const fetchGithubUser = async username => {
    const response = await fetch(`https://api.github.com/users/${githubUsername}`);

    const githubData = await response.json();

    setFavorite({
      username: githubUsername,
      avatar_url: githubData.avatar_url
    });
  };

  React.useEffect(() => {
    fetchGithubUser(githubUsername);
  }, []);

  if (!favorite) return;

  return (
    <a href={`https://github.com/${githubUsername}`}>
      <img src={favorite.avatar_url} />
      <span>@{favorite.username}</span>
    </a>
  )
}

const Timeline = ({ searchValue, favorites }) => {
    const { playlists } = React.useContext(PlaylistContext);
    const playlistNames = Object.keys(playlists);
    const favoriteNames = Object.keys(favorites);
  
    return (
      <StyledTimeline>
        {playlistNames.map((playlistName) => {
          const videos = playlists[playlistName];
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {videos.filter(video => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                }).map(video => (
                    <a href={video.url} key={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  ))}
              </div>
            </section>
          );
        })}
        <section id="favorites-section">
          <h2>Aluratubes favoritos</h2>
          <div>
            {favoriteNames.map(favorite => {
              return (
                <Favorite
                  githubUsername={favorites[favorite].username}
                  key={favorite}
                />
              )
            })}
          </div>
        </section>
      </StyledTimeline>
    );
  }

export default Timeline