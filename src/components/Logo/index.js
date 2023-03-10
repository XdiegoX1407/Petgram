import * as React from "react";
import { Link } from "react-router-dom";
import { Svg } from "./styles";

export const Logo = (props) => (
  <Link to="/">
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={415.231}
      height={138.8}
      preserveAspectRatio="xMidYMid"
      style={{
        background: "0 0",
      }}
      viewBox="42.384 5.6 415.231 138.8"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1={0.043}
          x2={0.957}
          y1={0.297}
          y2={0.703}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ffb200" />
          <stop offset={0.5} stopColor="#e10057" />
          <stop offset={1} stopColor="#5A1A80" />
        </linearGradient>
        <linearGradient id="d" x1={0} x2={0} y1={0} y2={1}>
          <stop offset={0.2} stopColor="#fff" stopOpacity={0.8} />
          <stop offset={0.8} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <filter id="c" width="300%" height="300%" x="-100%" y="-100%">
          <feMorphology radius={2} />
        </filter>
        <filter id="a" width="300%" height="300%" x="-100%" y="-100%">
          <feFlood floodColor="#fff" result="flood" />
          <feConvolveMatrix
            divisor={1}
            in="SourceGraphic"
            kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0"
            order="8,8"
            result="conv"
          />
          <feOffset dy={4} in="conv" result="offset" />
          <feComposite in="flood" in2="offset" operator="in" result="comp" />
          <feGaussianBlur in="offset" result="shadow" stdDeviation={3} />
          <feColorMatrix
            in="shadow"
            result="dark-shadow"
            values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0"
          />
          <feOffset dy={4} in="dark-shadow" result="offset-shadow" />
          <feOffset dy={2} in="conv" result="offset-2" />
          <feComposite
            in="offset"
            in2="offset-2"
            operator="out"
            result="edge-diff"
          />
          <feGaussianBlur in="edge-diff" result="edge-blur" stdDeviation={1} />
          <feColorMatrix
            in="edge-blur"
            result="edge-shadow"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feComposite
            in="edge-shadow"
            in2="offset"
            operator="in"
            result="edge-shadow-in"
          />
          <feOffset dy={1} in="edge-shadow-in" result="edge-shadow-final" />
          <feMerge result="out">
            <feMergeNode in="offset-shadow" />
            <feMergeNode in="comp" />
            <feMergeNode in="edge-shadow-final" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          fill="url(#b)"
          d="M.9 14.21V3.71h2.81v-28.8H.9v-10.49h17.53v4.35q1.6-2.05 4.13-3.65t5.79-1.6q6.53 0 9.83 4.86 3.29 4.87 3.29 13.83T38.18-3.97Q34.88.9 28.35.9q-3.26 0-5.79-1.6-2.53-1.6-4.13-3.65v8.06h4.42v10.5H.9ZM22.14-10.5q1.86 0 2.79-.99.93-.99.93-3.1v-6.4q0-2.11-.93-3.11-.93-.99-2.79-.99-1.85 0-2.78.99-.93 1-.93 3.11v6.4q0 2.11.93 3.1.93.99 2.78.99ZM62.34.9q-9.09 0-14.21-4.77-5.12-4.77-5.12-13.92t5.12-13.92q5.12-4.77 14.21-4.77 9.02 0 13.02 4.7 4 4.71 4 11.68v4.61H58.62v.39q0 2.36 1.41 3.48t4.67 1.12q3.91 0 7.43-.57 3.52-.58 6.14-1.47V-2.3q-2.24 1.21-6.56 2.2-4.32 1-9.37 1Zm-3.72-23.43h7.43v-.77q0-2.17-.93-3.13t-2.78-.96q-1.86 0-2.79.99-.93.99-.93 3.1v.77ZM97.09.9Q90.3.9 86.88-2.4q-3.42-3.3-3.42-11.1v-11.59h-2.82v-10.49q2.43 0 3.65-1.25 1.21-1.25 1.21-3.43v-2.88h13.57v7.56h8.64v10.49h-8.64v10.5q0 2.11.93 3.1.93.99 2.78.99 2.44 0 5.32-.57v10.05q-1.8.7-4.84 1.31-3.04.61-6.17.61Zm31.81 14.2q-4.61 0-8.8-.64-4.2-.64-6.5-1.47V2.5q6.78 1.21 12.16 1.21 3.65 0 5.28-1.12 1.63-1.12 1.63-4.19v-2.75q-1.6 2.05-4.13 3.65-2.52 1.6-5.79 1.6-6.53 0-9.82-4.87-3.3-4.86-3.3-13.82t3.3-13.83q3.29-4.86 9.82-4.86 3.27 0 5.79 1.6 2.53 1.6 4.13 3.65v-4.35h17.54v10.49h-2.82v22.53q0 9.28-4.61 13.47-4.6 4.19-13.88 4.19Zm.06-25.6q1.86 0 2.78-.99.93-.99.93-3.1v-6.4q0-2.11-.93-3.11-.92-.99-2.78-.99-1.86 0-2.78.99-.93 1-.93 3.11v6.4q0 2.11.93 3.1.92.99 2.78.99Zm50.37-25.98q1.28 0 2.43.26 1.15.25 1.92.64v12.22q-2.62-1.09-5.63-1.09-4.03 0-6.21 2.11-2.18 2.12-2.18 6.28v5.56h5.76V0h-23.29v-10.5h2.81v-14.59h-2.81v-10.49h17.53v4.67q1.8-2.69 4.1-4.13t5.57-1.44Zm40.89 25.98h2.82V0h-16.9v-4.35q-1.4 2.05-3.93 3.65-2.53 1.6-6.18 1.6-4.8 0-7.55-2.56t-2.75-7.24q0-12.09 20.54-12.41-.19-2.18-1.66-2.98-1.47-.8-4.99-.8-2.88 0-6.18.61t-6.05 1.63v-11.77q3.39-.84 7.36-1.35 3.97-.51 7.75-.51 9.53 0 13.63 3.46 4.09 3.45 4.09 10.68v11.84Zm-14.08-4.09v-.39q-2.88 0-4.44.77-1.57.77-1.57 2.56 0 1.09.67 1.76.67.67 1.89.67 1.66 0 2.56-1.4.89-1.41.89-3.97Zm80.77 4.09h2.82V0H269.5v-10.5h2.69v-10.49q0-2.11-.89-3.11-.9-.99-2.69-.99-3.84 0-3.84 4.1v10.49h2.69V0h-20.1v-10.5h2.69v-10.49q0-2.11-.9-3.11-.89-.99-2.69-.99-3.84 0-3.84 4.1v10.49h2.69V0h-20.22v-10.5h2.81v-14.59h-2.81v-10.49h17.53v4.99q4.61-5.89 11.52-5.89 3.91 0 6.37 1.82 2.47 1.83 3.49 5.16 2.3-3.33 5.28-5.12 2.98-1.8 7.01-1.8 5.31 0 7.97 3.33 2.65 3.33 2.65 9.15v13.44Z"
          transform="translate(104.685 104.12)"
        />
      </g>
      <g filter="url(#c)">
        <path
          fill="url(#d)"
          d="M.9 14.21V3.71h2.81v-28.8H.9v-10.49h17.53v4.35q1.6-2.05 4.13-3.65t5.79-1.6q6.53 0 9.83 4.86 3.29 4.87 3.29 13.83T38.18-3.97Q34.88.9 28.35.9q-3.26 0-5.79-1.6-2.53-1.6-4.13-3.65v8.06h4.42v10.5H.9ZM22.14-10.5q1.86 0 2.79-.99.93-.99.93-3.1v-6.4q0-2.11-.93-3.11-.93-.99-2.79-.99-1.85 0-2.78.99-.93 1-.93 3.11v6.4q0 2.11.93 3.1.93.99 2.78.99ZM62.34.9q-9.09 0-14.21-4.77-5.12-4.77-5.12-13.92t5.12-13.92q5.12-4.77 14.21-4.77 9.02 0 13.02 4.7 4 4.71 4 11.68v4.61H58.62v.39q0 2.36 1.41 3.48t4.67 1.12q3.91 0 7.43-.57 3.52-.58 6.14-1.47V-2.3q-2.24 1.21-6.56 2.2-4.32 1-9.37 1Zm-3.72-23.43h7.43v-.77q0-2.17-.93-3.13t-2.78-.96q-1.86 0-2.79.99-.93.99-.93 3.1v.77ZM97.09.9Q90.3.9 86.88-2.4q-3.42-3.3-3.42-11.1v-11.59h-2.82v-10.49q2.43 0 3.65-1.25 1.21-1.25 1.21-3.43v-2.88h13.57v7.56h8.64v10.49h-8.64v10.5q0 2.11.93 3.1.93.99 2.78.99 2.44 0 5.32-.57v10.05q-1.8.7-4.84 1.31-3.04.61-6.17.61Zm31.81 14.2q-4.61 0-8.8-.64-4.2-.64-6.5-1.47V2.5q6.78 1.21 12.16 1.21 3.65 0 5.28-1.12 1.63-1.12 1.63-4.19v-2.75q-1.6 2.05-4.13 3.65-2.52 1.6-5.79 1.6-6.53 0-9.82-4.87-3.3-4.86-3.3-13.82t3.3-13.83q3.29-4.86 9.82-4.86 3.27 0 5.79 1.6 2.53 1.6 4.13 3.65v-4.35h17.54v10.49h-2.82v22.53q0 9.28-4.61 13.47-4.6 4.19-13.88 4.19Zm.06-25.6q1.86 0 2.78-.99.93-.99.93-3.1v-6.4q0-2.11-.93-3.11-.92-.99-2.78-.99-1.86 0-2.78.99-.93 1-.93 3.11v6.4q0 2.11.93 3.1.92.99 2.78.99Zm50.37-25.98q1.28 0 2.43.26 1.15.25 1.92.64v12.22q-2.62-1.09-5.63-1.09-4.03 0-6.21 2.11-2.18 2.12-2.18 6.28v5.56h5.76V0h-23.29v-10.5h2.81v-14.59h-2.81v-10.49h17.53v4.67q1.8-2.69 4.1-4.13t5.57-1.44Zm40.89 25.98h2.82V0h-16.9v-4.35q-1.4 2.05-3.93 3.65-2.53 1.6-6.18 1.6-4.8 0-7.55-2.56t-2.75-7.24q0-12.09 20.54-12.41-.19-2.18-1.66-2.98-1.47-.8-4.99-.8-2.88 0-6.18.61t-6.05 1.63v-11.77q3.39-.84 7.36-1.35 3.97-.51 7.75-.51 9.53 0 13.63 3.46 4.09 3.45 4.09 10.68v11.84Zm-14.08-4.09v-.39q-2.88 0-4.44.77-1.57.77-1.57 2.56 0 1.09.67 1.76.67.67 1.89.67 1.66 0 2.56-1.4.89-1.41.89-3.97Zm80.77 4.09h2.82V0H269.5v-10.5h2.69v-10.49q0-2.11-.89-3.11-.9-.99-2.69-.99-3.84 0-3.84 4.1v10.49h2.69V0h-20.1v-10.5h2.69v-10.49q0-2.11-.9-3.11-.89-.99-2.69-.99-3.84 0-3.84 4.1v10.49h2.69V0h-20.22v-10.5h2.81v-14.59h-2.81v-10.49h17.53v4.99q4.61-5.89 11.52-5.89 3.91 0 6.37 1.82 2.47 1.83 3.49 5.16 2.3-3.33 5.28-5.12 2.98-1.8 7.01-1.8 5.31 0 7.97 3.33 2.65 3.33 2.65 9.15v13.44Z"
          transform="translate(104.839 104.12)"
        />
      </g>
    </Svg>
  </Link>
);
