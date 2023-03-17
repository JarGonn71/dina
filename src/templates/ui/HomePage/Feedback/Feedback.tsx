import {FormFeedback} from "@/templates/ui/HomePage/Feedback/FormFeedback";

import styles from "./FeedBack.module.scss";
export const Feedback = () => {
  return (
    <div className={styles.Container}>
      <h2 className="text-center text-3xl font-semibold mb-10 text-white">Узнайте, как мы сможем помочь в решении Вашей проблемы</h2>
      <div className="grid grid-cols-2 max-w-[1200px] mx-auto items-center justify-center w-full">
        <div className="flex justify-center items-center">
          <img className={styles.Image} src="/images/bg-callback.svg"/>
        </div>
        <div className="bg-white min-w-[600px] rounded-3xl p-8 flex items-center justify-center shadow-2xl">
          <FormFeedback/>
        </div>
      </div>

    </div>
  );
};