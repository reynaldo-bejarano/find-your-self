import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import BasicButton from "../components/buttons/BasicButton";
import { LoginWithEmailAndPassword } from "../hooks/database";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await LoginWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
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

                <input
                  type="email"
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
                      message: "Ingresa un correo eléctronico",
                    },
                    pattern: {
                      value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                      message: "Ingresa un correo eléctronico valido",
                    },
                  })}
                />

                <input
                  type="password"
                  className={
                    errors.password
                      ? "bg-red-50 border border-red-500 mb-4 text-red-900 placeholder-red-700 text-sm rounded-2xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      : "focus:outline-none p-2.5 bg-white mb-4 rounded-lg py-2  w-full md:rounded-2xl"
                  }
                  placeholder={
                    errors.password ? errors.password.message : "Contraseña"
                  }
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Ingresa una contraseña",
                    },
                  })}
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
