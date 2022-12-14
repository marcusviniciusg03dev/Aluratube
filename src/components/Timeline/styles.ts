import styled from "styled-components";

const StyledTimeline = styled.div`
    width: 100%;
    flex: 1;
    overflow: hidden;
    padding: 16px;
    background-color: ${({ theme }) => theme.backgroundBase};

    section {
        width: 100%;
        padding: 16px;
        overflow: hidden;
        
        h2 {
          font-size: 16px;
          margin-bottom: 16px;
          text-transform: capitalize;
        }

        div {
            display: flex;
            display: grid;
            grid-gap: 16px;
            width: calc(100vw - 16px * 4);
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-auto-flow: column;
            grid-auto-columns: minmax(200px, 1fr);
            overflow-x: scroll;
            scroll-snap-type: mandatory;

            &:hover::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, .5);
                border-radius: 8px;
                transition: all .3s;
            }

            img {
              height: auto;
              aspect-ratio: 16/9;
              font-weight: 500;
              object-fit: cover;
              width: 100%;
            }

            a {
              span{
                color: ${({ theme }) => theme.textColorBase};
                padding-top: 8px;
                padding-bottom: 8px;
                display: block;
                padding-right: 24px;
              }
            }
        }
    }

    section[id="favorites-section"] {

        div {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            grid-auto-columns: minmax(120px, 1fr);
        }

        img {
            aspect-ratio: 1/1;
            border-radius: 50%;
        }
    }
`;

export default StyledTimeline