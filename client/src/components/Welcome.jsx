import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Welcome = () => {
  const connectWallet = () => {
    console.log("connect");
  };

  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:p-20 py-12 px-4">
      <div className="flex flex-1 flex-col items-start md:mr-10">
        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Send Crypto <br /> across the world
        </h1>
        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          Krypto.
        </p>

        <button
          type="button"
          onClick={connectWallet}
          className="flex items-center mt-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white text-base font-semibold"
        >
          Connect Wallet
        </button>

        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 gap-4">
          <div className="border-[0.5px] border-gray-400 text-sm font-light text-white rounded-tl-2xl p-3">
            Reliability
          </div>
          <div className="border-[0.5px] border-gray-400 text-sm font-light text-white p-3">
            Security
          </div>
          <div className="border-[0.5px] border-gray-400 text-sm font-light text-white sm:rounded-tr-2xl p-3">
            Ethereum
          </div>
          <div className="border-[0.5px] border-gray-400 text-sm font-light text-white sm:rounded-bl-2xl p-3">
            Web 3.0
          </div>
          <div className="border-[0.5px] border-gray-400 text-sm font-light text-white p-3">
            Low fees
          </div>
          <div className="border-[0.5px] border-gray-400 text-sm font-light text-white rounded-br-2xl p-3">
            Blockchain
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start flex-1 w-full md:mt-0 mt-10">
        <div className="p-3 flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
          <div className="flex justify-between items-start w-full h-full">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
              <SiEthereum fontSize={21} color="#fff" />
            </div>
            <BsInfoCircle fontSize={17} color="#fff" />
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <p className="text-white font-light text-sm truncate">{`0x...${"1234"}`}</p>
            <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
          </div>
        </div>

        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <Input placeholder="Address To" name="addressTo" type="text" />
          <Input placeholder="Amount (ETH)" name="amount" type="number" />
          <Input
            placeholder="Keyword (Gif)"
            name="keyword"
            type="text"
            disabled
          />
          <Input
            placeholder="Enter Message"
            name="message"
            type="text"
            disabled
          />
          <div className="h-[1px] w-full bg-gray-400 my-2" />
          {false ? (
            <Loader />
          ) : (
            <button
              onClick={handleSubmit}
              type="button"
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
            >
              Send Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
