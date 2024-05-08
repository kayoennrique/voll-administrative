import {
  Button,
  ButtonContainer,
  Divisor,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Title,
} from "../../components";

const RegistrationSpecialistTechnician = () => {
  return (
    <>
      <Title className="Title">Agora, seus dados técnicos:</Title>
      <Form>
        <Fieldset>
          <Label>CRM</Label>
          <Input
            id="field-crm"
            type="text"
            placeholder="Insira seu número de registro"
          />
        </Fieldset>
        <Divisor />
        <Fieldset>
          <Label>Especialidade</Label>
          <Input
            id="field-specialty"
            type="text"
            placeholder="Qual sua especialidade?"
          />
        </Fieldset>

        <FormContainer>
          <Fieldset>
            <Label>Ano de conclusão</Label>
            <Input id="field-year-completion" type="text" placeholder="2005" />
          </Fieldset>
          <Fieldset>
            <Label>Instituição de ensino</Label>
            <Input
              id="field-institution-teaching"
              type="text"
              placeholder="USP"
            />
          </Fieldset>
        </FormContainer>
        <Divisor />
        <ButtonContainer>
          <Button type="button" $variant="secondary">
            Adicionar Especialidade
          </Button>
        </ButtonContainer>
        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default RegistrationSpecialistTechnician;
