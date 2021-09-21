import styled from "styled-components";

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: 4.65rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 435px;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    background: var(--purple);
    color: var(--white);
    font-size: 1.33rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }
`;