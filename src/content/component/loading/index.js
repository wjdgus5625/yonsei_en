import React from 'react';

import styled from "styled-components";

const Loading = (props) => {

    return (
        <Root visible={props.visible}>
            <ModalWrapper>
                <ModalInner>
                    <LoadingBar/>
                </ModalInner>
            </ModalWrapper>
        </Root>
    )
}

const Root = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalInner = styled.div`
  text-align: center;
  box-sizing: border-box;
  position: relative;
  border-radius: 10px;
  width: 10%;
  height: 10%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const LoadingBar = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 3px solid rgba(255,255,255);
  border-radius: 50%;
  border-top-color: black;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default Loading;