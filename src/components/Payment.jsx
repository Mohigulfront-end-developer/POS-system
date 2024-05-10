import { TiCreditCard } from "react-icons/ti";
import { RiPaypalLine } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";

const Payment = ({ playmentClick, setplaymentClick }) => {
  return (
    <div
      className={`fixed w-[100%] h-[100vh] bg-[#0000008e] overflow-hidden z-30 flex  justify-end ${
        playmentClick ? " translate-x-0" : "translate-x-full"
      }  transition-[.5s] ease-in-out delay-150 z-50`}
    >
      <div className="w-[400px] h-[100vh] bg-[#1F1D2B]">
        <div className="container mx-auto p-4">
          <h1 className="text-[white] pt-[10px] text-[28px] font-bold mb-[5px]">
            Payment
          </h1>
          <p className="pb-[5px] text-[#ABBBC2] font-medium text-[16px] border-b-2 border-[#393C49]">
            3 payment method available
          </p>
          <div className="">
            <h2 className="text-[white] pt-[8px] text-[20px] font-bold mb-[8px]">
              Payment Method
            </h2>
            <div className="flex justify-between items-center mt-[16px] text-center">
              <div className="w-[101px] h-[64px] border border-[#393C49] p-[14px] rounded-md bg-transparent flex flex-col justify-center  hover:bg-[#252836] hover:text-white">
                <span className="flex flex-col  items-center  text-[#ABBBC2] font-medium text-[14px] hover:text-white ">
                  <TiCreditCard className="w-[30px] h-[30px]  rounded-md text-[#ABBBC2] hover:text-white" />
                  Credit Card
                </span>
              </div>
              <div className=" w-[101px] h-[64px] border border-[#393C49] p-[12px] rounded-md bg-transparent hover:bg-[#252836] hover:text-white">
                <span className="flex flex-col  items-center  text-[#ABBBC2] font-medium text-[14px] hover:text-white">
                  <RiPaypalLine className="w-[25px] h-[25px]  rounded-md text-[#ABBBC2] hover:text-white" />
                  Paypal
                </span>
              </div>
              <div className="w-[101px] h-[64px] border border-[#393C49] p-[12px] rounded-md bg-transparent hover:bg-[#252836]  ">
                <span className="flex flex-col  items-center  text-[#ABBBC2] font-medium text-[14px] hover:text-white">
                  <BsCashStack className="w-[25px] h-[25px]  rounded-md text-[#ABBBC2] hover:text-white" />
                  Cash
                </span>
              </div>
            </div>
          </div>
          <form className=" mt-[18px]">
            <div>
              <label htmlFor="form" className="text-white">
                Cardholder Name
              </label>
              <div className="mt-[8px]">
                <input
                  type="text"
                  id=""
                  placeholder="Levi Ackerman"
                  className="p-2 bg-[#393C49] border border-[#393C49] text-[#ABBBC2] rounded-md outline-none w-full"
                />
              </div>

              <div className="mt-[8px]">
                <label htmlFor="form" className="mt-[10px] text-[white]">
                  Card Number
                </label>
                <div className="mt-[10px]">
                  <input
                    type="number"
                    id=""
                    placeholder="2564 1421 0897 1244"
                    className="p-2 bg-[#393C49] border border-[#393C49] text-[#ABBBC2] rounded-md outline-none w-full"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-[8px] border-b-2 border-[#393C49] pb-[20px]">
                <div className="">
                  <label htmlFor="date" className="text-[white]">
                    Expiration Date
                  </label>
                  <div className="mt-[10px]">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="02/2022"
                      className="p-2 bg-[#393C49] border border-[#393C49] text-[#ABBBC2] rounded-md outline-none w-[172px] h-[48px]"
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="password" className="text-[white]">
                    CVV
                  </label>
                  <div className="mt-[10px]">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="p-2 bg-[#393C49] border border-[#393C49] text-[#ABBBC2] rounded-md outline-none w-[172px] h-[48px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-[8px] border-b-2 border-[#393C49] pb-[20px]">
                <div className="">
                  <label className="text-[white]">Order Type</label>
                  <div className="mt-2">
                    <select
                      id="deliver"
                      name="deliver"
                      className=" w-[172px] h-[48px] rounded-md border border-[#393C49] px-[14px] py-[14px] text-white bg-[#1F1D2B]"
                    >
                      <option>Dine In</option>
                      <option>To Go</option>
                      <option>Delivery</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="password" className="text-[white]">
                    Table no.
                  </label>
                  <div className="mt-[8px]">
                    <input
                      type="number"
                      id="number"
                      name="number"
                      placeholder="140"
                      className="p-2 bg-[#393C49] border border-[#393C49] text-[#ABBBC2] rounded-md outline-none w-[172px] h-[48px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center gap-5 mt-[20px]">
            <button
              onClick={() => setplaymentClick(false)}
              className="text-[#EB966A] bg-transparent border border-[#EB966A] px-[10px] py-[10px]  w-[175px] h-[48px] rounded-md hover:text-[white] hover:bg-[#EB966A]"
            >
              Cancel
            </button>

            <button
              onClick={() => setplaymentClick(true)}
              className="text-[#EB966A] bg-transparent  border border-[#EB966A] px-[10px] py-[10px] w-[175px] h-[48px]  rounded-md hover:text-[white] hover:bg-[#EB966A]"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
