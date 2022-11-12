import React, { ChangeEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";
import useForm from "../../hooks/useForm";

const StyledRegisterVideo = styled.div`
  #add-video {
    position: fixed;
    bottom: 16px;
    right: 16px;
    height: 50px;
    width: 50px;
    border: 0;
    border-radius: 50%;
    background-color: red;
    font-size: 20px;
    color: #FaFaFa;
    z-index: 99;
    cursor: pointer;
  }

  #close-modal {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    color: ${({ theme }) => theme.textColorBase};
    border: none;
    cursor: pointer;
  }

  button[type="submit"] {
    background-color: red;
    color: #FaFaFa;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  input {
    padding: 8px 10px;
    margin-bottom: 10px;
    border-radius: 2px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.borderBase};
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase}
  }

  form {
    width: 100%;
    padding: 5%;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;

    & > div {
      flex: 1;
      border: 0;
      border-radius: 8px;
      max-width: 320px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      padding: 16px;
      padding-top: 40px;
      position: relative;
      display: flex;
      flex-direction: column;
      z-index: 100;
    }
  }
`;

const RegisterVideo = () => {
  const registerVideoForm = useForm({ title: "", url: "" });
  const [isFormVisible, setIsFormVisible] = React.useState<boolean>(false);

  return (
    <StyledRegisterVideo>
      <button id="add-video" onClick={() => setIsFormVisible(true)}>
        +
      </button>
      {isFormVisible && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            registerVideoForm.clearForm();
          }}
        >
          <div>
            <button id="close-modal" type="button" onClick={() => setIsFormVisible(false)}>
              ✖
            </button>
            <input
              type="text"
              placeholder="Título do video"
              name="title"
              value={registerVideoForm.values.title}
              onChange={registerVideoForm.handleChange}
            />
            <input
              type="text"
              placeholder="URL"
              name="url"
              value={registerVideoForm.values.url}
              onChange={registerVideoForm.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
};

export default RegisterVideo;
