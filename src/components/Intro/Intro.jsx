"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="jc-intro">
      <div className="jc-intro__panel jc-intro__panel--left" />
      <div className="jc-intro__panel jc-intro__panel--right" />

      <div className="jc-intro__brand">
        <div className="jc-intro__logo-type">
          <span className="jc-intro__letter jc-intro__letter--j">J</span>
          <span className="jc-intro__letter jc-intro__letter--c">C</span>
        </div>

        <span className="jc-intro__top-text">
          SUPLEMENTOS DEPORTIVOS
        </span>

        <span className="jc-intro__bottom-text">
          HAZ QUE CADA <strong>DÍA</strong> CUENTE.
        </span>
      </div>

      <div className="jc-intro__line" />
    </div>
  );
}