import Header from "./Header";
import React, { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";

interface ScreenSizeSchema {
  width: number;
  height: number;
}

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<ScreenSizeSchema>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleWindowSizeChange = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  return (
    <>
      {screenSize.width >= 1140 ? <Header /> : <MobileHeader />}
      <main>{children}</main>
    </>
  );
};
export default Layout;
