import styled, { css } from "styled-components";

const Pagination = ({ nowPage, total, onChange }) => {
  const display = 10;
  const last = Math.ceil(total / display);

  const btnLength = 5;
  const start = Math.ceil(nowPage / btnLength) * btnLength - (btnLength - 1);
  const end = start + btnLength - 1 > last ? last : start + btnLength - 1;

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <Container>
      {nowPage > 1 && (
        <BtnPage onClick={() => onChange(nowPage - 1)}>{"<"}</BtnPage>
      )}
      {pages.map((page) => (
        <BtnPage
          key={page}
          onClick={() => onChange(page)}
          active={page === nowPage}
        >
          {page}
        </BtnPage>
      ))}
      {nowPage < last && (
        <BtnPage onClick={() => onChange(nowPage + 1)}>{">"}</BtnPage>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const BtnPage = styled.button`
  border: none;
  background: #ecf1ff;
  color: #3f6bcc;
  width: 30px;
  height: 25px;
  border-radius: 5px;

  & + & {
    margin-left: 5px;
  }
  ${({ active }) =>
    active &&
    css`
      background: #3f6bcc;
      color: #fff;
    `}
`;

export default Pagination;
