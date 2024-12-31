import React from 'react';

export default function EmaSvg({ message, name, dateStr, templateName, eyeColor, stripeColor1, stripeColor2, singleColor }) {
    const fontSize = message.length <= 7 ? "2.8em" :
        message.length <= 20 ? "1.8em" :
            message.length <= 40 ? "1.5em" :
                message.length <= 60 ? "1.2em" : "1em";

    const charcterSvgs = {
        dappy: (
            <g
                id="use464"
                style={{ fill: '#db8c81' }}
                transform="matrix(0.11675767,0,0,0.11657945,322.92656,265.19821)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M 530,270.828 C 530,124.577 411.357,6.01685 265.003,6.01685 118.643,6.01685 0,124.577 0,270.828 V 409.23 c 0,64.862 53.1101,117.935 118.023,117.935 h 293.96 C 476.89,527.165 530,474.092 530,409.23 Z"
                    fill="#ffffff"
                    id="path783" />
                <mask
                    id="mask787"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="39"
                    y="55"
                    width="455"
                    height="446">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M 493.04,282.859 C 493.04,242.218 481.083,84.4307 328.083,60.5287 192.129,39.2851 79.4516,82.0429 50.768,218.31 22.0783,354.577 48.3742,481.28 148.782,493.238 249.196,505.189 277.88,500.407 383.069,495.625 488.258,490.844 493.04,323.499 493.04,282.859 Z"
                        fill={eyeColor}
                        id="path785" />
                </mask>
                <g
                    mask="url(#mask0-7-3)"
                    id="g795">
                    <rect
                        x="309.319"
                        y="-350.46701"
                        width="148.78"
                        height="1786.53"
                        transform="rotate(25.3087,309.319,-350.467)"
                        fill={eyeColor}
                        id="rect789" />
                    <rect
                        x="467.60501"
                        y="-345.08499"
                        width="161.65601"
                        height="1941.13"
                        transform="rotate(25.3087,467.605,-345.085)"
                        fill={stripeColor1}
                        id="rect791" />
                    <rect
                        x="666.44098"
                        y="-387.70999"
                        width="179.817"
                        height="2159.21"
                        transform="rotate(25.3087,666.441,-387.71)"
                        fill={stripeColor2}
                        id="rect793" />
                </g>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m 360.968,167 c -44.73,0 -82.857,28.299 -97.448,67.972 C 248.928,195.299 210.802,167 166.065,167 108.734,167 62.2588,213.475 62.2588,270.807 c 0,57.331 46.4752,103.806 103.8062,103.806 44.737,0 82.863,-28.299 97.455,-67.971 14.591,39.672 52.718,67.971 97.448,67.971 57.331,0 103.806,-46.475 103.806,-103.806 C 464.774,213.475 418.299,167 360.968,167 Z"
                    fill="#ffffff"
                    id="path797" />
                <path
                    d="M 130.708,210 C 106.104,210 91,231.473 91,249.08 c 0,38.076 43.377,73.425 74,95.92 30.623,-22.503 74,-57.844 74,-95.92 C 239,231.471 223.903,210 199.292,210 185.549,210 173.804,220.934 165,231.315 156.188,220.933 144.452,210 130.708,210 Z"
                    fill={eyeColor}
                    id="path799" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m 247.719,229.838 c 0,16.456 -13.34,29.791 -29.79,29.791 -16.456,0 -29.79,-13.335 -29.79,-29.791 0,-16.45 13.334,-29.79 29.79,-29.79 16.45,0 29.79,13.34 29.79,29.79 z"
                    fill="#ffffff"
                    id="path801" />
                <path
                    d="M 324.708,204 C 300.104,204 285,225.474 285,243.081 c 0,38.076 43.377,73.425 74,95.92 30.623,-22.503 74,-57.844 74,-95.92 C 433,225.472 417.903,204 393.292,204 379.549,204 367.804,214.935 359,225.316 350.188,214.934 338.452,204 324.708,204 Z"
                    fill={eyeColor}
                    id="path803" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m 441.719,223.839 c 0,16.456 -13.34,29.791 -29.79,29.791 -16.456,0 -29.79,-13.335 -29.79,-29.791 0,-16.45 13.334,-29.79 29.79,-29.79 16.45,0 29.79,13.34 29.79,29.79 z"
                    fill="#ffffff"
                    id="path805" />
            </g>
        ),
        // dragon: (
        //     <g
        //         id="g1"
        //         transform="matrix(0.16236386,0,0,0.16236386,311.14911,263.32786)">
        //         <path
        //             style={{ fill: singleColor }}
        //             d="m 461.046,372.68 24.61,-2.894 c -21.101,-24.89 -42.748,-42.21 -62.228,-54.114 l 21.646,-11.91 -55.204,-31.391 37.338,-17.858 -64.94,-37.338 27.601,-17.858 -60.774,-21.27 c 5.808,-7.003 8.066,-14.216 7.94,-20.919 L 456.529,67.221 c 3.138,-2.362 3.942,-6.752 1.86,-10.079 l -3.621,-5.746 c -2.222,-3.551 -6.885,-4.613 -10.436,-2.397 l -56.798,35.633 -3.816,19.13 -6.451,-52.652 c -11.784,-13.63 -18.83,-1.685 -18.83,-1.685 l 0.168,54.658 -39.002,26.142 c -6.248,-3.027 -13.014,-3.341 -18.2,0.489 L 263.98,154.8 c 0,0 -41.868,-12.302 -67.847,6.094 -7.654,5.424 -17.313,17.321 -60.606,9.737 -4.501,-0.79 -33.208,-3.872 -59.174,-11.33 -0.965,-12.106 -10.988,-21.668 -23.345,-21.668 -3.285,0 -6.41,0.678 -9.254,1.902 -21.836,-37.716 -60.313,-9.373 -35.947,33.263 l 12.029,24.82 7.283,3.271 7.786,3.495 c -0.112,12.421 1.86,38.911 19.515,50.94 -0.923,-2.74 2.859,-23.401 9.31,-38.002 l 3.02,1.356 12.134,5.312 c 0.657,12.923 4.138,32.529 18.383,42.245 -0.762,-2.306 1.964,-17.991 6.864,-31.187 l 23.862,10.45 c 1.965,11.365 6.57,24.065 17.167,31.292 -0.587,-1.789 0.922,-11.603 3.9,-22.066 l 36.807,16.126 c 1.328,0.594 2.257,1.852 2.446,3.292 l 0.783,12.854 c 0.272,2.118 -1.076,4.096 -3.159,4.613 l -44.083,22.318 c -7.039,-8.639 -13.036,-19.458 -13.064,-21.366 -6.57,8.876 -6.263,20.717 -4.404,30.209 l -18.27,9.254 c -8.464,-10.666 -16.034,-26.77 -15.866,-29.216 -10.023,11.547 -8.73,29.076 -6.402,40.483 l -11.568,5.864 c 0,0 2.872,4.613 8.01,12.134 6.717,9.862 17.509,28.797 22.192,32.474 9.352,7.318 22.338,15.237 22.338,15.237 l -7.269,-26.861 20.675,7.129 v -16.237 c 135.192,-41.602 168.602,58.6 181.121,94.387 H 512 c -8.555,-22.249 -40.47,-79.963 -50.954,-94.738 z"
        //             id="path1" />
        //     </g>
        // ),
        snake: (
            <g
                id="g2"
                transform="matrix(0.15145279,0,0,0.15145279,313.06868,261.32738)">
                <path
                    class="st0"
                    d="m 395.25,443.374 c -2.552,-2.5 -4.37,-5.249 -5.636,-8.24 -1.886,-4.469 -2.424,-9.521 -1.552,-14.315 0.886,-4.795 3.029,-9.21 6.748,-13.035 l 47.694,-48.899 c 8.953,-9.164 15.724,-19.852 20.148,-31.19 6.65,-17.011 8.12,-35.424 4.484,-53.041 -3.613,-17.595 -12.482,-34.523 -26.267,-47.944 -9.164,-8.953 -19.86,-15.724 -31.19,-20.147 -17.011,-6.65 -35.424,-8.12 -53.034,-4.491 -17.602,3.62 -34.53,12.489 -47.959,26.274 l -77.816,79.77 c -2.499,2.552 -5.256,4.378 -8.248,5.636 -4.46,1.886 -9.52,2.424 -14.307,1.56 -4.802,-0.894 -9.21,-3.037 -13.034,-6.755 -2.552,-2.492 -4.37,-5.242 -5.635,-8.241 -1.886,-4.469 -2.424,-9.513 -1.553,-14.3 0.886,-4.802 3.029,-9.218 6.74,-13.042 l 20.087,-20.586 c 8.952,-9.165 15.723,-19.86 20.146,-31.19 6.651,-17.012 8.12,-35.424 4.484,-53.034 -3.469,-16.906 -11.831,-33.137 -24.677,-46.293 L 204.194,86.409 C 198.15,66.292 182.024,50.795 161.688,45.539 l -40.34,-10.437 c -7.513,-1.939 -15.496,0.288 -20.919,5.832 L 85.613,56.125 c -5.423,5.552 -7.446,13.588 -5.316,21.048 l 11.429,40.074 c 5.764,20.208 21.654,35.932 41.923,41.491 l 33.174,9.089 c 0,0 3.136,6.514 4.393,9.506 1.886,4.477 2.424,9.52 1.56,14.307 -0.894,4.803 -3.037,9.218 -6.756,13.043 l -20.08,20.587 c -8.945,9.172 -15.716,19.859 -20.146,31.19 -6.643,17.011 -8.112,35.424 -4.477,53.041 3.606,17.595 12.482,34.531 26.26,47.952 9.164,8.953 19.859,15.724 31.19,20.148 17.012,6.65 35.424,8.112 53.042,4.484 17.602,-3.62 34.523,-12.482 47.951,-26.267 l 77.824,-79.778 c 2.5,-2.545 5.249,-4.37 8.24,-5.628 4.469,-1.886 9.521,-2.432 14.3,-1.56 4.802,0.894 9.225,3.037 13.042,6.748 2.56,2.5 4.378,5.249 5.635,8.24 1.893,4.469 2.431,9.521 1.56,14.308 -0.886,4.802 -3.037,9.21 -6.748,13.042 l -47.702,48.891 c -8.953,9.164 -15.716,19.867 -20.147,31.198 -6.643,17.004 -8.112,35.416 -4.476,53.034 3.606,17.602 12.482,34.522 26.26,47.952 41.18,40.165 117.088,11.262 123.087,-18.05 -21.594,1.538 -55.397,-7.574 -75.385,-30.841 z"
                    style={{ fill: singleColor }}
                    id="path1" />
                <path
                    class="st0"
                    d="m 92.786,42.461 c 0,0 -32.19,-30.403 -31.713,-42.461 -7.165,7.166 0.576,20.284 0.576,20.284 0,0 -13.118,-7.741 -20.284,-0.576 12.066,-0.478 42.468,31.706 42.468,31.706 z"
                    style={{ fill: singleColor }}
                    id="path2" />
            </g>
        ),
        fuji: (
            <g
                id="g19"
                transform="matrix(1.6287108,0,0,1.6287108,308.16909,263.74215)">
            <path
                style={{ fill: singleColor }}
                d="m 21.442,24.339 c 0.072,-0.009 1.777,-0.21 2.865,-0.21 0.382,0 0.65,0.024 0.846,0.082 l 0.895,-0.493 c 0.08,-0.044 0.17,-0.066 0.258,-0.066 0.114,0 0.229,0 0.323,0.072 0.009,0.006 0.812,0.568 1.614,0.568 l 0.066,-0.076 c 0.008,0 0.015,0 0.022,0 0.112,0 0.222,0.11 0.312,0.176 0.084,0.061 6.545,4.734 15.101,8.481 0.024,-0.382 0.058,-0.759 0.058,-1.146 0,-9.622 -7.801,-17.422 -17.423,-17.422 -9.292,0 -16.863,7.281 -17.372,16.446 4.3,-1.952 8.403,-4.068 12.227,-6.342 0.063,-0.037 0.134,-0.061 0.208,-0.07 z"
                id="path18" />
            <path
                style={{ fill: singleColor }}
                d="m 43.713,33.459 c -8.795,-3.8 -15.382,-8.561 -15.382,-8.561 -0.029,0.001 -0.059,0.002 -0.089,0.002 -1.004,0 -1.937,-0.715 -1.937,-0.715 l -1.183,0.649 c 0.026,-0.128 -0.328,-0.172 -0.822,-0.172 -1.069,0 -2.807,0.206 -2.807,0.206 -4.226,2.512 -8.476,4.659 -12.519,6.483 -1.831,0.826 -3.623,1.594 -5.344,2.286 0.554,0.343 1.031,0.632 1.14,0.632 0.271,0 -4.77,2.457 -4.77,2.457 l 4.036,-1.24 v 0.359 0.182 l 3.152,-0.631 3.287,-0.777 -3.089,2.107 5.083,-2.107 1.01,1.049 2.984,-3.157 -0.447,2.706 2.257,-1.264 c 0,0 -3.425,3.608 -3.155,3.697 0.003,0.002 0.007,0.002 0.012,0.002 0.38,0 5.218,-3.518 5.218,-3.518 0,0 -2,2.705 -1.496,2.887 0.042,0.014 0.124,0.021 0.239,0.021 1.276,0 6.72,-0.909 9.283,-2.729 0.878,-0.623 1.562,-0.837 2.084,-0.837 1.142,0 1.522,1.019 1.522,1.019 l 4.148,2.164 -1.714,-1.577 c 0,0 0.281,-0.025 0.709,-0.025 0.854,0 2.298,0.101 3.259,0.701 0.268,0.167 0.436,0.235 0.532,0.235 0.427,0 -0.532,-1.317 -0.532,-1.317 0,0 6.672,2.254 7.395,2.345 0.02,0.002 0.035,0.004 0.051,0.004 0.521,0 -2.125,-1.537 -2.125,-1.537 l 4.328,0.812 3.895,0.386 c 0.01,-0.088 0.022,-0.176 0.031,-0.264 -2.866,-0.806 -5.649,-1.843 -8.244,-2.963 z"
                id="path19" />
            </g>
        ),
        origami: (
            <g
                id="g20"
                transform="matrix(1.6916911,0,0,1.6916911,321.11202,265.25726)">
                <path
                    style={{ fill: singleColor }}
                    d="m 38.159,7.992 -11.885,14.42 c -0.351,0.427 -0.668,1.218 -0.709,1.769 l -0.752,10.26 c -0.041,0.551 0.354,1.132 0.881,1.298 l 1.307,0.412 c 0.527,0.166 1.109,-0.119 1.302,-0.638 L 38.446,8.158 C 38.639,7.64 38.51,7.566 38.159,7.992 Z"
                    id="path18" />
                <path
                    style={{ fill: singleColor }}
                    d="M 12.154,21.367 6.328,13.651 C 5.995,13.21 5.307,13.012 4.79,13.208 L 3.621,13.652 C 3.363,13.75 3.092,13.945 2.864,14.18 2.506,14.548 2.067,15.799 1.706,16.843 l -0.983,2.845 c -0.361,1.044 -0.896,2.211 -0.668,2.361 0.076,0.047 0.225,-0.017 0.429,-0.201 l 3.163,-2.872 c 0.409,-0.371 0.884,-0.249 1.065,0.273 1.191,3.433 4.638,13.181 5.727,16.259 0.184,0.521 0.76,0.805 1.285,0.635 l 0.904,-0.292 c 0.526,-0.171 0.924,-0.755 0.89,-1.306 l -0.7,-11.383 c -0.034,-0.55 -0.331,-1.354 -0.664,-1.795 z"
                    id="path19" />
                <path
                    style={{ fill: singleColor }}
                    d="M 23.677,18.69 19.966,4.671 C 19.683,3.603 19.476,2.337 19.2,2.338 18.924,2.339 18.722,3.606 18.444,4.675 l -4.145,15.948 c -0.139,0.534 -0.228,1.415 -0.2,1.965 l 0.092,1.783 0.517,9.969 c 0.009,0.174 0.018,0.334 0.026,0.473 0.015,0.261 0.242,0.38 0.514,0.304 0.146,-0.04 0.315,-0.084 0.496,-0.128 l 2.479,-0.604 c 0.537,-0.129 1.406,-0.129 1.943,0.002 l 3.405,0.838 c 0.022,0.007 0.649,-10.018 0.649,-10.018 l 0.162,-2.619 c 0.017,-0.276 0.004,-0.633 -0.03,-0.989 -0.054,-0.544 -0.392,-1.841 -0.675,-2.909 z"
                    id="path20" />
            </g>
        ),
        flower: (
            <g
                id="g17"
                transform="matrix(0.23605442,0,0,0.2328121,322.32319,267.68342)">
                <path
                    style={{ fill: singleColor }}
                    d="m 224.981,89.059 c 5.173,-11.027 9.046,-24.691 10.901,-41.679 -4.821,-0.525 -9.338,-0.776 -13.724,-0.895 -0.173,15.09 -2.685,28.474 -7.53,40.079 3.443,0.633 6.88,1.415 10.353,2.495 z"
                    id="path1" />
                <path
                    style={{ fill: singleColor }}
                    d="m 178.075,50.56 c 0.167,1.002 0.28,2.005 0.418,3.001 1.128,8.276 1.122,16.445 -0.37,24.452 -0.746,4.04 -1.862,7.829 -3.151,11.468 7.536,-2.661 15.902,-4.35 25.144,-4.35 2.846,0 5.698,0.173 8.568,0.495 4.583,-10.448 7.411,-23.354 7.59,-39.196 0.012,-0.985 0.024,-1.963 0.018,-2.966 -0.012,-0.973 -0.066,-1.987 -0.095,-2.983 -0.131,-4.356 -0.388,-8.855 -0.925,-13.646 -16.409,1.832 -29.709,5.543 -40.521,10.478 1.146,3.425 2.094,6.826 2.816,10.215 0.204,1.015 0.317,2.024 0.508,3.032 z"
                    id="path2" />
                <path
                    style={{ fill: singleColor }}
                    d="M 89.479,37.469 C 78.661,32.564 65.367,28.895 48.97,27.099 c -0.525,4.791 -0.776,9.296 -0.895,13.658 14.47,0.161 27.364,2.488 38.624,6.934 0.71,-3.39 1.641,-6.797 2.78,-10.222 z"
                    id="path3" />
                <path
                    style={{ fill: singleColor }}
                    d="m 49.638,86.582 c 1.02,-0.191 2.035,-0.334 3.043,-0.483 0.967,-0.143 1.939,-0.352 2.906,-0.459 2.906,-0.322 5.794,-0.507 8.664,-0.507 9.225,0 17.578,1.683 25.103,4.338 C 88.077,85.873 86.967,82.126 86.215,78.14 84.705,70.15 84.67,62 85.779,53.741 75.582,49.51 63.165,46.879 48.015,46.712 47.49,46.706 47.007,46.664 46.476,46.664 c -0.442,0 -0.925,0.036 -1.372,0.042 -0.967,0.006 -1.981,0.054 -2.977,0.084 -4.374,0.125 -8.891,0.388 -13.7,0.925 1.88,16.839 5.734,30.413 10.866,41.374 3.466,-1.087 6.914,-1.868 10.345,-2.507 z"
                    id="path4" />
                <path
                    style={{ fill: singleColor }}
                    d="m 39.161,175.608 c -5.09,10.955 -8.897,24.518 -10.734,41.327 4.821,0.525 9.344,0.776 13.724,0.895 0.167,-14.929 2.619,-28.193 7.357,-39.704 -3.432,-0.638 -6.881,-1.432 -10.347,-2.518 z"
                    id="path5" />
                <path
                    style={{ fill: singleColor }}
                    d="m 86.233,213.766 c -0.173,-1.002 -0.286,-1.999 -0.424,-3.001 -1.134,-8.282 -1.122,-16.445 0.37,-24.458 0.728,-3.872 1.79,-7.518 3.007,-11.015 -7.494,2.631 -15.812,4.29 -24.989,4.29 -2.894,0 -5.8,-0.185 -8.73,-0.513 -4.487,10.376 -7.256,23.169 -7.435,38.82 -0.012,0.979 -0.024,1.957 -0.018,2.971 0.012,0.967 0.066,1.981 0.095,2.983 0.131,4.35 0.388,8.849 0.925,13.646 16.409,-1.838 29.709,-5.549 40.521,-10.478 -1.152,-3.425 -2.088,-6.832 -2.81,-10.215 -0.213,-1.007 -0.333,-2.016 -0.512,-3.03 z"
                    id="path6" />
                <path
                    style={{ fill: singleColor }}
                    d="m 174.835,226.84 c 10.812,4.905 24.112,8.58 40.509,10.37 0.525,-4.791 0.77,-9.296 0.889,-13.658 -14.47,-0.155 -27.364,-2.482 -38.63,-6.934 -0.709,3.395 -1.634,6.802 -2.768,10.222 z"
                    id="path7" />
                <path
                    style={{ fill: singleColor }}
                    d="m 214.831,178.102 c -1.02,0.197 -2.029,0.34 -3.043,0.489 -0.973,0.137 -1.951,0.352 -2.912,0.465 -2.96,0.334 -5.895,0.525 -8.819,0.525 -9.165,0 -17.465,-1.647 -24.947,-4.278 1.199,3.461 2.261,7.053 2.983,10.872 1.504,7.99 1.539,16.14 0.43,24.399 10.191,4.231 22.614,6.856 37.764,7.035 0.531,0 1.008,0.048 1.545,0.048 0.436,0 0.919,-0.036 1.366,-0.048 0.973,-0.012 1.987,-0.06 2.977,-0.089 4.368,-0.125 8.891,-0.388 13.7,-0.925 -1.862,-16.654 -5.651,-30.127 -10.705,-41.022 -3.459,1.091 -6.908,1.891 -10.339,2.529 z"
                    id="path8" />
                <path
                    style={{ fill: singleColor }}
                    d="m 159.321,42.732 c 0.382,0.943 0.722,1.897 1.074,2.846 1.14,3.091 2.076,6.2 2.81,9.344 0.245,1.05 0.555,2.094 0.746,3.151 0.209,1.08 0.37,2.16 0.531,3.246 0.376,2.649 0.716,5.305 0.817,7.99 0.346,9.541 -1.169,18.378 -3.64,26.314 1.808,-1.05 3.705,-2.017 5.651,-2.954 4.583,-10.293 7.232,-22.495 5.633,-36.523 -0.125,-1.032 -0.322,-2.094 -0.483,-3.145 -0.161,-1.02 -0.28,-2.023 -0.483,-3.061 -0.632,-3.21 -1.569,-6.528 -2.661,-9.911 -0.31,-0.955 -0.573,-1.897 -0.919,-2.864 -0.34,-0.925 -0.758,-1.874 -1.122,-2.804 -4.231,-10.651 -10.818,-22.083 -20.627,-34.304 -3.783,3.037 -7.154,6.062 -10.335,9.082 9.666,9.881 17.047,20.12 21.869,30.711 0.423,0.954 0.746,1.921 1.139,2.882 z"
                    id="path9" />
                <path
                    style={{ fill: singleColor }}
                    d="m 102.726,95.616 c 1.372,0.788 2.703,1.599 3.992,2.44 1.533,0.996 2.983,2.023 4.41,3.067 0.31,0.227 0.644,0.453 0.949,0.68 3.747,-2.488 7.978,-4.302 12.518,-5.263 0.489,-0.101 0.985,-0.167 1.48,-0.251 0.531,-0.09 1.056,-0.179 1.593,-0.245 0.483,-0.06 0.967,-0.113 1.456,-0.155 0.537,-0.048 1.086,-0.06 1.629,-0.084 0.465,-0.018 0.925,-0.072 1.396,-0.072 0.006,0 0.012,0 0.012,0 0.018,0 0.036,0 0.054,0 0.477,0 0.943,0.054 1.414,0.072 0.543,0.024 1.092,0.036 1.629,0.084 0.495,0.042 0.979,0.101 1.468,0.161 0.531,0.066 1.05,0.149 1.575,0.239 0.501,0.084 1.014,0.155 1.504,0.263 4.523,0.973 8.741,2.781 12.471,5.263 0.316,-0.239 0.662,-0.471 0.979,-0.71 4.242,-10.12 7.053,-22.215 5.794,-35.574 -0.119,-1.175 -0.274,-2.369 -0.448,-3.562 -0.155,-1.08 -0.37,-2.172 -0.579,-3.264 -0.609,-3.079 -1.384,-6.2 -2.476,-9.386 -0.334,-0.967 -0.752,-1.945 -1.134,-2.918 -0.37,-0.961 -0.698,-1.915 -1.128,-2.882 -4.266,-9.786 -11.063,-19.971 -21.188,-30.318 -0.656,-0.674 -1.378,-1.349 -2.065,-2.017 -0.698,-0.68 -1.432,-1.366 -2.16,-2.053 -3.186,-3.007 -6.558,-6.021 -10.341,-9.046 -9.798,12.262 -16.361,23.718 -20.568,34.393 -0.37,0.937 -0.782,1.886 -1.116,2.81 -0.346,0.973 -0.609,1.915 -0.919,2.87 -1.092,3.389 -2.017,6.719 -2.637,9.929 -0.203,1.032 -0.31,2.029 -0.465,3.043 -0.161,1.056 -0.364,2.124 -0.477,3.156 -1.545,13.962 1.11,26.099 5.68,36.35 1.962,0.957 3.872,1.936 5.698,2.98 z"
                    id="path10" />
                <path
                    style={{ fill: singleColor }}
                    d="m 104.981,221.589 c -0.388,-0.943 -0.722,-1.892 -1.074,-2.846 -1.14,-3.091 -2.076,-6.2 -2.81,-9.332 -0.245,-1.056 -0.549,-2.1 -0.752,-3.151 -0.203,-1.08 -0.364,-2.16 -0.525,-3.246 -0.382,-2.649 -0.722,-5.316 -0.817,-7.996 -0.334,-9.35 1.122,-18.026 3.514,-25.837 -1.82,1.056 -3.747,2.035 -5.728,2.972 -4.445,10.197 -6.993,22.227 -5.424,36.022 0.119,1.026 0.316,2.1 0.483,3.145 0.161,1.026 0.274,2.029 0.483,3.067 0.632,3.204 1.563,6.528 2.661,9.905 0.31,0.949 0.573,1.891 0.925,2.858 0.334,0.925 0.752,1.868 1.122,2.81 4.231,10.651 10.818,22.083 20.627,34.304 3.783,-3.037 7.154,-6.062 10.335,-9.076 -9.66,-9.881 -17.047,-20.126 -21.869,-30.711 -0.435,-0.961 -0.751,-1.922 -1.151,-2.888 z"
                    id="path11" />
                <path
                    style={{ fill: singleColor }}
                    d="m 161.72,169.176 c -1.36,-0.782 -2.667,-1.587 -3.944,-2.405 -1.51,-0.973 -2.936,-1.975 -4.332,-2.995 -0.501,-0.37 -1.026,-0.716 -1.516,-1.092 -3.67,2.387 -7.793,4.147 -12.22,5.09 -0.489,0.101 -0.985,0.167 -1.48,0.251 -0.525,0.095 -1.056,0.179 -1.587,0.245 -0.483,0.06 -0.973,0.119 -1.462,0.149 -0.537,0.054 -1.086,0.066 -1.629,0.09 -0.465,0.018 -0.925,0.078 -1.396,0.078 -0.006,0 -0.006,0 -0.012,0 -0.018,0 -0.042,0 -0.06,0 -0.477,0 -0.937,-0.06 -1.408,-0.078 -0.543,-0.024 -1.092,-0.036 -1.629,-0.09 -0.489,-0.036 -0.979,-0.101 -1.462,-0.155 -0.531,-0.066 -1.05,-0.143 -1.575,-0.239 -0.501,-0.084 -1.008,-0.149 -1.504,-0.263 -4.404,-0.949 -8.509,-2.697 -12.166,-5.078 -0.495,0.37 -1.032,0.734 -1.539,1.11 -4.099,9.995 -6.772,21.892 -5.531,34.99 0.113,1.169 0.274,2.369 0.448,3.562 0.161,1.086 0.364,2.172 0.579,3.27 0.609,3.085 1.384,6.2 2.476,9.38 0.328,0.967 0.752,1.945 1.134,2.918 0.376,0.955 0.704,1.909 1.128,2.876 4.266,9.792 11.069,19.977 21.194,30.318 0.656,0.674 1.378,1.349 2.059,2.023 0.698,0.674 1.432,1.366 2.16,2.053 3.186,3.007 6.558,6.021 10.341,9.046 9.798,-12.262 16.361,-23.718 20.568,-34.393 0.37,-0.937 0.782,-1.886 1.116,-2.81 0.346,-0.979 0.615,-1.921 0.913,-2.87 1.098,-3.389 2.017,-6.719 2.637,-9.929 0.203,-1.032 0.31,-2.035 0.465,-3.037 0.155,-1.062 0.37,-2.124 0.477,-3.162 1.522,-13.736 -1.032,-25.705 -5.466,-35.843 -1.994,-0.958 -3.927,-1.948 -5.777,-3.01 z"
                    id="path12" />
                <path
                    style={{ fill: singleColor }}
                    d="m 41.714,105.455 c 0.979,-0.418 1.963,-0.776 2.948,-1.152 0.973,-0.37 1.945,-0.74 2.924,-1.068 3.145,-1.062 6.313,-1.927 9.505,-2.572 1.092,-0.221 2.184,-0.394 3.282,-0.567 1.104,-0.173 2.208,-0.31 3.312,-0.436 2.727,-0.298 5.472,-0.495 8.234,-0.495 h 0.006 c 8.527,0 16.427,1.486 23.617,3.735 1.51,0.471 2.983,0.973 4.427,1.51 1.695,0.632 3.341,1.289 4.941,1.987 0.364,0.161 0.722,0.322 1.08,0.489 0.263,-0.269 0.525,-0.543 0.794,-0.806 0.131,-0.131 0.28,-0.251 0.412,-0.376 -0.286,-0.209 -0.561,-0.418 -0.853,-0.627 -1.325,-0.943 -2.715,-1.838 -4.141,-2.733 -1.659,-1.032 -3.377,-2.017 -5.161,-2.954 -1.468,-0.77 -2.954,-1.528 -4.511,-2.22 -8.228,-3.652 -17.65,-6.086 -28.265,-6.086 -1.897,0 -3.861,0.125 -5.83,0.286 -1.044,0.084 -2.112,0.221 -3.18,0.358 -1.038,0.131 -2.082,0.28 -3.139,0.459 -3.264,0.549 -6.605,1.265 -10.054,2.297 -0.943,0.28 -1.927,0.668 -2.882,0.991 -0.973,0.328 -1.939,0.638 -2.93,1.008 -11.201,4.175 -23.278,10.977 -36.25,21.384 2.995,3.729 5.985,7.136 8.956,10.281 10.508,-10.293 21.451,-17.871 32.758,-22.693 z"
                    id="path13" />
                <path
                    style={{ fill: singleColor }}
                    d="m 38.999,169.211 c 0.961,0.322 1.945,0.71 2.894,0.99 3.455,1.038 6.796,1.766 10.06,2.315 1.044,0.173 2.082,0.322 3.109,0.453 1.062,0.131 2.13,0.28 3.168,0.37 2.017,0.161 4.016,0.292 5.955,0.292 10.549,0 19.905,-2.411 28.086,-6.027 1.528,-0.674 2.983,-1.396 4.427,-2.154 1.742,-0.907 3.425,-1.862 5.042,-2.858 1.456,-0.895 2.888,-1.808 4.242,-2.763 0.483,-0.34 0.931,-0.686 1.402,-1.032 -0.227,-0.209 -0.465,-0.4 -0.686,-0.621 -0.179,-0.167 -0.358,-0.346 -0.531,-0.525 -0.221,-0.221 -0.418,-0.465 -0.632,-0.686 -0.495,-0.537 -1.002,-1.05 -1.468,-1.617 -0.197,-0.239 -0.364,-0.495 -0.555,-0.734 -0.448,-0.567 -0.889,-1.134 -1.301,-1.736 -0.179,-0.263 -0.358,-0.525 -0.531,-0.788 -2.345,-3.58 -4.069,-7.584 -5.048,-11.88 -0.155,-0.68 -0.28,-1.39 -0.394,-2.088 -0.048,-0.286 -0.09,-0.579 -0.131,-0.871 -0.101,-0.734 -0.191,-1.468 -0.251,-2.202 -0.024,-0.28 -0.03,-0.573 -0.042,-0.859 -0.03,-0.579 -0.084,-1.134 -0.09,-1.718 0,-0.101 -0.018,-0.203 -0.018,-0.31 0,-0.054 0.006,-0.107 0.006,-0.161 0.036,-0.615 0.089,-1.205 0.119,-1.796 0.012,-0.263 0.018,-0.525 0.042,-0.788 0.06,-0.764 0.143,-1.522 0.245,-2.273 0.036,-0.269 0.078,-0.531 0.119,-0.8 0.119,-0.722 0.239,-1.444 0.394,-2.154 0.973,-4.344 2.715,-8.395 5.09,-12.005 0.113,-0.167 0.215,-0.34 0.328,-0.507 -0.34,-0.149 -0.674,-0.292 -1.02,-0.436 -8.467,-3.538 -18.306,-6.104 -29.124,-6.104 -1.181,0 -2.381,0.042 -3.592,0.107 -1.217,0.066 -2.446,0.173 -3.682,0.304 -1.128,0.119 -2.273,0.28 -3.419,0.465 -3.162,0.501 -6.379,1.223 -9.654,2.226 -1.026,0.316 -2.059,0.674 -3.091,1.044 -1.002,0.358 -2.011,0.728 -3.019,1.14 -10.388,4.195 -21.248,11.2 -32.293,22.006 -0.68,0.656 -1.354,1.349 -2.035,2.041 -0.722,0.734 -1.444,1.462 -2.166,2.232 -2.966,3.151 -5.943,6.564 -8.926,10.293 12.894,10.305 24.906,17.047 36.046,21.212 0.986,0.377 1.953,0.675 2.925,1.003 z"
                    id="path14" />
                <path
                    style={{ fill: singleColor }}
                    d="m 162.532,162.606 c 1.617,1.002 3.306,1.945 5.048,2.858 1.444,0.752 2.9,1.48 4.427,2.154 8.181,3.598 17.525,6.003 28.056,6.003 1.975,0 4.004,-0.125 6.056,-0.304 1.044,-0.09 2.112,-0.245 3.174,-0.37 1.02,-0.125 2.041,-0.28 3.079,-0.453 3.276,-0.555 6.617,-1.295 10.072,-2.345 0.949,-0.28 1.927,-0.662 2.882,-0.99 0.979,-0.328 1.945,-0.638 2.936,-1.014 11.14,-4.183 23.157,-10.967 36.058,-21.314 -2.995,-3.729 -5.991,-7.136 -8.962,-10.281 -10.454,10.245 -21.314,17.787 -32.549,22.608 -0.967,0.418 -1.957,0.782 -2.936,1.164 -0.967,0.37 -1.933,0.752 -2.906,1.086 -3.15,1.08 -6.325,1.957 -9.529,2.613 -1.062,0.221 -2.136,0.382 -3.216,0.555 -1.11,0.179 -2.214,0.334 -3.335,0.453 -2.81,0.322 -5.639,0.519 -8.491,0.519 -8.425,0 -16.242,-1.456 -23.366,-3.658 -1.48,-0.453 -2.93,-0.931 -4.35,-1.456 -1.647,-0.615 -3.264,-1.247 -4.833,-1.915 -0.603,-0.263 -1.181,-0.531 -1.772,-0.811 -0.167,0.179 -0.358,0.352 -0.537,0.525 -0.215,0.209 -0.442,0.388 -0.656,0.597 0.453,0.328 0.889,0.662 1.354,0.991 1.372,0.953 2.816,1.872 4.296,2.785 z"
                    id="path15" />
                <path
                    style={{ fill: singleColor }}
                    d="m 225.13,95.461 c -0.961,-0.322 -1.945,-0.71 -2.894,-0.991 -3.449,-1.026 -6.778,-1.736 -10.042,-2.279 -1.062,-0.179 -2.118,-0.334 -3.162,-0.459 -1.068,-0.131 -2.124,-0.263 -3.174,-0.346 -1.933,-0.155 -3.855,-0.28 -5.728,-0.28 -10.633,0 -20.061,2.44 -28.301,6.104 -1.557,0.692 -3.043,1.45 -4.517,2.226 -1.79,0.943 -3.509,1.927 -5.167,2.966 -1.396,0.877 -2.769,1.76 -4.075,2.685 -0.31,0.221 -0.603,0.442 -0.901,0.662 0.143,0.137 0.304,0.263 0.442,0.4 0.268,0.263 0.525,0.537 0.794,0.811 0.125,0.131 0.245,0.274 0.37,0.406 0.579,0.621 1.158,1.247 1.695,1.909 0.113,0.143 0.209,0.292 0.328,0.436 0.525,0.668 1.044,1.337 1.522,2.035 0.113,0.161 0.203,0.328 0.304,0.489 2.351,3.574 4.075,7.584 5.054,11.88 0.149,0.686 0.28,1.39 0.388,2.088 0.054,0.286 0.089,0.579 0.131,0.865 0.101,0.734 0.185,1.468 0.245,2.214 0.03,0.28 0.036,0.567 0.048,0.847 0.03,0.573 0.084,1.14 0.089,1.718 0,0.101 0.018,0.203 0.018,0.31 0,0.054 -0.006,0.107 -0.006,0.161 0,0.603 -0.06,1.193 -0.09,1.778 -0.012,0.268 -0.018,0.525 -0.048,0.794 -0.06,0.764 -0.137,1.522 -0.245,2.273 -0.036,0.268 -0.072,0.531 -0.125,0.8 -0.119,0.722 -0.239,1.444 -0.388,2.154 -0.979,4.344 -2.715,8.395 -5.096,12.005 -0.173,0.274 -0.364,0.537 -0.549,0.812 0.543,0.233 1.098,0.459 1.641,0.692 8.36,3.455 18.05,5.949 28.707,5.949 1.307,0 2.619,-0.042 3.956,-0.119 1.193,-0.072 2.393,-0.185 3.604,-0.316 1.128,-0.125 2.261,-0.298 3.407,-0.477 3.162,-0.513 6.379,-1.247 9.66,-2.261 1.014,-0.322 2.035,-0.686 3.061,-1.056 1.002,-0.358 2.005,-0.74 3.019,-1.146 10.317,-4.207 21.081,-11.188 32.048,-21.904 0.674,-0.662 1.36,-1.349 2.041,-2.041 0.722,-0.734 1.444,-1.462 2.166,-2.232 2.966,-3.151 5.943,-6.558 8.926,-10.287 -12.972,-10.364 -25.043,-17.125 -36.231,-21.272 -0.98,-0.365 -1.958,-0.681 -2.925,-1.003 z"
                    id="path16" />
                <path
                    style={{ fill: singleColor }}
                    d="m 101.729,132.748 c 0.018,0.853 0.167,1.659 0.251,2.482 0.018,0.179 0.03,0.364 0.054,0.537 0.095,0.817 0.09,1.665 0.251,2.458 0.042,0.191 0.113,0.37 0.161,0.561 0.656,2.971 1.826,5.71 3.276,8.282 0.519,0.913 1.014,1.838 1.623,2.685 0.119,0.167 0.269,0.31 0.388,0.477 0.489,0.656 1.026,1.271 1.563,1.892 0.084,0.101 0.155,0.197 0.239,0.286 0.06,0.072 0.107,0.137 0.167,0.203 0.644,0.71 1.319,1.366 2.029,2.017 0.06,0.066 0.131,0.113 0.197,0.161 0.09,0.078 0.185,0.143 0.274,0.227 0.621,0.543 1.247,1.086 1.909,1.575 0.173,0.125 0.322,0.286 0.501,0.406 0.853,0.609 1.784,1.098 2.703,1.611 2.071,1.164 4.266,2.088 6.599,2.739 0.991,0.28 1.975,0.561 3.007,0.74 0.328,0.066 0.668,0.054 0.996,0.101 0.686,0.101 1.378,0.161 2.076,0.209 0.024,0 0.048,0.012 0.066,0.012 0.304,0.024 0.603,0.078 0.913,0.09 0.394,0.018 0.764,0.125 1.158,0.125 0.364,0 0.698,-0.101 1.056,-0.113 0.31,-0.012 0.603,-0.078 0.907,-0.089 0.024,0 0.048,-0.012 0.072,-0.012 0.704,-0.048 1.396,-0.113 2.082,-0.209 0.328,-0.048 0.668,-0.048 0.996,-0.101 1.032,-0.167 2.011,-0.436 2.995,-0.716 2.363,-0.65 4.577,-1.581 6.665,-2.739 0.919,-0.519 1.862,-1.002 2.715,-1.611 0.167,-0.119 0.31,-0.268 0.471,-0.382 0.674,-0.501 1.307,-1.056 1.933,-1.605 0.084,-0.078 0.173,-0.131 0.245,-0.203 0.072,-0.06 0.137,-0.107 0.197,-0.161 0.71,-0.638 1.39,-1.301 2.041,-2.005 0.066,-0.066 0.113,-0.131 0.161,-0.197 0.095,-0.107 0.173,-0.221 0.269,-0.328 0.525,-0.609 1.05,-1.211 1.539,-1.862 0.125,-0.173 0.28,-0.328 0.406,-0.501 0.632,-0.859 1.128,-1.772 1.647,-2.679 1.492,-2.619 2.685,-5.43 3.353,-8.467 0.036,-0.167 0.084,-0.334 0.119,-0.501 0.161,-0.823 0.149,-1.683 0.257,-2.524 0.018,-0.149 0.03,-0.316 0.048,-0.465 0.084,-0.853 0.245,-1.683 0.257,-2.554 0,-0.149 0.042,-0.28 0.042,-0.43 0,-0.012 -0.006,-0.024 -0.006,-0.036 0,-0.006 0,-0.006 0,-0.012 0,-0.185 -0.048,-0.352 -0.054,-0.531 -0.018,-0.847 -0.167,-1.653 -0.251,-2.482 -0.018,-0.179 -0.03,-0.358 -0.06,-0.537 -0.095,-0.817 -0.084,-1.665 -0.245,-2.464 -0.048,-0.191 -0.119,-0.37 -0.161,-0.561 -0.65,-2.966 -1.832,-5.71 -3.276,-8.276 -0.519,-0.919 -1.014,-1.838 -1.617,-2.691 -0.054,-0.066 -0.113,-0.125 -0.155,-0.191 -0.555,-0.764 -1.175,-1.468 -1.802,-2.172 -0.06,-0.066 -0.113,-0.143 -0.167,-0.209 -0.03,-0.024 -0.042,-0.054 -0.066,-0.078 -0.668,-0.746 -1.36,-1.462 -2.1,-2.136 -0.036,-0.03 -0.072,-0.054 -0.107,-0.084 -0.072,-0.066 -0.149,-0.125 -0.227,-0.191 -0.692,-0.621 -1.402,-1.223 -2.148,-1.772 -0.089,-0.066 -0.161,-0.149 -0.257,-0.215 -0.853,-0.609 -1.748,-1.122 -2.655,-1.647 -2.142,-1.241 -4.451,-2.208 -6.886,-2.894 -0.99,-0.28 -1.975,-0.561 -3.007,-0.74 -0.328,-0.054 -0.662,-0.054 -0.996,-0.101 -0.686,-0.095 -1.378,-0.161 -2.082,-0.209 -0.024,0 -0.048,-0.006 -0.072,-0.006 -0.304,-0.024 -0.603,-0.078 -0.913,-0.09 -0.394,-0.018 -0.758,-0.119 -1.158,-0.119 -0.364,0 -0.698,0.095 -1.056,0.107 -0.31,0.012 -0.603,0.072 -0.907,0.09 -0.024,0 -0.048,0.006 -0.072,0.006 -0.704,0.048 -1.396,0.113 -2.082,0.209 -0.328,0.048 -0.668,0.048 -0.991,0.101 -1.026,0.173 -2.011,0.442 -3.001,0.716 -2.464,0.686 -4.785,1.659 -6.957,2.906 -0.907,0.519 -1.814,1.032 -2.661,1.641 -0.084,0.06 -0.149,0.131 -0.233,0.191 -0.758,0.561 -1.474,1.17 -2.178,1.796 -0.066,0.06 -0.137,0.107 -0.203,0.167 -0.03,0.03 -0.066,0.054 -0.095,0.078 -0.74,0.674 -1.432,1.384 -2.106,2.124 -0.024,0.03 -0.048,0.06 -0.072,0.084 -0.066,0.078 -0.125,0.161 -0.197,0.239 -0.615,0.698 -1.223,1.396 -1.772,2.148 -0.054,0.078 -0.125,0.143 -0.185,0.221 -0.609,0.853 -1.104,1.766 -1.623,2.679 -1.492,2.625 -2.691,5.43 -3.347,8.467 -0.036,0.167 -0.09,0.334 -0.119,0.501 -0.161,0.817 -0.161,1.683 -0.257,2.518 -0.018,0.155 -0.03,0.316 -0.048,0.471 -0.084,0.853 -0.245,1.683 -0.257,2.554 0,0.149 -0.042,0.28 -0.042,0.43 0,0.012 0.006,0.024 0.006,0.036 0,0.006 0,0.006 0,0.012 -0.005,0.178 0.043,0.345 0.049,0.53 z"
                    id="path17" />
            </g>
        ),
    }

    return (
        <div style={{ margin: '4px' }}>
            <svg
                width="400"
                height="350"
                viewBox="0 0 400 343.6986"
                id="svg603"
                xmlns="http://www.w3.org/2000/svg"
                style={{ a: { fill: '#febe69' }, b: { fill: '#f2635f' }, c: { fill: '#645d5c' }, d: { fill: '#ffebd2' } }}
            >
                <defs
                    id="defs591">
                    <mask
                        id="mask0-7-3"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="39"
                        y="55"
                        width="455"
                        height="446">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M 493.04,282.859 C 493.04,242.218 481.083,84.4307 328.083,60.5287 192.129,39.2851 79.4516,82.0429 50.768,218.31 22.0783,354.577 48.3742,481.28 148.782,493.238 249.196,505.189 277.88,500.407 383.069,495.625 488.258,490.844 493.04,323.499 493.04,282.859 Z"
                            fill={eyeColor}
                            id="path440-3-6" />
                    </mask>
                </defs>
                <path
                    className="a"
                    d="M 2.3813023,145.70649 198.76697,74.430011 a 3.6136056,3.6034243 0 0 1 2.4761,0 l 196.37562,71.272179 a 3.604988,3.5948311 0 0 1 2.3813,3.37856 c 0,18.43533 0,131.10822 0,191.01587 a 3.604988,3.5948311 0 0 1 -3.61072,3.60199 c -103.46173,0 -298.696969,-0.14322 -392.7727926,-0.14322 A 3.6179143,3.6077209 0 0 1 0,339.95053 V 149.09222 a 3.6207868,3.6105854 0 0 1 2.3813023,-3.38573 z"
                    id="path593"
                    style={{ fill: '#febe69', strokeWidth: '1.43423' }} />
                <path
                    className="c"
                    d="M 196.55802,3.3196714 V 57.743411 c 0,4.42407 6.894,4.43123 6.894,0 V 3.3196714 c 0,-4.422645 -6.894,-4.429806 -6.894,0 z"
                    id="path597"
                    style={{ fill: '#9B003F', strokeWidth: '1.43423' }} />

                {charcterSvgs[templateName]}

                <foreignObject x="30" y="145" width="345" height="370">
                    <p style={{ fontFamily: 'serif', color: 'black', fontSize, display: 'inline-block', verticalAlign: 'middle' }} xmlns="http://www.w3.org/1999/xhtml">{message}</p>
                </foreignObject>
                <foreignObject x="30" y="290" width="345" height="370">
                    <p style={{ fontSize: '0.8em', display: 'inline-block', verticalAlign: 'middle', xmlns: "http://www.w3.org/1999/xhtml" }}>{dateStr} {name}</p>
                </foreignObject>
            </svg>
        </div>
    )
}
