import styled from "styled-components";

const QaBox = styled.div`
  overflow-y: auto;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaaaaa;
    border-radius: 100px;
  }
`

export default QaBox;

