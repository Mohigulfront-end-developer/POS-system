const Payment = ({ playmentClick, setplaymentClick }) => {
  return (
    <div
      className={`fixed w-[100%] h-[100vh] bg-[#0000008e] overflow-hidden z-30 flex  justify-end ${
        playmentClick ? " translate-x-0" : "translate-x-full"
      }  transition-[.5s] ease-in-out delay-150 z-50`}
    >
      <div className="w-[400px] h-[100vh] bg-indigo-700">
        <div className="">
          <button
            onClick={() => setplaymentClick(false)}
            className="text-[red] bg-[black] px-[20px] py-[20px]"
          >
            clas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
