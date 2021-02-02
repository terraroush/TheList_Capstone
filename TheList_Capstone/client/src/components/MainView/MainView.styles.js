import styled from "@emotion/styled";

export const MainViewContainer = styled.div`
  background: rgba(241, 241, 239, 1);
  width: ${(p) => (!p.isLoggedIn ? "100%" : "80%")};
  padding: 100px;
  text-align: center;

  h1 {
    font-size: 2rem;
  }
`;
