import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -8rem;
  
  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong{
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
      display: block;
    }

    &.highlight-background{
      background: var(--green);
      color: #fff;
    }
  }
`;