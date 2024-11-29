import watch from "./assets/watch.png";
import star from "./assets/star.png";
import troly from "./assets/shopping-cart.png";
import heart from "./assets/heart.png";
function App() {
  return (
    <>
      <div className="bg-gray-100 h-screen flex-wrap flex gap-6 justify-center items-center">
        {/* ........Card_body .......... */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0">
          <img
            src={watch}
            alt="smart_watch"
            className="h-40 object-cover rounded-xl"
          />
          <div className="p-2">
            <h2 className="font-bold text-lg mb-2">Heading</h2>
            <span className="text-xl font-semibold">Rs. 1800.00</span>
            <div className="flex items-center gap-2">
              <span className="text-sm line-through opacity-75">
                Rs. 2000.00
              </span>
              <span className="font-bold text-sm p-2 bg-yellow-300 rounded-s-2xl text-gray-600">
                save 10%
              </span>
            </div>
            <div className="flex items-center mt-2 gap-1">
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <p className="font-bold text-xs text-gray-700">Best Rating</p>
            </div>
            <p className="text-sm text-gray-600 mt-2 mb-2 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda, esse. Nihil provident nulla itaque ut.
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 mb-3">
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-blue-400 font-semibold ">
              Buy Now
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-500 ">
              <img src={troly} alt="" className="w-6" />
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-500 ">
              <img src={heart} alt="" className="w-6" />
            </button>
          </div>
        </div>
        {/* ........Card_body .......... */}
        {/* ........Card_body .......... */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0">
          <img
            src={watch}
            alt="smart_watch"
            className="h-40 object-cover rounded-xl"
          />
          <div className="p-2">
            <h2 className="font-bold text-lg mb-2">Heading</h2>
            <span className="text-xl font-semibold">Rs. 1800.00</span>
            <div className="flex items-center gap-2">
              <span className="text-sm line-through opacity-75">
                Rs. 2000.00
              </span>
              <span className="font-bold text-sm p-2 bg-yellow-300 rounded-s-2xl text-gray-600">
                save 10%
              </span>
            </div>
            <div className="flex items-center mt-2 gap-1">
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <p className="font-bold text-xs text-gray-700">Best Rating</p>
            </div>
            <p className="text-sm text-gray-600 mt-2 mb-2 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda, esse. Nihil provident nulla itaque ut.
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 mb-3">
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-blue-400 font-semibold ">
              Buy Now
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-500 ">
              <img src={troly} alt="" className="w-6" />
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-500 ">
              <img src={heart} alt="" className="w-6" />
            </button>
          </div>
        </div>
        {/* ........Card_body .......... */}
        {/* ........Card_body .......... */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0">
          <img
            src={watch}
            alt="smart_watch"
            className="h-40 object-cover rounded-xl"
          />
          <div className="p-2">
            <h2 className="font-bold text-lg mb-2">Heading</h2>
            <span className="text-xl font-semibold">Rs. 1800.00</span>
            <div className="flex items-center gap-2">
              <span className="text-sm line-through opacity-75">
                Rs. 2000.00
              </span>
              <span className="font-bold text-sm p-2 bg-yellow-300 rounded-s-2xl text-gray-600">
                save 10%
              </span>
            </div>
            <div className="flex items-center mt-2 gap-1">
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <p className="font-bold text-xs text-gray-700">Best Rating</p>
            </div>
            <p className="text-sm text-gray-600 mt-2 mb-2 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda, esse. Nihil provident nulla itaque ut.
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 mb-3">
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-blue-400 font-semibold ">
              Buy Now
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-500 ">
              <img src={troly} alt="" className="w-6" />
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-500 ">
              <img src={heart} alt="" className="w-6" />
            </button>
          </div>
        </div>
        {/* ........Card_body .......... */}
        {/* ........Card_body .......... */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0">
          <img
            src={watch}
            alt="smart_watch"
            className="h-40 object-cover rounded-xl"
          />
          <div className="p-2">
            <h2 className="font-bold text-lg mb-2">Heading</h2>
            <span className="text-xl font-semibold">Rs. 1800.00</span>
            <div className="flex items-center gap-2">
              <span className="text-sm line-through opacity-75">
                Rs. 2000.00
              </span>
              <span className="font-bold text-sm p-2 bg-yellow-300 rounded-s-2xl text-gray-600">
                save 10%
              </span>
            </div>
            <div className="flex items-center mt-2 gap-1">
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <img src={star} alt="star" className="w-5" />
              <p className="font-bold text-xs text-gray-700">Best Rating</p>
            </div>
            <p className="text-sm text-gray-600 mt-2 mb-2 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda, esse. Nihil provident nulla itaque ut.
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 mb-3">
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-blue-400 font-semibold ">
              Buy Now
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-500 ">
              <img src={troly} alt="" className="w-6" />
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-500 ">
              <img src={heart} alt="" className="w-6" />
            </button>
          </div>
        </div>
        {/* ........Card_body .......... */}
      </div>
    </>
  );
}

export default App;
