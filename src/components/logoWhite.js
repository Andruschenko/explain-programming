import * as React from 'react';

function SvgLogoWhite(props) {
  return (
    <svg
      width={props.width || '5em'}
      height={props.width || '5em'}
      viewBox="0 0 390 345"
      fill="none"
      {...props}
    >
      <g filter="url(#logo_white_svg__filter0_d)" fill="#EEE">
        <path d="M69.62 328.538c-1.87 2.391.588 5.729 3.427 4.653l60.855-23.071a2.993 2.993 0 001.241-.885L177.9 257.92c1.628-1.954.239-4.92-2.305-4.92H89.123c-2.29 0-3.736 2.463-2.619 4.462l15.153 27.141a3 3 0 01-.256 3.311l-31.78 40.624z" />
        <rect x={4} y={3} width={376} height={264} rx={132} />
      </g>
      <path
        d="M224.195 64.282c2.004-5.259 8.356-8.043 13.919-6.101 4.952 1.728 7.575 6.636 6.09 11.396l-41.135 131.866c-2.493 7.992-12.558 11.822-20.19 7.684l-2.269-1.231c-5.391-2.924-7.723-8.957-5.607-14.51l49.192-129.103zM134.957 166.645c3.87 1.927 6.334 5.322 6.616 9.115l.129 1.739c.769 10.375-13.815 16.759-23.281 10.192l-50.842-35.278c-4.137-2.87-4.61-8.061-1.058-11.594 3.177-3.159 8.579-3.972 12.716-1.912l55.72 27.738z"
        fill="#A14444"
      />
      <path
        d="M114.873 89.577c6.576-6.796 18.553-5.192 22.532 3.016l1.367 2.82c2.386 4.923.99 10.731-3.451 14.353l-52.586 42.892c-4.151 3.386-10.378 3.433-14.501.108-4.498-3.627-4.885-9.937-.863-14.094l47.502-49.095zM257.322 168.462c-3.653 2.242-5.851 6.008-5.892 10.026-.112 10.881 14.245 16.893 22.978 9.514l43.453-36.718c3.668-3.099 3.833-8.335.369-11.694-3.094-3.001-8.115-3.535-11.825-1.257l-49.083 30.129z"
        fill="#A14444"
      />
      <path
        d="M271.558 91.376c-6.704-6.754-18.115-4.428-21.445 4.371l-.608 1.608c-1.99 5.258-.318 11.228 4.135 14.767l50.448 40.104c3.98 3.164 9.678 2.897 13.268-.622 3.914-3.837 3.922-10.136.019-14.069l-45.817-46.16z"
        fill="#A14444"
      />
      <defs>
        <filter
          id="logo_white_svg__filter0_d"
          x={0}
          y={0}
          width={390}
          height={344.399}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={3} dy={4} />
          <feGaussianBlur stdDeviation={3.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLogoWhite;
