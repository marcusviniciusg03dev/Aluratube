import styled from "styled-components";

const StyledTimeline = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    padding: 32px;

    section {
        
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
              color: #222;
            }
        }
    }
`;

const Timeline = (props) => {
    const playlistNames = Object.keys(props.playlists);
  
    return (
      <StyledTimeline>
        {playlistNames.map((playlistName) => {
          const videos = props.playlists[playlistName];
  
          return (
            <section>
              <h2>{playlistName}</h2>
              <div>
                {videos.map((video) => {
                  return (
                    <a href={video.url}>
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