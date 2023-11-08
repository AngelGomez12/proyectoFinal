import { useNavigate } from "react-router-dom";
import UserBar from "../components/UserBar";

const Account = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

/*   console.log(JSON.parse(localStorage.getItem("userDto")).firstName); */

  return (
    <>
    <UserBar/>
      <section className="w-full flex justify-center items-center flex-col bg-neutral h-[90vh]">
        <div className="px-16 h-full w-screen mt-40 m-5">
          <div className="flex justify-between w-full mb-5">
            <div className="flex flex-row gap-4 items-center">
              <h1 className="text-3xl font-bold">Mi Cuenta</h1>
              <div className="btn btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g mask="url(#mask0_229_2159)">
                    <path
                      d="M15.9997 15.9999C14.533 15.9999 13.2775 15.4777 12.233 14.4333C11.1886 13.3888 10.6663 12.1333 10.6663 10.6666C10.6663 9.19992 11.1886 7.94436 12.233 6.89992C13.2775 5.85547 14.533 5.33325 15.9997 5.33325C17.4663 5.33325 18.7219 5.85547 19.7663 6.89992C20.8108 7.94436 21.333 9.19992 21.333 10.6666C21.333 12.1333 20.8108 13.3888 19.7663 14.4333C18.7219 15.4777 17.4663 15.9999 15.9997 15.9999ZM5.33301 26.6666V22.9333C5.33301 22.1777 5.52745 21.4833 5.91634 20.8499C6.30523 20.2166 6.8219 19.7333 7.46634 19.3999C8.84412 18.711 10.2441 18.1944 11.6663 17.8499C13.0886 17.5055 14.533 17.3333 15.9997 17.3333C17.4663 17.3333 18.9108 17.5055 20.333 17.8499C21.7552 18.1944 23.1552 18.711 24.533 19.3999C25.1775 19.7333 25.6941 20.2166 26.083 20.8499C26.4719 21.4833 26.6663 22.1777 26.6663 22.9333V26.6666H5.33301ZM7.99967 23.9999H23.9997V22.9333C23.9997 22.6888 23.9386 22.4666 23.8163 22.2666C23.6941 22.0666 23.533 21.911 23.333 21.7999C22.133 21.1999 20.9219 20.7499 19.6997 20.4499C18.4775 20.1499 17.2441 19.9999 15.9997 19.9999C14.7552 19.9999 13.5219 20.1499 12.2997 20.4499C11.0775 20.7499 9.86634 21.1999 8.66634 21.7999C8.46634 21.911 8.30523 22.0666 8.18301 22.2666C8.06079 22.4666 7.99967 22.6888 7.99967 22.9333V23.9999ZM15.9997 13.3333C16.733 13.3333 17.3608 13.0721 17.883 12.5499C18.4052 12.0277 18.6663 11.3999 18.6663 10.6666C18.6663 9.93325 18.4052 9.30547 17.883 8.78325C17.3608 8.26103 16.733 7.99992 15.9997 7.99992C15.2663 7.99992 14.6386 8.26103 14.1163 8.78325C13.5941 9.30547 13.333 9.93325 13.333 10.6666C13.333 11.3999 13.5941 12.0277 14.1163 12.5499C14.6386 13.0721 15.2663 13.3333 15.9997 13.3333Z"
                      fill="#CDCED0"
                    />
                    <path
                      d="M15.9997 15.9999C14.533 15.9999 13.2775 15.4777 12.233 14.4333C11.1886 13.3888 10.6663 12.1333 10.6663 10.6666C10.6663 9.19992 11.1886 7.94436 12.233 6.89992C13.2775 5.85547 14.533 5.33325 15.9997 5.33325C17.4663 5.33325 18.7219 5.85547 19.7663 6.89992C20.8108 7.94436 21.333 9.19992 21.333 10.6666C21.333 12.1333 20.8108 13.3888 19.7663 14.4333C18.7219 15.4777 17.4663 15.9999 15.9997 15.9999ZM5.33301 26.6666V22.9333C5.33301 22.1777 5.52745 21.4833 5.91634 20.8499C6.30523 20.2166 6.8219 19.7333 7.46634 19.3999C8.84412 18.711 10.2441 18.1944 11.6663 17.8499C13.0886 17.5055 14.533 17.3333 15.9997 17.3333C17.4663 17.3333 18.9108 17.5055 20.333 17.8499C21.7552 18.1944 23.1552 18.711 24.533 19.3999C25.1775 19.7333 25.6941 20.2166 26.083 20.8499C26.4719 21.4833 26.6663 22.1777 26.6663 22.9333V26.6666H5.33301ZM7.99967 23.9999H23.9997V22.9333C23.9997 22.6888 23.9386 22.4666 23.8163 22.2666C23.6941 22.0666 23.533 21.911 23.333 21.7999C22.133 21.1999 20.9219 20.7499 19.6997 20.4499C18.4775 20.1499 17.2441 19.9999 15.9997 19.9999C14.7552 19.9999 13.5219 20.1499 12.2997 20.4499C11.0775 20.7499 9.86634 21.1999 8.66634 21.7999C8.46634 21.911 8.30523 22.0666 8.18301 22.2666C8.06079 22.4666 7.99967 22.6888 7.99967 22.9333V23.9999ZM15.9997 13.3333C16.733 13.3333 17.3608 13.0721 17.883 12.5499C18.4052 12.0277 18.6663 11.3999 18.6663 10.6666C18.6663 9.93325 18.4052 9.30547 17.883 8.78325C17.3608 8.26103 16.733 7.99992 15.9997 7.99992C15.2663 7.99992 14.6386 8.26103 14.1163 8.78325C13.5941 9.30547 13.333 9.93325 13.333 10.6666C13.333 11.3999 13.5941 12.0277 14.1163 12.5499C14.6386 13.0721 15.2663 13.3333 15.9997 13.3333Z"
                      fill="black"
                      fillOpacity="0.2"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <button
              className="hidden rounded h-12  ms:flex lg:flex items-center gap-4 border-2 px-4"
              onClick={goBack}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
                  fill="#CDCED0"
                />
              </svg>
              Volver atras
            </button>
          </div>

          <div className="my-6">
            <h4 className="">
              Nombre Completo:
            </h4>
            <h4 className="text-primary-content font-bold">{`${JSON.parse(localStorage.getItem("userDto")).firstName}`}</h4>
          </div>
          <div className="my-6">
            <h4 className="">
              Email Registrado:
            </h4>
            <h4 className="text-primary-content font-bold">{`${JSON.parse(localStorage.getItem("userDto")).username}`}</h4>
          </div>
          <div className="my-8">
            <button className="btn btn-outline btn-error btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g mask="url(#mask0_229_2149)">
                  <path
                    d="M9.4 16.5L12 13.9L14.6 16.5L16 15.1L13.4 12.5L16 9.9L14.6 8.5L12 11.1L9.4 8.5L8 9.9L10.6 12.5L8 15.1L9.4 16.5ZM7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6Z"
                    fill="#F87272"
                  />
                </g>
              </svg>
              Eliminar mi Cuenta
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Account;
