import styled from "@emotion/styled";

export const ListContainer = styled.div`
  width: 40%;
  height: 140px;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListTitle = styled.h3`
    width: 50%;
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 4px
    font-family: ${(p) => p.font};
`;

export const ListDate = styled.div`
  width: 45%;
`;
export const ListItems = styled.div`
  width: 45%;
`;
