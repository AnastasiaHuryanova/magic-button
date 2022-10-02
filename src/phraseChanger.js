/**
 * this function changes the phrase we pass to it
 * @param previousPhrase the phrase that will change
 * @returns the new phrase
 */
import {altPhrase, phrase} from "./App";

export const phraseChanger = (previousPhrase) => {
    if (previousPhrase === phrase) return altPhrase;
    return phrase;
}
