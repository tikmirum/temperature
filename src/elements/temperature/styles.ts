import styled from 'styled-components';
import Cold from 'assets/cold.jpg';
import Hot from 'assets/hot.jpeg';

export const All = styled('div')`
  display: flex;
  background: slategray;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 50vh;
`;

export const Display = styled('div')<{ $isHot: boolean }>`
  display: flex;
  border-radius: 50%;
  color: white;
  transition: background 0.5s;
  background: url(${({ $isHot }) => ($isHot ? Hot : Cold)});
  height: 220px;
  width: 220px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  font-size: 48px;
  border: 3px solid black;
`;

export const Row = styled('div')`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
export const Button = styled('button')`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  font-size: 32px;
  color: black;
  border: 2px solid aliceblue;
`;
