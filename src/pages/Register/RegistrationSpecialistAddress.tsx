import {
  Button,
  Divisor,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Title,
  UploadDescription,
  UploadIcon,
  UploadInput,
  UploadLabel,
  UploadTitle,
} from "../../components";

const RegistrationSpecialistAddress = () => {
  return (
    <>
      <Title className="Title">Para finalizar, só alguns detalhes!</Title>
      <Form>
        <div>
          <UploadTitle>Sua foto</UploadTitle>
          <UploadLabel htmlFor="field-upload">
            <UploadIcon />
            <UploadDescription>Clique para enviar</UploadDescription>
            <UploadInput accept="image/*" id="field-upload" type="file" />
          </UploadLabel>
        </div>

        <Divisor />
        <Fieldset>
          <Label htmlFor="field-cep">CEP</Label>
          <Input id="field-cep" placeholder="Insira seu CEP" type="text" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="field-address">Rua</Label>
          <Input id="field-address" placeholder="Rua Agarikov" type="text" />
        </Fieldset>

        <FormContainer>
          <Fieldset>
            <Label htmlFor="field-number-address">Número</Label>
            <Input id="field-number-address" placeholder="Ex: 1440" type="text" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="field-neighborhood">Bairro</Label>
            <Input id="field-neighborhood" placeholder="Vila Mariana" type="text" />
          </Fieldset>
        </FormContainer>
        <Fieldset>
          <Label htmlFor="field-locality">Localidade</Label>
          <Input
            id="field-locality"
            placeholder="São Paulo, SP"
            type="text"
          />
        </Fieldset>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};

export default RegistrationSpecialistAddress;
