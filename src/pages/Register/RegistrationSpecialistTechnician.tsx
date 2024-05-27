import { useFieldArray, useForm } from "react-hook-form";
import {
  Button,
  ButtonContainer,
  Divisor,
  ErrorMessage,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Title,
} from "../../components";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const { register, handleSubmit, formState: { errors }, control } = useForm<FormSpecialist>({
    resolver: zodResolver(schemaRegistrationSpecialist),
    mode: "all",
    defaultValues: {
      crm: ""
    },
  });

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
            $error={!!errors.crm}
            {...register("crm")}
          />
          {errors.crm &&
            <ErrorMessage>
              {errors.crm.message}
            </ErrorMessage>
          }
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
                $error={!!errors.specialties?.[index]?.specialty}
                {...register(`specialties.${index}.specialty`)}
              />
              {errors.specialties?.[index]?.specialty && (
                <ErrorMessage>
                  {errors.specialties?.[index]?.specialty?.message}
                </ErrorMessage>
              )}
            </Fieldset>

            <FormContainer>
              <Fieldset>
                <Label>Ano de conclusão</Label>
                <Input
                  id="field-year-completion"
                  type="text"
                  placeholder="2005"
                  $error={!!errors.specialties?.[index]?.yearConclusion}
                  {...register(`specialties.${index}.yearConclusion`)}
                />
                {errors.specialties?.[index]?.yearConclusion && (
                  <ErrorMessage>
                    {errors.specialties?.[index]?.yearConclusion?.message}
                  </ErrorMessage>
                )}
              </Fieldset>
              <Fieldset>
                <Label>Instituição de ensino</Label>
                <Input
                  id="field-institution-teaching"
                  type="text"
                  placeholder="USP"
                  $error={!!errors.specialties?.[index]?.institution}
                  {...register(`specialties.${index}.institution`)}
                />
                {errors.specialties?.[index]?.institution && (
                <ErrorMessage>
                  {errors.specialties?.[index]?.institution?.message}
                </ErrorMessage>
              )}
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