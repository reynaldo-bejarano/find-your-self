import BasicButton from "../components/buttons/BasicButton";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { UserWithEmailAndPassword } from "../hooks/database";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function Register() {
  const { setSuccess } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    try {
      UserWithEmailAndPassword(data.email, data.password);
      setSuccess(true);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
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
                {errors.name && (
                  <p className="mb-2 text-sm text-red-600 dark:text-red-500 text-center">
                    {errors.name.message}
                  </p>
                )}
                <input
                  type="text"
                  className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
                  placeholder="Nombre"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />
              </div>

              <div>
                {errors.lastname && (
                  <p className="mb-2 text-sm text-red-600 dark:text-red-500 text-center">
                    {errors.lastname.message}
                  </p>
                )}
                <input
                  type="tel"
                  className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
                  placeholder="Apellido"
                  {...register("lastname", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />
              </div>

              <div>
                {errors.email && (
                  <p className="mb-2 text-sm text-red-600 dark:text-red-500 text-center">
                    {errors.email.message}
                  </p>
                )}
                <input
                  type="text"
                  className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
                  placeholder="Correo electrónico"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                    pattern: {
                      value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                      message: "Ingresa un correo eléctroni valido.",
                    },
                  })}
                />
              </div>

              <div>
                {errors.country && (
                  <p className="mb-2 text-sm text-red-600 dark:text-red-500 text-center">
                    {errors.country.message}
                  </p>
                )}
                <input
                  type="text"
                  className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
                  placeholder="País"
                  {...register("country", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />
              </div>

              <div>
                {errors.password && (
                  <p className="mb-2 text-sm text-red-600 dark:text-red-500 text-center">
                    {errors.password.message}
                  </p>
                )}
                <input
                  type="password"
                  className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                    minLength: {
                      value: 8,
                      message: "Mínimo 6 carácteres en la contraseña",
                    },
                    pattern: {
                      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                      message:
                        "La contraseña debe contener una letra mayúscula y una carácter especial",
                    },
                  })}
                />
              </div>

              <div>
                {errors.repassword && (
                  <p className="mb-2 text-sm text-red-600 dark:text-red-500 text-center">
                    {errors.repassword.message}
                  </p>
                )}
                <input
                  type="password"
                  className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
                  placeholder="Repetir contraseña"
                  {...register("repassword", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                    minLength: {
                      value: 6,
                      message: "Mínimo 6 carácteres en la contraseña",
                    },
                    pattern: {
                      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                      message:
                        "La contraseña debe contener una letra mayúscula y un número",
                    },
                    validate: {
                      value: value =>
                      getValues("repassword") !== getValues("password"),
                      message: "Las  contraseñas no coinciden",
                    },
                  })}
                />
              </div>

              <div>
                {errors.phone && (
                  <p className="mb-2 text-sm text-red-600 dark:text-red-500 text-center">
                    {errors.phone.message}
                  </p>
                )}
                <input
                  type="text"
                  className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
                  placeholder="Teléfono"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                    pattern: {
                      value: /^[0-9]+/,
                      message: "Por favor solo ingresa números",
                    },
                  })}
                />
              </div>

              <div>
                {errors.area && (
                  <p className="mb-2 text-sm text-red-600 dark:text-red-500 text-center">
                    {errors.area.message}
                  </p>
                )}
                <input
                  type="text"
                  className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
                  placeholder="Área"
                  {...register("area", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
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
