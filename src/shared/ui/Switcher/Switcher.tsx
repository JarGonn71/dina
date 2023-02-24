import classNames from "classnames";
import { useCallback, FC } from "react";

import styles from "./Switcher.module.css";

interface PropsSwitcher {
	active: boolean;
	setActive: () => void;
}

export const Switcher: FC<PropsSwitcher> = ({active, setActive}) => {
  const handleSetActive = useCallback(() => {
    setActive();
  }, [setActive]);

  return (
    <div onClick={handleSetActive} className="w-10 h-5 rounded-full bg-gray-300 flex items-center cursor-pointer relative">
      <div className={classNames(styles.Switcher, active && styles.active)}></div>
    </div>
  );
};