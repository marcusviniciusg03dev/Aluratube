import React from "react";
import { withTheme } from "styled-components";
import Creatable from "react-select/creatable";
import { PlaylistContext } from "../../contexts/PlaylistsContext";
import useForm from "../../hooks/useForm";
import StyledRegisterVideo from "./styles";

const RegisterVideo = (props) => {
  const registerVideoForm = useForm({ title: "", url: "", playlist: "" });
  const [isFormVisible, setIsFormVisible] = React.useState<boolean>(false);
  const { addVideo, playlists } = React.useContext(PlaylistContext);

  const playlistNames = Object.keys(playlists);

  return (
    <StyledRegisterVideo>
      <button id="add-video" onClick={() => setIsFormVisible(true)}>
        +
      </button>
      {isFormVisible && (
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            
            if(Object.entries(registerVideoForm.values).some(([_, val]: [string, string]) => !val.trim())) {
              alert('Todos os campos são obrigatórios.')
              return;
            };

            if(!registerVideoForm.values.url.includes("https://www.youtube.com/watch?v=")) {
              alert('URL inválida.');
              return;
            }
            
            const response = await addVideo({
              ...registerVideoForm.values,
              thumb: `https://img.youtube.com/vi/${new URL(registerVideoForm.values.url).searchParams.get('v')}/hqdefault.jpg`
            });

            registerVideoForm.clearForm();
            setIsFormVisible(false);

            if(!response.isSuccess) {
              alert('O vídeo não pode ser adicionado.')
            }
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
            <Creatable
              placeholder="Playlist"
              name="playlist"
              onChange={({ value }) => registerVideoForm.handleChange({ target: { name: "playlist", value } })}
              options={playlistNames.map(playlistName => ({
                value: playlistName,
                label: playlistName
              }))}
              blurInputOnSelect={false}
              styles={{
                singleValue: ({ color, ...styles }) => ({
                  ...styles,
                  color: props.theme.textColorBase,
                }),
                input: ({ color, ...styles }) => ({
                  ...styles,
                  color: props.theme.textColorBase,
                  fontSize: 14,
                }),
                control: ({ color, ...styles }) => ({
                  ...styles,
                  backgroundColor: props.theme.backgroundBase,
                  border: `1px solid ${props.theme.borderBase}`,
                  borderRadius: 2,
                  fontSize: 14,
                  color: "#fff"
                }),
                dropdownIndicator: styles => ({
                  ...styles,
                  color: props.theme.textColorBase
                }),
                container: styles => ({
                  ...styles,
                  marginBottom: 8
                }),
                menu: styles => ({
                  ...styles,
                  backgroundColor: props.theme.backgroundBase
                }),
                option: (styles, { isSelected, isFocused }) => ({
                  ...styles,
                  backgroundColor: isSelected ? 'rgba(0, 100, 200)' : (isFocused ? 'rgba(0, 100, 200, .2)' : styles.backgroundColor),
                }),
              }}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
};

export default withTheme(RegisterVideo);
