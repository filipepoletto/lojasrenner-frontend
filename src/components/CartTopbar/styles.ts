import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .cart-topbar-open {
    background: transparent;
    border: 0;

    img {
      width: 36px;
      height: 33px;
    }
  }

  .checkout {
    background: var(--red);
    color: var(--white);
    width: 100%;
    padding: 1rem;
    text-transform: uppercase;
    font-size: 1.16rem;
    font-weight: 700;
    border: 0;
    border-radius: 2rem;
  }
`;

export const CartTopbarOverview = styled.div`
  background: #f7f7f7;
  position: absolute;
  top: 4rem;
  right: 0;
  width: 24rem;
  padding: 2rem 1.33rem;
  border-radius: 0.5rem;
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2));

  transition: visibility 0.5s, opacity 0.5s;

  h2 {
    font-size: 1.33rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const CartTopbarOverviewItems = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  h4 {
    font-size: 1.16rem;
    font-weight: 700;
    text-transform: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 130px;
  }

  span {
    display: block;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  select {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--gray-light);

    & + select {
      margin-left: 0.5rem;
    }
  }
  `;

export const CartRemoveItem = styled.button`
  background: transparent;
  position: absolute;
  top: -1rem;
  right: 0;
  width: 2.66rem;
  height: 2.66rem;
  border: 0;
  border-radius: 100%;
`;

export const CartTopbarOverviewTotal = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  .shipping {

    span {
      color: var(--green);
    }
  }

  .total {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
