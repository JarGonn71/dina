import styles from "./PreviewBlock.module.css";

export const PreviewBlock = () => {
  return (
    <div className={styles.Wrapper}>
      <div className="flex flex-col items-center z-50">
        <div className={styles.Container}>
          <div>
            <h1 className="text-center text-3xl text-[#0597F2]">Адвокатская группа</h1>
            <div className="text-center text-5xl font-semibold">Защита вашей семьи и бизнеса</div>
          </div>
        </div>
        <div className="mt-[30px] px-5 py-3 bg-main text-white font-semibold cursor-pointer">Обратный звонок</div>
      </div>
      <img src="/images/block3.svg" className="absolute right-0 bottom-0" alt=""/>
      <img src="/images/subBlock3.svg" className={styles.subBlock3} alt=""/>

      <img src="/images/block4.svg" className="absolute right-[340px] bottom-0" alt=""/>
      <img src="/images/subBlock4.svg" className={styles["subBlock4-1"]} alt=""/>
      <img src="/images/subBlock4-2.svg" className={styles["subBlock4-2"]} alt=""/>

      <img src="/images/block2.svg" className="absolute right-0 bottom-0" alt=""/>

      <img src="/images/block6.svg" className={styles.block6} alt=""/>
      <img src="/images/subBlock6.svg" className={styles.subBlock6} alt=""/>

      <img src="/images/block5.svg" className={styles.block5} alt=""/>

      <img src="/images/block1.svg" className="absolute left-0 bottom-0" alt=""/>

      <img src="/images/block7.svg" className="absolute left-[165px] bottom-0" alt=""/>
      <img src="/images/subBlock7.svg" className={styles.subBlock7} alt=""/>

      <img src="/images/block8.svg" className="absolute left-[50px] bottom-0" alt=""/>
      <img src="/images/subBlock8-1.svg" className={styles["subBlock8-1"]} alt=""/>
      <img src="/images/subBlock8-2.svg" className={styles["subBlock8-2"]} alt=""/>
    </div>
  );
};