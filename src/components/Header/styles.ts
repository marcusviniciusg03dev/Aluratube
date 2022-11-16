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

export const StyledBanner = styled.div<{ bg?: string }>`
  background-image: ${({ bg }) => bg ? `url(${bg})` : 'linear-gradient(to top, transparent, rga(0, 0, 0, .1)'};
  background-size: 100%;
  width: 100%;
  height: 230px;
`;

export default StyledHeader;