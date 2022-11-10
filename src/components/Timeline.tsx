import styled from "styled-components";

const StyledTimeline = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    padding: 32px;
    background-color: ${({ theme }) => theme.backgroundBase};

    section {
        color: ${({ theme }) => theme.textColorBase};
        
        h2 {
            padding: 16px 0;
        }

        div {
            display: flex;
            gap: 8px;

            img {
                height: 150px;
            }

            a {
              color: ${({ theme }) => theme.textColorBase};
            }
        }
    }
`;

const Timeline = ({ searchValue, playlists, ...props }) => {
    const playlistNames = Object.keys(playlists);
  
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
                }).map((video) => {
                  return (
                    <a href={video.url} key={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </StyledTimeline>
    );
  }

export default Timeline