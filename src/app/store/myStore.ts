import { atom } from "jotai";

const hashInitialValue: string[] = [];
export const hashAtom = atom(hashInitialValue);

const searchWord: string = "";
export const searchWordAtom = atom(searchWord);
