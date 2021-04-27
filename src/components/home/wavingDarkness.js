import React from "react"

import styled from "styled-components"

const WavingDarkness = () => {
  return (
    <div className="waving-darkness">
      <div className="waves">
        <svg
          width="100%"
          height="200px"
          fill="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            width="100%"
            fill="#fff"
            opacity="0.1"
            d="
          M0 67
          C 273,183
            822,-40
            3840.00,106
          V 359
          H 0
          V 67
          Z"
          >
            <animate
              repeatCount="indefinite"
              fill="url(#grad1)"
              attributeName="d"
              dur="10s"
              attributeType="XML"
              values="
            M0 77
            C 473,283
              822,-40
              3840,116
            V 359
            H 0
            V 67
            Z;
            M0 77
            C 473,-40
              1222,283
              3840,136
            V 359
            H 0
            V 67
            Z;
            M0 77
            C 973,260
              1722,-53
              3840,120
            V 359
            H 0
            V 67
            Z;
            M0 77
            C 473,283
              822,-40
              3840,116
            V 359
            H 0
            V 67
            Z
            "
            ></animate>
          </path>
        </svg>
      </div>

      <div className="waves">
        <svg
          width="100%"
          height="220px"
          fill="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            opacity="0.1"
            d="
          M0 67
          C 273,183
            822,-40
            3840.00,106
          V 359
          H 0
          V 67
          Z"
          >
            <animate
              repeatCount="indefinite"
              fill="url(#grad1)"
              attributeName="d"
              dur="8s"
              attributeType="XML"
              values="
            M0 77
            C 473,283
              822,-40
              3840,116
            V 359
            H 0
            V 67
            Z;
            M0 77
            C 473,-40
              1222,283
              3840,136
            V 359
            H 0
            V 67
            Z;
            M0 77
            C 973,260
              1722,-53
              3840,120
            V 359
            H 0
            V 67
            Z;
            M0 77
            C 473,283
              822,-40
              3840,116
            V 359
            H 0
            V 67
            Z
            "
            ></animate>
          </path>
        </svg>
      </div>
      <div className="waves" style={{ bottom: "-80px" }}>
        <svg
          width="100%"
          height="260px"
          fil="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="
          M0 67
          C 273,183
            822,-40
            3840.00,106
          V 359
          H 0
          V 67
          Z"
          >
            <animate
              repeatCount="indefinite"
              fill="url(#grad1)"
              attributeName="d"
              dur="12s"
              attributeType="XML"
              values="
            M0 77
            C 473,283
              822,-40
              3840,116
            V 359
            H 0
            V 67
            Z;
            M0 77
            C 473,-40
              1222,283
              3840,136
            V 359
            H 0
            V 67
            Z;
            M0 77
            C 973,260
              1722,-53
              3840,120
            V 359
            H 0
            V 67
            Z;
            M0 77
            C 473,283
              822,-40
              3840,116
            V 359
            H 0
            V 67
            Z
            "
            ></animate>
          </path>
        </svg>
      </div>
    </div>
  )
}

export default WavingDarkness
