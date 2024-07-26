import { Link } from "react-router-dom";
import coffee from "../assets/cup.png";

export function OfferBtn() {
  return (
    <>
      <Link
        to={"https://buy.stripe.com/bIY6oOeGm1iBaUEbII"}
        className="group fixed top-60 left-[8.5rem] rounded-full w-[80px] h-[80px] z-[500]"
      >
        <img src={coffee} alt="" />
        <div className=" justify-center items-center absolute group-hover:flex hidden text-black font-bold -top-12 -right-7 rounded-2xl bg-main-red px-2 py-1 w-[150px] ">
          Buy me a coffee!
        </div>
      </Link>
    </>
  );
}
