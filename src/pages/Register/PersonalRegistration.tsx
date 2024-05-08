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
import { useEffect } from "react";

interface FormInputTypes {
  name: string;
  email: string;
  telephone: string;
  password: string;
  passwordVerified: string;
}

const PersonalRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    watch,
    control,
    reset,
  } = useForm<FormInputTypes>({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      password: "",
      passwordVerified: "",
    },
  });

  useEffect(() => {
    reset();
  }, [reset, isSubmitSuccessful]);

  const aoSubmeter = (datas: FormInputTypes) => {
    console.log(datas);
  };

  const password = watch("password");

  const validPassword = {
    mandatory: (val: string) =>
      !!val || "Por favor, insira a senha novamente",
    sizeMinimum: (val: string) =>
      val.length >= 6 || "A senha deve ter pelo menos 6 caracteres",
    equalPasswords: (val: string) => val === password || "As senhas não correspondem",
  };

  function validateEmail(value: string) {
    const formatEmail = /^[^\s@]+@alura\.com\.br$/;
    if (!formatEmail.test(value)) {
      console.error("Endereço de email é inválido para este domínio");
      return false;
    }
    return true;
  }

  return (
    <>
      <Title>Insira alguns dados básicos:</Title>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="field-name">Nome</Label>
          <Input
            id="field-name"
            placeholder="Digite seu nome completo"
            type="text"
            $error={!!errors.name}
            {...register("name", {
              required: "Campo de nome é obrigatório",
              minLength: {
                value: 5,
                message: "O nome deve ter pelo menos cinco caracteres",
              },
            })}
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
            {...register("email", {
              required: "O campo de email é obrigatório",
              validate: validateEmail,
            })}
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
            {...register("password", {
              required: "O campo de senha é obrigatório",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos seis caracteres",
              },
            })}
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
            {...register("passwordVerified", {
              required: "Repita a senha",
              validate: validPassword,
            })}
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
