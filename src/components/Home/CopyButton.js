import React, { useEffect, useState } from "react";

const CopyButton = (props) => {
  const copySvg =
    "data:image/svg+xml;base64,PHN2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzE0cHgnIHdpZHRoPScxNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+IDxwYXRoIGQ9J001LjcgMTQuN0g0LjhDNC4zMjI2MSAxNC43IDMuODY0NzcgMTQuNTEwNCAzLjUyNzIxIDE0LjE3MjhDMy4xODk2NCAxMy44MzUyIDMgMTMuMzc3NCAzIDEyLjlWNC44QzMgNC4zMjI2MSAzLjE4OTY0IDMuODY0NzcgMy41MjcyMSAzLjUyNzIxQzMuODY0NzcgMy4xODk2NCA0LjMyMjYxIDMgNC44IDNIMTIuOUMxMy4zNzc0IDMgMTMuODM1MiAzLjE4OTY0IDE0LjE3MjggMy41MjcyMUMxNC41MTA0IDMuODY0NzcgMTQuNyA0LjMyMjYxIDE0LjcgNC44VjUuN00xMS4xIDkuM0gxOS4yQzIwLjE5NDEgOS4zIDIxIDEwLjEwNTkgMjEgMTEuMVYxOS4yQzIxIDIwLjE5NDEgMjAuMTk0MSAyMSAxOS4yIDIxSDExLjFDMTAuMTA1OSAyMSA5LjMgMjAuMTk0MSA5LjMgMTkuMlYxMS4xQzkuMyAxMC4xMDU5IDEwLjEwNTkgOS4zIDExLjEgOS4zWicgc3Ryb2tlPSd3aGl0ZScgc3Ryb2tlV2lkdGg9JzInIHN0cm9rZUxpbmVjYXA9J3JvdW5kJyBzdHJva2VMaW5lam9pbj0ncm91bmQnID48L3BhdGg+IDwvc3ZnPg==";

  const [isCopied, setIsCopied] = useState(false);
    const [isHover, setIsHover] = useState(false);
  const copyValue = () => {
    navigator.clipboard.writeText(props.value);
    setIsCopied(true);
  };
  const hover = () => {
    setIsCopied(false);
    setIsHover(true);
  }
  const leave = () => {
    setIsHover(false);
  }
  return (
    <div className="Copy-Container" onClick={copyValue} onMouseEnter={hover} onMouseLeave={leave}>
      <img className="Copy-Icon" src={copySvg} />
      <div className="Copy-Box" style={isHover ? {} : {display: "none"}}>{!isCopied ? "Copy" : "Copied"}</div>
    </div>
  );
};

export default CopyButton
