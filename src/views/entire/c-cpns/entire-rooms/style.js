import { styled } from "styled-components";


export const EntireWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  margin-top: 80px;

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
  }
`