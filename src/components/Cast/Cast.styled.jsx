import { styled } from 'styled-components';

export const CastWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 39px -10px rgba(0, 0, 0, 0.75);
`;

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const CastItem = styled.li`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffe3e4;
  padding: 10px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover,
  &:focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const ActorName = styled.h3``;
