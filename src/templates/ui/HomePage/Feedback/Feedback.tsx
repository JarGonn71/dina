import {FormFeedback} from "@/templates/ui/HomePage/Feedback/FormFeedback";

export const Feedback = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white min-w-[990px] rounded-3xl p-8 flex items-center justify-center">
        <FormFeedback/>
      </div>
    </div>
  );
};