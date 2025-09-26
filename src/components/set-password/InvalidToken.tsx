import React from "react";

export default function InvalidToken() {
  return (
    <div>
      <div className="p-4">
        <img
          src="/kudilogo.png"
          className="inline max-w-full h-auto w-[120px] mb-4"
        />
      </div>
      <div
        className="min-h-screen w-screen flex items-center md:w-[50%] align-middle m-auto"
        style={{ textAlign: "center" }}
      >
        <div>
          <svg
            style={{ width: "30%", height: "auto", margin: "auto" }}
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            width="676.41643"
            height="606.15131"
            viewBox="0 0 676.41643 606.15131"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M733.1664,748.299c-8.99256-7.59865-14.45479-19.60227-13.02232-31.28789s10.30472-22.42829,21.81332-24.90978,24.62761,4.38768,28.12315,15.62987c1.92376-21.6745,4.14055-44.25714,15.6641-62.715,10.43429-16.71314,28.50667-28.672,48.09305-30.81147s40.20832,5.941,52.42362,21.40027,15.20618,37.93388,6.6509,55.68241c-6.30238,13.07474-17.91358,22.80511-30.07923,30.72128A194.12948,194.12948,0,0,1,730.06075,751.055"
              transform="translate(-261.79178 -146.92434)"
              fill="#f2f2f2"
            />
            <path
              d="M866.8927,620.59367a317.62453,317.62453,0,0,0-44.26412,43.95415,318.55051,318.55051,0,0,0-49.85571,83.314c-.89773,2.19991,2.67454,3.15752,3.56229.98208a316.75849,316.75849,0,0,1,93.16977-125.638c1.84429-1.5018-.78315-4.10164-2.61223-2.61223Z"
              transform="translate(-261.79178 -146.92434)"
              fill="#fff"
            />
          </svg>
          <div style={{ width: "50%", margin: "auto" }}>
            <div className="font-semibold text-lg">
              This password reset link is invalid or has expired, try resending the reset link on the mobile app.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}