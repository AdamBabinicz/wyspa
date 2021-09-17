import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  min-height: 100vh;
  display: grid;
  place-items: center;
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  color: #333;
  z-index: 9999;
`;

export const PopupInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100%;
  max-height: 100%;
  max-width: 640px;
  background: #fff;
  font-family: "Tahoma", sans-serif;

  img {
    max-width: 200px;
    margin: 5px 0;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.4rem;
    width: 100%;
    max-width: 380px;

    img {
      max-width: 50%;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: -30px !important;
  right: 6px;
  cursor: pointer;
  border: none;
  font-size: 2rem;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;

  @media screen and (max-width: 480px) {
    top: 4px;
    right: 4px;
  }
`;
