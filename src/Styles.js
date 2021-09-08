import styled from "styled-components";
import { motion } from "framer-motion";

export const H1 = styled(motion.h1)``;
export const H2 = styled(motion.h2)``;

export const Container = styled(motion.div)`
  padding: 0.5rem;
  display: grid-inline;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 2.2rem;
  grid-auto-flow: dense;
`;

export const CardBox = styled(motion.div)`
  background: #fff;
  height: 140px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%);
  background-position: center;
  background-size: cover;
`;

export const IconBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -25px;
  color: black;
`;

export const AddRemove = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  background: transparent;
  width: 100%;
  font-size: 90%;
  margin: 0;
  border-bottom: 1px black solid;
  box-sizing: border-box;
`;

export const Buttonn = styled.button`
  background: transparent;
  border: 0px solid;
  color: black;
  &:hover {
    outline: none;
    color: gray;
  }
`;
export const Flex = styled.div`
  display: flex;
  background: white;
  margin-right: 8%;
  padding: 1%;
  border-radius: 10px;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  
`;

export const SearchButton = styled.button`
  background: transparent;
  border: 1px solid #1d398d;
  color: #1d398d;
  &:hover {
    outline: none;
    color: white;
    background-color: #1d398d;
  }
`;