import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 40px;
  color: var(--color-1);
  padding: 12px 0;
`;

export const ProgressBar = styled.div<{
  $inversed?: boolean;
}>`
  display: flex;
  flex: 1;
  height: 20px;
  min-width: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
  ${props =>
    props.$inversed
      ? `
      justify-content: flex-end;
    
    &, & ${PureProgress} {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    
    & ${PureProgress} {
      background-color: var(--color-3-dark);
    }
  `
      : `
      &, & ${PureProgress} {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    
      & ${PureProgress} {
        background-color: var(--color-3-light);
      }
  `}
`;

export const PureProgress = styled.div<{
  progress: number;
}>`
  width: ${props => props.progress}%;
  height: 100%;
`;
