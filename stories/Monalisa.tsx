import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { MonaApp } from "./MonaApp/components/Monalisa";

import './monalisa.css';

const queryClient = new QueryClient();

export interface MonaProps {
  screen: string;
  monaName: string;
  onClick?: () => void;
}

export const Monalisa = ({
  screen="61e1532b4cdb8cfa375286da",
  // screen="61e10b9fe679b4afaf09b3a9",
  monaName="monalisa_slideshow_2160"
}: MonaProps) => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <div>
        <MonaApp monaName={monaName} screen={screen}/>
      </div>
    </QueryClientProvider>
    </>
  );
};
