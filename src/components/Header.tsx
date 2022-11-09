import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  margin-top: 56px;
  padding: 16px 32px;

  #user-info {
    display: flex;
    align-items: center;
    gap: 16px;

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

const Header = ({ github, name, job }) => {
  return (
    <StyledHeader>
      {false && (
        <img
          id="banner-image"
          src={
            "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          }
        />
      )}

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
