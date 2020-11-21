import React, { FC } from 'react';

import styled from '@theme/styled';

export const LOGO_TYPE_LIGHT = '#23374D';
export const LOGO_TYPE_DARK = '#c7c7c7';

type LogoType = typeof LOGO_TYPE_LIGHT | typeof LOGO_TYPE_DARK;

interface Props {
  type?: LogoType;
}

interface StyledProps {
  themeType: false | LogoType;
}

const StyledLogo = styled.svg<StyledProps>`
  & .fill-blue {
    fill: #1089ff;
  }
  & .fill-grey {
    fill: ${({ theme, themeType }) => themeType || theme.LOGO_COLOR};
  }
`;

const LogoIcon: FC<Props> = ({ type }) => (
  <StyledLogo viewBox="0 0 326 42" themeType={type || false}>
    <rect d="M49.73-15.37H216V83H49.73z" />
    <g>
      <path
        className="fill-blue"
        d="M33.34 36.36c.46.51.37 1.31-.2 1.69-.28.19-.59.38-.92.59-.84.52-1.88 1.03-3.11 1.51-1.23.49-2.66.9-4.28 1.24s-3.42.5-5.41.5c-3.28.0-6.08-.46-8.39-1.38-2.31-.92-4.2-2.22-5.67-3.9-1.47-1.68-2.55-3.71-3.24-6.09-.69-2.38-1.04-5-1.04-7.88v-4.32c0-2.77.37-5.27 1.1-7.52s1.84-4.15 3.3-5.72C6.96 3.51 8.79 2.31 11 1.47s4.75-1.26 7.64-1.26c3.02.0 5.74.36 8.16 1.07 1.88.55 3.56 1.22 5.02 2 .63.34.82 1.16.36 1.71l-.13.15c-.34.42-.94.52-1.42.26-1.63-.89-3.28-1.57-4.94-2.03-1.94-.54-4.3-.81-7.06-.81-2.33.0-4.42.36-6.25 1.07-1.84.71-3.37 1.72-4.6 3.03-1.23 1.31-2.17 2.9-2.82 4.77C4.32 13.3 4 15.37 4 17.66v5.61c0 5.35 1.32 9.4 3.95 12.15 2.63 2.75 6.5 4.13 11.6 4.13 1.56.0 2.99-.13 4.31-.39 1.32-.26 2.53-.6 3.63-1.01 1.1-.41 2.07-.86 2.92-1.35.49-.28.94-.56 1.34-.82.46-.3 1.06-.21 1.43.19L33.34 36.36z"
      />
      <path
        className="fill-blue"
        d="M69.43 1.94v38.22c0 .62-.5 1.12-1.12 1.12H67.7c-.62.0-1.12-.5-1.12-1.12V22.31c0-.62-.5-1.12-1.12-1.12H41.59c-.62.0-1.12.5-1.12 1.12v17.85c0 .62-.5 1.12-1.12 1.12h-.61c-.62.0-1.12-.5-1.12-1.12V1.94c0-.62.5-1.12 1.12-1.12h.61c.62.0 1.12.5 1.12 1.12v15.83c0 .62.5 1.12 1.12 1.12h23.86c.62.0 1.12-.5 1.12-1.12V1.94c0-.62.5-1.12 1.12-1.12h.61C68.93.82 69.43 1.32 69.43 1.94z"
      />
      <path
        className="fill-blue"
        d="M109.16 39.71 92.33 1.49c-.18-.41-.58-.67-1.03-.67h-1.39c-.44.0-.85.26-1.03.67l-17 38.21c-.33.74.21 1.58 1.03 1.58h.65c.45.0.85-.26 1.03-.67l4.53-10.39.58-1.33c.18-.41 1.78-4.03 1.96-4.44l.11-.26 1.01-2.29 3.95-8.95c.73-1.65 1.44-3.24 2.11-4.8.27-.62.53-1.25.77-1.88.37-.94 1.69-.97 2.07-.04.26.64.53 1.28.82 1.92.69 1.55 1.38 3.15 2.07 4.8l4.91 11.51c.21.5 1.76 4.04 1.93 4.43l4.99 11.71c.18.41.58.68 1.03.68h.71C108.95 41.28 109.49 40.45 109.16 39.71z"
      />
      <path
        className="fill-blue"
        d="M114.9.82c.37.0.72.18.93.49l22.92 33.8c.26.37.59.92 1 1.63.41.71.74 1.31 1 1.8V1.94c0-.62.5-1.12 1.12-1.12h.54c.62.0 1.12.5 1.12 1.12v38.22c0 .62-.5 1.12-1.12 1.12h-2.17c-.37.0-.72-.18-.93-.49L116.4 6.99c-.35-.52-.7-1.1-1.07-1.74-.37-.64-.68-1.2-.94-1.68v36.59c0 .62-.5 1.12-1.12 1.12h-.54c-.62.0-1.12-.5-1.12-1.12V1.94c0-.62.5-1.12 1.12-1.12H114.9z"
      />
      <path
        className="fill-grey"
        d="M164.92 24.84v15.32c0 .62-.5 1.12-1.12 1.12h-.61c-.62.0-1.12-.5-1.12-1.12V24.85c0-.23-.07-.45-.19-.63L147.13 2.57c-.51-.75.03-1.75.93-1.75h.33c.37.0.72.18.93.49l13.29 19.55c.45.66 1.43.65 1.87-.02l12.74-19.52c.21-.32.56-.51.94-.51h.41c.9.0 1.43 1 .93 1.74l-14.4 21.66C164.99 24.4 164.92 24.62 164.92 24.84z"
      />
      <path
        className="fill-grey"
        d="M210.33 1.94V2c0 .62-.5 1.12-1.12 1.12h-22.18c-.62.0-1.12.5-1.12 1.12v14.03c0 .62.5 1.12 1.12 1.12h20.82c.62.0 1.12.5 1.12 1.12v0c0 .62-.5 1.12-1.12 1.12h-20.82c-.62.0-1.12.5-1.12 1.12v15.1c0 .62.5 1.12 1.12 1.12h22.63c.62.0 1.12.5 1.12 1.12v.06c0 .62-.5 1.12-1.12 1.12h-25.48c-.62.0-1.12-.5-1.12-1.12V1.94c0-.62.5-1.12 1.12-1.12h25.03C209.83.82 210.33 1.32 210.33 1.94z"
      />
      <path
        className="fill-grey"
        d="M250.17 23.6c0 2.66-.38 5.11-1.13 7.35-.76 2.24-1.88 4.18-3.37 5.81s-3.36 2.89-5.6 3.79c-2.25.9-4.86 1.35-7.84 1.35-2.98.0-5.59-.45-7.84-1.35-2.25-.9-4.11-2.16-5.6-3.79-1.49-1.63-2.61-3.56-3.37-5.81-.76-2.24-1.13-4.69-1.13-7.35V18.5c0-2.66.38-5.11 1.13-7.35.75-2.24 1.88-4.18 3.37-5.81 1.49-1.63 3.36-2.89 5.6-3.79 2.24-.9 4.86-1.35 7.84-1.35 2.98.0 5.59.45 7.84 1.35 2.25.9 4.11 2.16 5.6 3.79s2.61 3.56 3.37 5.81c.75 2.24 1.13 4.7 1.13 7.35V23.6zM247.26 18.55c0-5.24-1.34-9.22-4.02-11.95-2.68-2.73-6.35-4.1-11.01-4.1-4.66.0-8.33 1.37-11.01 4.1-2.68 2.73-4.02 6.72-4.02 11.95v4.99c0 5.24 1.34 9.22 4.02 11.95 2.68 2.73 6.35 4.1 11.01 4.1 4.66.0 8.33-1.37 11.01-4.1 2.68-2.73 4.02-6.71 4.02-11.95V18.55z"
      />
      <path
        className="fill-grey"
        d="M258.2.82c.37.0.72.18.93.49l22.92 33.8c.26.37.59.92 1 1.63.41.71.74 1.31 1 1.8V1.94c0-.62.5-1.12 1.12-1.12h.54c.62.0 1.12.5 1.12 1.12v38.22c0 .62-.5 1.12-1.12 1.12h-2.17c-.37.0-.72-.18-.93-.49L259.7 6.99c-.35-.52-.7-1.1-1.07-1.74-.37-.64-.68-1.2-.94-1.68v36.59c0 .62-.5 1.12-1.12 1.12h-.54c-.62.0-1.12-.5-1.12-1.12V1.94c0-.62.5-1.12 1.12-1.12H258.2z"
      />
      <path
        className="fill-grey"
        d="M321.09 22.59h-9.42c-.62.0-1.12-.5-1.12-1.12v-.11c0-.62.5-1.12 1.12-1.12h12.2c.62.0 1.12.5 1.12 1.12v16.47c0 .39-.2.75-.53.95-.41.26-.92.53-1.52.81-.89.41-1.95.79-3.21 1.12-1.25.34-2.68.62-4.28.84-1.6.22-3.35.34-5.25.34-3.28.0-6.1-.46-8.45-1.38-2.36-.92-4.29-2.22-5.8-3.9-1.51-1.68-2.62-3.71-3.34-6.09-.71-2.38-1.07-5-1.07-7.88v-4.32c0-2.77.39-5.27 1.17-7.52.78-2.24 1.92-4.15 3.43-5.72 1.51-1.57 3.38-2.78 5.6-3.62 2.22-.84 4.78-1.26 7.68-1.26 3.02.0 5.78.36 8.26 1.07 1.93.55 3.64 1.22 5.12 2 .64.34.82 1.16.37 1.72l-.13.15c-.34.42-.94.52-1.41.26-1.64-.89-3.32-1.57-5.04-2.03-2.01-.54-4.39-.81-7.16-.81-2.33.0-4.43.36-6.28 1.07-1.86.71-3.43 1.72-4.73 3.03-1.3 1.31-2.28 2.9-2.95 4.77-.67 1.87-1 3.95-1 6.23v5.61c0 5.35 1.37 9.4 4.11 12.15 2.74 2.75 6.66 4.13 11.76 4.13 2.24.0 4.45-.21 6.61-.65 1.87-.37 3.43-.89 4.68-1.56.36-.19.57-.58.57-.98V23.72C322.21 23.1 321.71 22.59 321.09 22.59z"
      />
    </g>
  </StyledLogo>
);

export default LogoIcon;