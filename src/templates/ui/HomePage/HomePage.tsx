import { PreviewBlock } from "./PreviewBlock";
import { LegalAssistance } from "./LegalAssistance";
import { Advantages } from "./Advantages";
import { Feedback } from "./Feedback";

export const HomePage = () => {
  return (
    <div className="w-full">
      <PreviewBlock/>
      <LegalAssistance/>
      <Feedback/>
      <Advantages/>
    </div>
  );
};