import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem 1rem;
  display: flex;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    max-width: 100%;
  }

  .content {
    margin-top: 4.65rem;
    margin-right: 50px;
    width: 385px;

    h1 {
      font-size: 1.5rem;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid var(--gray);
    }

    .sell-by {
      margin-bottom: 3rem;
    }

    .product-info {

      ul {
        display: flex;
        align-items: center;
        list-style: none;
        margin-bottom: 2rem;
        border-bottom: 1px solid var(--gray-light);

        li {
          margin: 0 1.5rem;
          padding: 1rem 0;
          text-transform: uppercase;
          font-weight: 300;

          &:first-child {
            margin-left: 0;
          }
          
          &.active {
            font-weight: 700;
            margin-bottom: -2px;
            border-bottom: 3px solid var(--black);
          }
        }
      }

      div {
        font-weight: 300;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid var(--gray-light);
      }
    }

    .shipping {
      h4 {
        margin-bottom: 2rem;
      }

      form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;

        input {
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--black);
          line-height: 3rem;
          width: 250px;
        }
  
        button {
          background: var(--black);
          color: var(--white);
          padding: 1rem 3rem;
          text-transform: uppercase;
          font-weight: 300;
          border: 0;
          border-radius: 2rem;
        }
      }

      a {
        color: var(--black);
      }
    }
  }
`;