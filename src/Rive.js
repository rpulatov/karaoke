import React from "react";

import { Rive as RiveRoot } from "@rive-app/canvas";

export function Rive({ src }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const rive = new RiveRoot({
      src,
      canvas: ref.current,
      autoplay: true,
    });
  }, [src]);

  return <canvas ref={ref} width="500" height="500"></canvas>;
}
