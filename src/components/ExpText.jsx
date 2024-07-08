/* eslint-disable react/prop-types */
export function ExpText({ title, clrTitle, date, sec1, sec2, sec3, sec4 }) {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-start pl-4 pb-10 gap-4 transition-all ease-in-out">
        <h2 className="font-semibold text-xl">
          {title} <span className="text-md"> @</span>{" "}
          <span className="text-main-red">{clrTitle}</span>
        </h2>
        <h4 className="text-sm text-gray-400">{date}</h4>
        <div className="w-full flex justify-start items-center gap-5 min-h-[50px]">
          <div className="w-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fillRule="currentColor"
              className="bi bi-braces fill-main-red"
              viewBox="0 0 16 16"
            >
              <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
            </svg>
          </div>
          <p>{sec1}</p>
        </div>
        <div className="w-full flex justify-start items-center gap-5 min-h-[50px]">
          <div className="w-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fillRule="currentColor"
              className="bi bi-braces fill-main-red"
              viewBox="0 0 16 16"
            >
              <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
            </svg>
          </div>
          <p>{sec2}</p>
        </div>
        <div className="w-full flex justify-start items-center gap-5 min-h-[50px]">
          <div className="w-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fillRule="currentColor"
              className="bi bi-braces fill-main-red"
              viewBox="0 0 16 16"
            >
              <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
            </svg>
          </div>
          <p>{sec3}</p>
        </div>
        <div className="w-full flex justify-start items-center gap-5 min-h-[50px]">
          <div className="w-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fillRule="currentColor"
              className="bi bi-braces fill-main-red"
              viewBox="0 0 16 16"
            >
              <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
            </svg>
          </div>
          <p>{sec4}</p>
        </div>
      </div>
    </>
  );
}
