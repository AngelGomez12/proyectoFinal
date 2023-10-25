import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams()
  return <div className="h-[500px] pt-[65px]">Details {id}</div>;
};
