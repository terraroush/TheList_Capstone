import styled from "@emotion/styled";

export const MainViewContainer = styled.div`
display: flex;
  background: rgba(241, 241, 239, 1);
  width: ${(p) => (!p.isLoggedIn ? "100%" : "80%")};
  padding: 100px;
  // text-align: center;
  justify-content: center;
  overflow: auto;
  max-height: 90vh;

  h1 {
    font-size: 2rem;
  }
  h2, h3, h4 {
    text-align: center;
  }

  //remove scrollbar, but not the functionality
  &::-webkit-scrollbar {
    display: none;

  }

  & -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
