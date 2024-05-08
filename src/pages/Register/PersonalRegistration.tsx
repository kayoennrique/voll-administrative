import {
  Button,
  Label,
  Fieldset,
  Input,
  InputMask,
  Form,
  Title,
  ErrorMessage,
} from "../../components";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaRegistration = z.object({
  name: z.string().min(5, "O nome deve ter ao menos 5 caracteres"),
  email: z.string().min(1, "O campo é obrigatorio").email("O email não é valido"),
  telephone: z.string(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  passwordVerified: z.string().min(1, "Esse campo não pode ser vazio"),
});

type FormInputTypes = z.infer<typeof schemaRegistration>;

const PersonalRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },    
    control,
  } = useForm<FormInputTypes>({
    mode: "all",
    resolver: zodResolver(schemaRegistration),
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      password: "",
      passwordVerified: "",
    },
  });

  const onSubmit = (datas: FormInputTypes) => {
    console.log(datas);
  };

  return (
    <>
      <Title>Insira alguns dados básicos:</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <Label htmlFor="field-name">Nome</Label>
          <Input
            id="field-name"
            placeholder="Digite seu nome completo"
            type="text"
            $error={!!errors.name}
            {...register("name",)}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="field-email">E-mail</Label>
          <Input
            id="field-email"
            placeholder="Insira seu endereço de email"
            type="email"
            $error={!!errors.email}
            {...register("email",)}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Fieldset>
        <Controller
          control={control}
          name="telephone"
          rules={{
            pattern: {
              value: /^\(\d{2,3}\) \d{5}-\d{4}$/,
              message: "O telefone inserido está no formato incorreto",
            },
            required: "O campo telefone é obrigatório",
          }}
          render={({ field }) => (
            <Fieldset>
              <Label>Telefone</Label>
              <InputMask
                mask="(99) 99999-9999"
                placeholder="Ex: (DD) XXXXX-XXXX"
                $error={!!errors.telephone}
                onChange={field.onChange}
              />
              {errors.telephone && (
                <ErrorMessage>{errors.telephone.message}</ErrorMessage>
              )}
            </Fieldset>
          )}
        />

        <Fieldset>
          <Label htmlFor="field-password">Crie uma senha</Label>
          <Input
            id="field-password"
            placeholder="Crie uma senha"
            type="password"
            $error={!!errors.password}
            {...register("password",)} 
            />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="field-password-confirmation">Repita a senha</Label>
          <Input
            id="field-password-confirmation"
            placeholder="Repita a senha anterior"
            type="password"
            $error={!!errors.passwordVerified}
            {...register("passwordVerified", )}
          />
          {errors.passwordVerified && (
            <ErrorMessage>{errors.passwordVerified.message}</ErrorMessage>
          )}
        </Fieldset>
        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default PersonalRegistration;
