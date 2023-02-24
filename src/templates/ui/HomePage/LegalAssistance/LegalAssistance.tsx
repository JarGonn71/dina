import { Item } from "./Item";
import { Switcher } from "@/shared";
import { ForIndividuals, TypeTabs, Entity } from "./conts";
import { useCallback, useState } from "react";
import classNames from "classnames";

import styles from "./LegalAssistance.module.css";

export const LegalAssistance = () => {
  const [activeTab, setActiveTab] = useState<TypeTabs>(TypeTabs.PHYSICAL);

  const handleSetTab = useCallback(() => {
    setActiveTab(prevState => prevState === TypeTabs.PHYSICAL ? TypeTabs.ENTITY : TypeTabs.PHYSICAL);
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className="max-w-[1200px] w-full py-[30px] px-[15px] font-semibold">
        <h2 className="text-3xl">
          Правовая помощь
        </h2>

        <div>
          <div className="flex space-x-3.5 items-center">
            <div className={classNames("text-lg cursor-pointer",
              { "text-main" : activeTab === TypeTabs.PHYSICAL, "text-gray-300" : activeTab !== TypeTabs.PHYSICAL })}>
              Физическим лицам
            </div>
            <Switcher active={activeTab === TypeTabs.ENTITY} setActive={handleSetTab}/>
            <div className={classNames("text-lg cursor-pointer",
              { "text-main" : activeTab === TypeTabs.ENTITY, "text-gray-300" : activeTab !== TypeTabs.ENTITY })}>
              Юридическим лицам</div>
          </div>

          {activeTab === TypeTabs.PHYSICAL ?
            (
              <div className={styles.Container}>
                {ForIndividuals.map(item =>
                  <Item
                    key={item.pathIcon}
                    alt={item.alt}
                    pathIcon={item.pathIcon}
                    text={item.text}
                  />
                )}
              </div>
            )
            :
            (
              <div className={styles.Container}>
                {Entity.map(item =>
                  <Item
                    key={item.pathIcon}
                    alt={item.alt}
                    pathIcon={item.pathIcon}
                    text={item.text}
                  />
                )}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};