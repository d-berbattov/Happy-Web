import styled from 'styled-components';

export const Container = styled.div`
  main {
  flex: 1;
}

form.create-orphanage {
  display: flex;
}

form.create-orphanage-form {
  width: 700px;
  margin: 64px auto;

  background: #FFFFFF;
  border: 1px solid #D3E2E5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;
}

form.create-orphanage-form .leaflet-container {
  margin-bottom: 40px;
  border: 1px solid #d3d2d5;
  border-radius: 20px;
}

form.create-orphanage-form fieldset {
  border: 0;
}

form.create-orphanage-form fieldset + fieldset {
  margin-top: 80px;
}

form.create-orphanage-form fieldset legend {
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: #5C8599;
  font-weight: 700;

  border-bottom: 1px solid #D3E2E5;
  margin-bottom: 40px;
  padding-bottom: 24px;
}

form.create-orphanage-form .input-block + .input-block {
  margin-top: 24px;
}

form.create-orphanage-form .input-block label {
  display: flex;
  color: #8FA7B3;
  margin-bottom: 8px;
  line-height: 24px;
}

form.create-orphanage-form .input-block label span {
  font-size: 14px;
  color: #8FA7B3;
  margin-left: 24px;
  line-height: 24px;
}

form.create-orphanage-form .input-block input,
form.create-orphanage-form .input-block textarea {
  width: 100%;
  background: #F5F8FA;
  border: 1px solid #D3E2E5;
  border-radius: 20px;
  outline: none;
  color: #5C8599;
}

form.create-orphanage-form .input-block input {
  height: 64px;
  padding: 0 16px;
}

form.create-orphanage-form .input-block textarea {
  min-height: 120px;
  max-height: 240px;
  resize: vertical;
  padding: 16px;
  line-height: 28px;
}



form.create-orphanage-form .input-block .images-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

}

form.create-orphanage-form .input-block .images-container img {
  width: 100%;
  height: 96px;
  object-fit: cover;
  border-radius: 20px;

}

form.create-orphanage-form .input-block .images-container .new-image {
  height: 96px;
  background: #F5F8FA;
  border: 1px dashed #96D2F0;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

form.create-orphanage-form .input-block input[type=file] {
  display: none;
}

form.create-orphanage-form .input-block .button-select {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

form.create-orphanage-form .input-block .button-select button {
  height: 64px;
  background: #F5F8FA;
  border: 1px solid #D3E2E5;
  color: #5C8599;
  cursor: pointer;
}

form.create-orphanage-form .input-block .button-select button.active {
  background: #EDFFF6;
  border: 1px solid #A1E9C5;
  color: #37C77F;
}

form.create-orphanage-form .input-block .button-select button:first-child {
  border-radius: 20px 0px 0px 20px;
}

form.create-orphanage-form .input-block .button-select button:last-child {
  border-radius: 0 20px 20px 0;
  border-left: 0;
}

form.create-orphanage-form button.confirm-button {
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3CDC8C;
  border-radius: 20px;
  color: #FFFFFF;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;


  transition: background-color 0.2s;
}

form.create-orphanage-form button.confirm-button svg {
  margin-right: 16px;
}

form.create-orphanage-form button.confirm-button:hover {
  background: #36CF82;
}
`
