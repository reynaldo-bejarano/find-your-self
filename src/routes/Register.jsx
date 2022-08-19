import BasicButton from "../components/buttons/BasicButton";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { CreateEmailAndPassword } from "../hooks/database";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function Register() {
  const { setSuccess, success } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await CreateEmailAndPassword(data.email, data.password);
      setSuccess(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {success && (
        <div
          class="text-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <span class="font-medium">Registro éxitoso!</span> El usuario ha sido
          registrado de manera correcta.
        </div>
      )}
      <div className="h-screen container mx-auto md:flex md:justify-center md:items-center">
        <div className="w-full mt-8 md:mt-0 px-4 md:px-40">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={200}
              height={50}
              viewBox="0 0 414 77"
            >
              <text
                id="FindYourSelf"
                transform="translate(0 64)"
                fill="#2a9d8f"
                fontSize={64}
                fontFamily="Tahoma-Bold, Tahoma"
                fontWeight={700}
              >
                <tspan x={0} y={0}>
                  FindYourSelf
                </tspan>
              </text>
            </svg>
          </div>

          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 md:gap-4 w-full mb-4 md:mb-6">
              <div>
                <input
                  type="text"
                  id="name"
                  className={
                    errors.name
                      ? "bg-red-50 border border-red-500 mb-4 text-red-900 placeholder-red-700 text-sm rounded-2xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      : "focus:outline-none p-2.5 bg-white mb-4 rounded-lg py-2 w-full md:rounded-2xl"
                  }
                  placeholder={errors.name ? errors.name.message : "Nombre"}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "El nombre es un campo obligatorio",
                    },
                  })}
                />
              </div>

              <div>
                <input
                  type="text"
                  id="lastname"
                  className={
                    errors.lastname
                      ? "bg-red-50 border border-red-500 mb-4 text-red-900 placeholder-red-700 text-sm rounded-2xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      : "focus:outline-none p-2.5 bg-white mb-4 rounded-lg py-2 w-full md:rounded-2xl"
                  }
                  placeholder={
                    errors.lastname ? errors.lastname.message : "Apellido"
                  }
                  {...register("lastname", {
                    required: {
                      value: true,
                      message: "El apellido es un campo obligatorio",
                    },
                  })}
                />
              </div>

              <div>
                <input
                  type="text"
                  className={
                    errors.email
                      ? "bg-red-50 border border-red-500 mb-4 text-red-900 placeholder-red-700 text-sm rounded-2xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      : "focus:outline-none p-2.5 bg-white mb-4 rounded-lg py-2 w-full md:rounded-2xl"
                  }
                  placeholder={
                    errors.email ? errors.email.message : "Correo eléctronico"
                  }
                  {...register("email", {
                    required: {
                      value: true,
                      message: "El correo eléctronico es un campo obligatorio",
                    },
                    pattern: {
                      value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                      message: "Ingresa un correo eléctronico valido",
                    },
                  })}
                />
              </div>

              <div>
                <input
                  type="text"
                  className={
                    errors.country
                      ? "bg-red-50 border border-red-500 mb-4 text-red-900 placeholder-red-700 text-sm rounded-2xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      : "focus:outline-none p-2.5 bg-white mb-4 rounded-lg py-2 w-full md:rounded-2xl"
                  }
                  placeholder={
                    errors.country
                      ? errors.country.message
                      : "País de residencia"
                  }
                  {...register("country", {
                    required: {
                      value: true,
                      message: "El país es un campo obligatorio",
                    },
                  })}
                />
              </div>

              <div>
                <input
                  type="password"
                  className={
                    errors.password
                      ? "bg-red-50 border border-red-500 mb-4 text-red-900 placeholder-red-700 text-sm rounded-2xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      : "focus:outline-none p-2.5 bg-white mb-4 rounded-lg py-2 w-full md:rounded-2xl"
                  }
                  placeholder={
                    errors.password ? errors.password.message : "Contraseña"
                  }
                  {...register("password", {
                    required: {
                      value: true,
                      message: "La contraseña es un campo obligatorio",
                    },
                    minLength: {
                      value: 8,
                      message: "Mínimo 6 carácteres en la contraseña",
                    },
                    pattern: {
                      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                      message:
                        "La contraseña debe contener una letra mayúscula y un número",
                    },
                  })}
                />
              </div>

              <div>
                <input
                  type="password"
                  className={
                    errors.repassword
                      ? "bg-red-50 border border-red-500 mb-4 text-red-900 placeholder-red-700 text-sm rounded-2xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      : "focus:outline-none p-2.5 bg-white mb-4 rounded-lg py-2 w-full md:rounded-2xl"
                  }
                  placeholder={
                    errors.repassword
                      ? errors.repassword.message
                      : "Repetir contraseña"
                  }
                  {...register("repassword", {
                    required: {
                      value: true,
                      message: "Repetir contraseña es un campo obligatorio",
                    },
                  })}
                />
              </div>

              <div>
                <input
                  type="text"
                  className={
                    errors.phone
                      ? "bg-red-50 border border-red-500 mb-4 text-red-900 placeholder-red-700 text-sm rounded-2xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      : "focus:outline-none p-2.5 bg-white mb-4 rounded-lg py-2 w-full md:rounded-2xl"
                  }
                  placeholder={
                    errors.phone ? errors.phone.message : "Número teléfonico"
                  }
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "El número teléfonico es campo obligatorio",
                    },
                    pattern: {
                      value: /^[0-9]+/,
                      message: "Por favor solo ingresa números",
                    },
                  })}
                />
              </div>

              <div>
                <input
                  type="text"
                  className={
                    errors.area
                      ? "bg-red-50 border border-red-500 mb-4 text-red-900 placeholder-red-700 text-sm rounded-2xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      : "focus:outline-none p-2.5 bg-white mb-4 rounded-lg py-2 w-full md:rounded-2xl"
                  }
                  placeholder={
                    errors.area ? errors.area.message : "Área de intéres"
                  }
                  {...register("area", {
                    required: {
                      value: true,
                      message: "El área de intéres es un campo obligatorio",
                    },
                  })}
                />
              </div>
            </div>

            <div className="md:w-1/2 md:flex md:mx-auto">
              <BasicButton
                text="Registrarse"
                type="submit"
                color="bg-teal-600"
              />
            </div>
          </form>
          <div className="flex justify-center">
            <Link to="/login" className="text-gray-600 mt-4">
              Regresar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
