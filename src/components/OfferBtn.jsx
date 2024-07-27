import coffee from "../assets/cup.png";

export function OfferBtn() {
  return (
    <>
      <a
        to={"https://buy.stripe.com/bIY6oOeGm1iBaUEbII"}
        className="group fixed top-[530px] md:top-64 left-[0.4rem] md:left-[9rem] rounded-full w-[25px] h-[25px] md:w-[60px] md:h-[60px]"
      >
        <img src={coffee} alt="" />
        <div className=" justify-center items-center absolute group-hover:flex hidden text-black font-bold -top-12 -right-10 rounded-2xl bg-main-red px-2 py-1 w-[150px] ">
          Buy me a coffee!
        </div>
      </a>
    </>
  );
}
