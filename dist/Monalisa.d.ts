/// <reference types="react" />
import './monalisa.css';
export interface MonaProps {
    screen: string;
    monaName: string;
    onClick?: () => void;
}
export declare const Monalisa: ({ screen, monaName }: MonaProps) => JSX.Element;
