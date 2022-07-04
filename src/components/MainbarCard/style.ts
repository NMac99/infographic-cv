import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  background: linear-gradient(var(--color-1), var(--color-1-dark-10));
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: unset;
  }
`;

export const CardHeader = styled.div`
  display: inline-block;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 2px solid var(--color-2);
  padding-left: 20px;
  padding-right: 10%;
  margin-bottom: 10px;
  color: var(--color-2);
`;
