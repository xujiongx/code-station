import React from "react";

export default function Tailwind() {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.17173cdn.com%2F2fhnvk%2FYWxqaGBf%2Fcms3%2FurtLsYbmBbFaoru.jpg%21a-3-540x.jpg&refer=http%3A%2F%2Fi.17173cdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645951651&t=9a17e5c4a6ea513d06175df6d1ef303b"
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">Erin Lindford</p>
          <p className="text-slate-500 font-medium">Product Engineer</p>
        </div>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>
    </div>
  );
}
