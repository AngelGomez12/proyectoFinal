import { useState, useEffect } from "react";
import FileUploadForm from "../AddProducts/components/FileUploadForm";
import { Alerts } from "../../utils/Alerts";

export const TableBookings = () => {
  const [reservations, setresevations] = useState([]);
  const [formData, setFormData] = useState({
    product: {
      id: "",
    },
    user: {
      id: "",
    },
    startDate: "",
    endDate: "",
    extraData: "",
  });
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}reservations`)
      .then((response) => response.json())
      .then((data) => {
        setresevations(data); // Update this line
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al cargar product", error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div>
          <div className=" flex mr-9">
            <h1 className="text-3xl font-bold flex mb-8 justify-start">
              Todas las Reservas
            </h1>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
          </div>
          <table className="table w-3/5">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <div className="flex">
                    <label className="mr-8">
                      <label>ID</label>
                    </label>
                  </div>
                </th>
                <th className="flex">
                  <div className="">Reserva</div>
                </th>
                <th className="">Usuario</th>
                <th className="">Producto</th>
                <th className="">Fecha Inicio</th>
                <th className="">Fecha Fin</th>
                <th className="">Status</th>
              </tr>
            </thead>
            <tbody>
              {reservations.slice(0, 7).map((booking) => (
                <tr key={booking.id}>
                  <th>
                    <div className="flex">
                      <label className="mr-8">
                        <label>{booking.id}</label>
                      </label>
                    </div>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12"></div>
                      </div>
                      <div className="ml-8">
                        <div className="font-bold relative right-[68px]">
                          <p className="w-[220px] truncate ...">
                            {booking.extraData}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="w-[220px] truncate ... ">
                      {booking.user.username}
                    </p>
                  </td>
                  <td>
                    <p className="w-[220px] truncate ... ">
                      {booking.product.name}
                    </p>
                  </td>
                  <td>
                    <p className="w-[220px] truncate ... ">
                      {booking.startDate}
                    </p>
                  </td>
                  <td>
                    <p className="w-[220px] truncate ... ">{booking.endDate}</p>
                  </td>
                  <td>
                    <p
                      className={`w-[220px] truncate ${
                        booking.status === "PENDING"
                          ? "text-green-500 font-bold"
                          : ""
                      } ${
                        booking.status === "ACTIVE"
                          ? "text-yellow-500 font-bold"
                          : ""
                      } ${
                        booking.status === "FINISHED"
                          ? "text-red-500 font-bold"
                          : ""
                      }`}
                    >
                      {booking.status === "PENDING"
                        ? "RESERVADO"
                        : booking.status === "ACTIVE"
                        ? "EN PROCESO"
                        : booking.status === "FINISHED"
                        ? "FINALIZADO"
                        : booking.status}
                    </p>
                  </td>
                  <th></th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
