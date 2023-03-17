import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";
import Button from "@mui/material/Button";
import * as yup from "yup";

import styles from "./Form.module.scss";

export interface CallBackFormType {
	name: string;
	phone: string;
	email: string;
	text: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Укажите ФИО"),
  email: yup
    .string()
    .email("Некорректая почта")
    .required("Укажите почту"),
  phone: yup
    .string()
    .required("Укажите телефон"),
  text: yup
    .string()
    .required("Сообщение пустое"),
});

export const FormFeedback = () => {
  const { register, watch, handleSubmit, formState: { errors, isSubmitting  }, control } = useForm<CallBackFormType>({
    resolver: yupResolver(schema),
    mode: "all",
  });


  const onSubmit = (data: CallBackFormType) => {
    console.log("data ", data);
  };

  return (
    <div className="w-full h-full">
	    <form autoComplete="none" onSubmit={handleSubmit(onSubmit)}>
		    <div className={"grid grid-cols-1 gap-x-10 gap-y-5"}>
			    <Controller
				    name={"name"}
				    control={control}
				    render={({
					             field: { onChange, value },
					             fieldState: { invalid, isTouched, isDirty, error },
				             }) => (
					    <TextField
						    error={!!error}
						    onChange={onChange}
						    value={value}
						    label={"ФИО"}
						    variant={"standard"}
						    helperText={error?.message}
					    />
				    )}
			    />
			    <Controller
				    name={"phone"}
				    control={control}
				    render={({
					             field: { onChange, value },
					             fieldState: { invalid, isTouched, isDirty, error },
				             }) => (
			    <InputMask mask='+7 (999) 999-99-99'
			      placeholder='+7 (___) ___-__-__'
                error={!!error}
                onChange={onChange}
                value={value}
                label={"Телефон"}
                variant={"standard"}
                helperText={error?.message}
			    >
					    {
						    // @ts-ignore
                  (inputProps: any) => <TextField {...inputProps}/>
                }
			    </InputMask>
				    )}
			    />

			    <Controller
				    name={"email"}
				    control={control}
				    render={({
					             field: { onChange, value },
					             fieldState: { invalid, isTouched, isDirty, error },
				             }) => (
					    <TextField
						    error={!!error}
						    onChange={onChange}
						    value={value}
						    label={"Почта"}
						    variant={"standard"}
						    helperText={error?.message}
					    />
				    )}
			    />
		    </div>
		    <div className="grid mt-5">
			    <Controller
				    name={"text"}
				    control={control}
				    render={({
					             field: { onChange, value },
					             fieldState: { invalid, isTouched, isDirty, error },
				             }) => (
					    <TextField
						    error={!!error}
						    onChange={onChange}
						    value={value}
						    label={"Сообщение"}
						    helperText={error?.message}
						    multiline
						    className={styles.TextArea}
						    rows={4}
					    />
				    )}
			    />
			    <Button className={"bg-primary mt-5"} type="submit" variant="contained">Обратный звнок</Button>
		    </div>

	    </form>
    </div>
  );
};