import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancle, onPublish }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton cyan onClick={onPublish}>
        ポスト登録
      </StyledButton>
      <StyledButton onClick={onCancle}>キャンセル</StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButtons;
