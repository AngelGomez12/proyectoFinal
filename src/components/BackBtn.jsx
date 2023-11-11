import { useNavigate } from "react-router-dom";

const BackBtn = () => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };

  return (
    <button className="btn btn-ghost hidden md:flex items-center px-4"
    onClick={goBack}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#CDCED0"/>
        <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#CDCED0"/>
      </svg>
      <span className=" normal-case font-normal">Atrás</span>
    </button>
  );
};
export default BackBtn;
