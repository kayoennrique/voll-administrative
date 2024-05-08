import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Title,
} from "../../components";

interface FormInputAddress {
  cep: string;
  road: string;
  number: string;
  neighborhood: string;
  locality: string;
}

const RegistrationAddress = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormInputAddress>({
    mode: "all",
    defaultValues: {
      cep: "",
      road: "",
      neighborhood: "",
      number: "",
      locality: "",
    },
  });

  const onSubmit = (datas: FormInputAddress) => {
    console.log(datas);
  };

  const zipCodeEntered = watch("cep");

  const fethAddress = async (cep: string) => {
    if (!cep) {
      setError("cep", {
        type: "manual",
        message: "Cep inválido",
      });

      return;
    }

    try {
      const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (response.ok) {
        setValue("road", data.publicPlace);
        setValue("locality", `${data.locality}, ${data.uf}`);
        setValue("neighborhood", data.neighborhood);
      } else {
        throw new Error("Cep inválido");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Title>Agora, mais alguns dados sobre você:</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <Label htmlFor="field-cep">CEP</Label>
          <Input
            id="field-cep"
            placeholder="Insira seu CEP"
            type="text"
            {...register("cep", { required: "O campo é obrigatório" })}
            $error={!!errors.cep}
            onBlur={() => fethAddress(zipCodeEntered)}
          />
          {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="field-address">Rua</Label>
          <Input
            id="fsield-address"
            placeholder="Rua Agarikov"
            type="text"
            $error={!!errors.road}
            {...register("road", { required: "O campo é obrigatório" })}
          />
          {errors.road && <ErrorMessage>{errors.road.message}</ErrorMessage>}
        </Fieldset>

        <FormContainer>
          <Fieldset>
            <Label htmlFor="field-number-address">Número</Label>
            <Input
              id="field-number-address"
              placeholder="Ex: 1440"
              type="text"
              $error={!!errors.number}
              {...register("number", { required: "O campo é obrigatório" })}
            />
            {errors.number && (
              <ErrorMessage>{errors.number.message}</ErrorMessage>
            )}
          </Fieldset>
          <Fieldset>
            <Label htmlFor="field-neighborhood">Bairro</Label>
            <Input
              id="field-neighborhood"
              placeholder="Vila Mariana"
              type="text"
              $error={!!errors.neighborhood}
              {...register("neighborhood", { required: "O campo é obrigatório" })}
            />
            {errors.neighborhood && (
              <ErrorMessage>{errors.neighborhood.message}</ErrorMessage>
            )}
          </Fieldset>
        </FormContainer>
        <Fieldset>
          <Label htmlFor="field-locality">Localidade</Label>
          <Input
            id="field-locality"
            placeholder="São Paulo, SP"
            type="text"
            $error={!!errors.locality}
            {...register("locality", { required: "O campo é obrigatório" })}
          />
          {errors.locality && (
            <ErrorMessage>{errors.locality.message}</ErrorMessage>
          )}
        </Fieldset>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};

export default RegistrationAddress;
