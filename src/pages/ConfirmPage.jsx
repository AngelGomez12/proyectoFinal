export const ConfirmPage = () => {
  const user = JSON.parse(localStorage.getItem("userDto"));

  return (
    <div className="h-screen">
      <main className="flex justify-center items-center w-full h-full bg-neutral text-2xl">
        <p className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </p>
        Felicitaciones {user.firstName} {user.lastName}! Tu reserva ha sido
        confirmada. <br /> Te hemos enviado un correo a {user.username} con los
        detalles de tu reserva.
      </main>
    </div>
  );
};
