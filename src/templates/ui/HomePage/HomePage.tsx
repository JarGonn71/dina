import { PreviewBlock } from "./PreviewBlock";
import { LegalAssistance } from "./LegalAssistance";
import { Advantages } from "./Advantages";

export const HomePage = () => {
  return (
    <div className="w-full">
      <PreviewBlock/>
      <LegalAssistance/>
      <Advantages/>
    </div>
  );
};