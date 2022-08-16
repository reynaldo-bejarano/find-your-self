import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import BasicButton from "../components/buttons/BasicButton";
import { UserContext } from "../context/UserProvider";

export default function Login() {
  const { success, setSuccess } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuccess(false);
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
      <div className="h-screen container mx-auto ">
        <div className="grid md:grid-cols-2 md:gap-x-8 pt-24 md:pt-48">
          <div className="px-2 md:px-0">
            <div className="flex justify-center md:justify-start">
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

            <p className="mt-3 mb-8 md:pr-36 text-center md:text-left">
              Findyourself te ayuda a comunicarte y encuestar a las personas que
              forman parte de tu empresa.
            </p>
          </div>
          <div>
            <div className="grid px-2 md:px-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                {errors.email && (
                  <p className="mt-2 text-sm mb-2 text-red-900 dark:text-red-600">
                    {errors.email.message}
                  </p>
                )}
                <input
                  type="email"
                  className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
                  placeholder="Correo eléctronico"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Ingresa un correo eléctronico",
                    },
                  })}
                />

                <input
                  type="password"
                  className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
                  placeholder="Contraseña"
                />
                <BasicButton
                  text="Iniciar sesión"
                  type="submit"
                  color="bg-teal-600"
                />
              </form>
              <Link
                to="/recover-password"
                className="text-center text-gray-600 mb-10 md:mb-0"
              >
                ¿Olvidaste tu contraseña?
              </Link>
              <Link
                to="/register"
                className="text-gray-600 md:absolute md:bottom-8 md:right-72 text-center"
              >
                Crear nueva cuenta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
