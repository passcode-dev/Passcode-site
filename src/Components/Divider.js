import styled from "styled-components";

export const Divider = styled.hr`
  width: 69px;
  height: 5px;
  border: none; /* Remove a borda padrão */
  border-top: 5px solid transparent; /* Define a espessura da borda superior */
  border-image: linear-gradient(225deg, #F76680 0%, #57007B 100%) 1; /* Aplica o gradiente como borda */
  margin: 0; /* Remove margens extras */
`;