/// <reference types="react" />
import { ISelectProps } from "../lib/interfaces";
interface MultiSelectContextProps extends ISelectProps {
    t: (key: string) => string;
    setOptions?: any;
}
interface MultiSelectProviderProps {
    props: ISelectProps;
    children: any;
}
export declare const MultiSelectProvider: ({ props, children, }: MultiSelectProviderProps) => JSX.Element;
export declare const useMultiSelect: () => MultiSelectContextProps;
export {};
