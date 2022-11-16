import StyledHeader, { StyledBanner } from "./styles";

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
