import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export interface LoginFormType {
	name: string;
}

const schema = yup.object().shape({
  // email: yup
  //   .string()
  //   .email("Некорректая почта")
  //   .required("Укажите почту"),
  name: yup
    .string()
    .required()
});

export const FormFeedback = () => {
  const { register, watch, handleSubmit, formState: { errors, isSubmitting  }, control } = useForm<LoginFormType>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });


  const onSubmit = (data: LoginFormType) => {
    console.log("data ", data);
  };

  return (
    <div>
	    <form autoComplete="none" onSubmit={handleSubmit(onSubmit)}>
		    <Controller
			    name={"name"}
			    control={control}
			    render={({
				             field: { onChange, value },
				             fieldState: { invalid, isTouched, isDirty, error },
			             }) => (
				    <TextField
					    error={error ? true : false}
					    onChange={onChange}
					    value={value}
					    label={"Text Value"}
					    helperText={error?.message}
				    />
			    )}
		    />
		    <Button className={"bg-primary"} type="submit" variant="contained">Contained</Button>
	    </form>
    </div>
  );
};