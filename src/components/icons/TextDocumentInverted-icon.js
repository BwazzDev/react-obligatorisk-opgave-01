import * as React from "react";

function SvgTextDocumentInverted(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path d="M16 1H4a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zm-3 14H7v-2h6v2zm0-4H7V9h6v2zm0-4H7V5h6v2z" />
    </svg>
  );
}

export default SvgTextDocumentInverted;
