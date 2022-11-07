import React, { useState } from "react";
import "./Switch.css";

type Toogle = {
  toggleTheme: any,
}

function Switch({toggleTheme}: Toogle) {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme()
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;
