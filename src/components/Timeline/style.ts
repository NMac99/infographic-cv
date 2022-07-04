import styled from 'styled-components';

export const Container = styled.div``;

export const TimelineSnippetStamp = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  margin-left: -13px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  [data-last] .color-rect {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 30%;
      background-color: inherit;
      z-index: 3;
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 30%;
      background: rgba(255, 255, 255, 0.2);
      z-index: 4;
    }
  }

  [data-continuing]:not([data-last]) .color-rect {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 1px;
      bottom: var(--element-bottom-offset);
      height: 6px;
      width: 1000%;
      background-color: inherit;
      z-index: 2;
    }
  }

  [data-first] ${TimelineSnippetStamp} {
    margin-left: unset !important;
  }
`;

export const SnippetTitle = styled.div`
  text-transform: uppercase;
  color: var(--color-5);
  font-weight: bold;
  line-height: 12px;
`;

export const SnippetDescription = styled.span<{ color: string }>`
  line-height: 12px;
  display: inline-block;
  position: relative;
  font-weight: bold;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -41px;
    width: 1px;
    height: 35px;
    background-color: ${props => props.color};
  }
`;

export const SnippetData = styled.div`
  margin: 0 20px 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TimestampVacancy = styled.div<{ color: string; opacity: number }>`
  position: relative;
  padding-left: 24px;
  padding-bottom: 10px;
  padding-right: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    background-color: ${props => props.color};
    opacity: ${props => props.opacity};
    filter: grayscale(1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 10px;
    width: 8px;
    height: 1px;
    background-color: ${props => props.color};
    opacity: ${props => props.opacity};
    filter: grayscale(1);
  }
`;
