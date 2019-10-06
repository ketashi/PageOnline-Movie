import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Autor from "./Autor"

const Container = styled.div`
    display:flex;
    overflow:scroll;
`;
export default ({ cast }) => {
  return (
    <div>
      <Title>Reparto:</Title>
      <Container>
        {cast.map(author => <Autor key={author.id} autor={author}/>)}
      </Container>
    </div>
  );
};
