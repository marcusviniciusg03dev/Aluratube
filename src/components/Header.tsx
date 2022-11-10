import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundLevel1};

  #user-info {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 32px;
    color: ${({ theme }) => theme.textColorBase};

    img {
      height: 80px;
      width: 80px;
      border: 0;
      border-radius: 50%;
    }

    p {
      color: #666666;
    }
  }
`;

const StyledBanner = styled.div<{ bg?: string }>`
  background-image: ${({ bg }) => bg ? `url(${bg})` : 'linear-gradient(to top, transparent, rga(0, 0, 0, .1)'};
  background-position: 50%;
  width: 100%;
  height: 230px;
`;

const Header = ({ github, name, job, bg }) => {
  return (
    <StyledHeader>
      <StyledBanner bg={bg} />
      <div id="user-info">
        <img id="profile-image" src={`https://github.com/${github}.png`} />
        <div>
          <h2>{name}</h2>
          <p>{job}</p>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
