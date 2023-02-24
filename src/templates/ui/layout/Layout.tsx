import { FC, ReactNode } from "react";
import { Header } from "@/widgets";

interface PropsLayout {
	children: ReactNode
}

export const Layout: FC<PropsLayout> = ({ children }) => {
  return (
    <main className="bg-main min-h-screen flex flex-col items-center">
	    <Header/>
	    {children}
    </main>
  );
};