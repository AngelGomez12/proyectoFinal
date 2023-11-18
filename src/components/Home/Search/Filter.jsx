export const Filter = ({ productTypes }) => {
  return (
    <>
      <div className="dropdown">
        <label
          tabIndex={0}
          className="btn m-1 bg-neutral border-primary-content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <mask
              id="mask0_239_1183"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_239_1183)">
              <path
                d="M9.50375 16C9.36243 16 9.24316 15.9521 9.14594 15.8562C9.04872 15.7604 9.00011 15.6417 9.00011 15.5V10.7708L4.10427 4.8125C3.97927 4.64583 3.96021 4.46875 4.04708 4.28125C4.13397 4.09375 4.28498 4 4.50011 4H15.5001C15.7152 4 15.8662 4.09375 15.9531 4.28125C16.04 4.46875 16.0209 4.64583 15.8959 4.8125L11.0001 10.7708V15.5C11.0001 15.6417 10.9523 15.7604 10.8567 15.8562C10.7611 15.9521 10.6426 16 10.5013 16H9.50375ZM10.0001 9.625L13.3751 5.5H6.60427L10.0001 9.625Z"
                fill="#CDCED0"
              />
              <path
                d="M9.50375 16C9.36243 16 9.24316 15.9521 9.14594 15.8562C9.04872 15.7604 9.00011 15.6417 9.00011 15.5V10.7708L4.10427 4.8125C3.97927 4.64583 3.96021 4.46875 4.04708 4.28125C4.13397 4.09375 4.28498 4 4.50011 4H15.5001C15.7152 4 15.8662 4.09375 15.9531 4.28125C16.04 4.46875 16.0209 4.64583 15.8959 4.8125L11.0001 10.7708V15.5C11.0001 15.6417 10.9523 15.7604 10.8567 15.8562C10.7611 15.9521 10.6426 16 10.5013 16H9.50375ZM10.0001 9.625L13.3751 5.5H6.60427L10.0001 9.625Z"
                fill="black"
                fillOpacity="0.2"
              />
            </g>
          </svg>
          Todos
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {productTypes.map((productType) => (
            <li key={productType.id}>
              <a>{productType.description}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
