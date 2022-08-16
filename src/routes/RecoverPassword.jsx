import BasicButton from "../components/buttons/BasicButton";
import { Link } from "react-router-dom";

export default function RecoverPassword() {
  return (
    <div className="h-screen container mx-auto md:flex md:justify-center md:items-center">
      <div className=" mt-12 md:mt-0 px-2 md:px-0">
        <div>
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
          <p className="text-center mb-8">
            Ingresa el correo electrónico para recuperar tu contraseña
          </p>
        </div>

        <form>
          <input
            type="email"
            className="focus:outline-none bg-white mb-4 rounded-lg py-2 text-center w-full md:rounded-2xl"
            placeholder="Ingresa el correo eléctronico registrado."
          />

          <BasicButton
            text="Recuperar contraseña"
            type="submit"
            color="bg-teal-600"
          />
        </form>
        <div className="flex justify-center">
          <Link to="/login" className="text-gray-600 mt-10">
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
}
