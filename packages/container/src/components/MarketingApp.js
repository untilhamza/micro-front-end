import React, { useRef, useEffect } from "react";

import { mount as marketingMount } from "marketing/MarketingApp";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  }, []);

  return <div ref={ref} />;
}