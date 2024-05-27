import { useFieldArray, useForm } from "react-hook-form";
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
  crm: z.string().min(1, "O field não pode ser vazio"),
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
  const { register, handleSubmit, control } = useForm<FormSpecialist>();

  const whenSubmit = (dados: FormSpecialist) => {
    console.log(dados);
  };

  const { fields, append } = useFieldArray({
    control,
    name: "specialties",
  });

  const addNewSpecialty = () => {
    append({
      specialty: '',
      yearConclusion: 0,
      institution: ''
    })
  }

  return (
    <>
      <Title className="title">Agora, seus dados técnicos:</Title>
      <Form onSubmit={handleSubmit(whenSubmit)}>
        <Fieldset>
          <Label>CRM</Label>
          <Input
            id="field-crm"
            type="text"
            placeholder="Insira seu número de registro"
            {...register("crm")}
          />
        </Fieldset>
        <Divisor />
        {fields.map((field, index) => (
          <div key={field.id}>
            <Fieldset>
              <Label>Especialidade</Label>
              <Input
                id="field-specialty"
                type="text"
                placeholder="Qual sua especialidade?"
                {...register(`specialties.${index}.specialty`)}
              />
            </Fieldset>

            <FormContainer>
              <Fieldset>
                <Label>Ano de conclusão</Label>
                <Input
                  id="field-year-completion"
                  type="text"
                  placeholder="2005"
                  {...register(`specialties.${index}.yearConclusion`)}
                />
              </Fieldset>
              <Fieldset>
                <Label>Instituição de ensino</Label>
                <Input
                  id="field-institution-teaching"
                  type="text"
                  placeholder="USP"
                  {...register(`specialties.${index}.institution`)}
                />
              </Fieldset>
            </FormContainer>
            <Divisor />
          </div>
        ))}
        <ButtonContainer>
          <Button
            type="button"
            onClick={addNewSpecialty}
            $variant="secondary"
            >
            Adicionar Especialidade
          </Button>
        </ButtonContainer>
        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default RegistrationSpecialistTechnician;