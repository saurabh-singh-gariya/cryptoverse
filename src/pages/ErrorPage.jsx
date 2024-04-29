import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-full h-full text-white flex flex-col justify-center items-center">
      <div className="max-h-10">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          width="64px"
          height="64px"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            
            <rect
              x="15.673"
              y="39.278"
              style={{ fill: "#C9E8FA" }}
              width="480.653"
              height="433.445"
            />
            <path
              style={{ fill: "#67BFFF" }}
              d="M0,23.604v464.791h512V23.604H0z M480.653,457.049H31.347V54.951h449.306V457.049z"
            />
            <rect
              x={256}
              y="39.278"
              style={{ fill: "#B6E0F7" }}
              width="240.327"
              height="433.445"
            />
            <polygon
              style={{ fill: "#0088FF" }}
              points="512,23.604 512,488.396 256,488.396 256,457.049 480.653,457.049 480.653,54.951 256,54.951 256,23.604 "
            />
            <rect
              y="23.604"
              style={{ fill: "#C9AD91" }}
              width={512}
              height="87.761"
            />
            <rect
              x={256}
              y="23.604"
              style={{ fill: "#B38A65" }}
              width={256}
              height="87.761"
            />
            <rect
              x="397.646"
              y="23.604"
              style={{ fill: "#8A6746" }}
              width="114.354"
              height="87.761"
            />
            <g>
              
              <rect
                x="421.794"
                y="59.037"
                style={{ fill: "#FFFFFF" }}
                width="13.932"
                height="13.932"
              />
              <rect
                x="448.899"
                y="59.037"
                style={{ fill: "#FFFFFF" }}
                width="13.932"
                height="13.932"
              />
              <rect
                x="476.014"
                y="59.037"
                style={{ fill: "#FFFFFF" }}
                width="13.932"
                height="13.932"
              />
            </g>
            <path
              style={{ fill: "#FD7052" }}
              d="M362.163,283.967c0,58.211-47.188,105.399-105.399,105.399c-0.251,0-0.502,0-0.752-0.01 c-28.473-0.188-54.251-11.682-73.101-30.208c-16.927-16.635-28.264-38.933-30.929-63.843c-0.397-3.72-0.616-7.502-0.616-11.337 c0-31.587,13.908-59.925,35.913-79.245c0.24-0.209,0.481-0.418,0.721-0.616c8.579-7.398,18.369-13.427,29.017-17.774 c12.048-4.901,25.203-7.659,38.996-7.743c0.251-0.01,0.502-0.01,0.752-0.01C314.974,178.578,362.163,225.755,362.163,283.967z"
            />
            <path
              style={{ fill: "#FF4F18" }}
              d="M362.163,283.967c0,58.211-47.188,105.399-105.399,105.399c-0.251,0-0.502,0-0.752-0.01V178.589 c0.251-0.01,0.502-0.01,0.752-0.01C314.974,178.578,362.163,225.755,362.163,283.967z"
            />
            <polygon
              style={{ fill: "#FFFFFF" }}
              points="278.179,284.996 306.318,313.125 284.145,335.297 256.017,307.158 226.415,336.76 204.252,314.587 233.844,284.996 205.715,256.857 227.878,234.695 256.006,262.813 256.017,262.823 285.608,233.232 307.77,255.404 "
            />
            <polygon
              style={{ fill: "#D9D8DB" }}
              points="278.179,284.996 306.318,313.125 284.145,335.297 256.017,307.158 256.006,307.169 256.006,262.813 256.017,262.823 285.608,233.232 307.77,255.404 "
            />
          </g>
        </svg>
      </div>

      <div className="text-3xl font-extrabold">
        Oops! Something Went Wrong!!!
      </div>
      <div className="text-2xl font-bold">Please Try Again!!</div>
    </div>
  );
};

export default ErrorPage;
