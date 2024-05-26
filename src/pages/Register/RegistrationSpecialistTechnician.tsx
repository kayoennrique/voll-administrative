import { useForm } from "react-hook-form";
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
import { z } from "zod";

const schemaRegistrationSpecialist = z.object({
  crm: z.string().min(1, "O campo não pode ser vazio"),
  specialties: z.array(
    z.object({
      specialty: z.string().min(1, "Preencha a sua especialidade"),
      yearConclusion: z.number().min(1, "Preencha a seu ano de conclusão"),
      institution: z.string().min(1, "Preencha a sua instituição de ensino"),
    })
  ),
});

type FormSpecialist = z.infer<typeof schemaRegistrationSpecialist>;

const RegistrationSpecialistTechnician = () => {
  const { register, handleSubmit } = useForm<FormSpecialist>();

  const whenSubmit = (dados: FormSpecialist) => {
    console.log(dados);
  };

  return (
    <>
      <Title className="Title">Agora, seus dados técnicos:</Title>
      <Form onSubmit={handleSubmit(whenSubmit)}>
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
            {...register("crm")}
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
