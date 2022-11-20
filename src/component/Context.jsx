import { createContext, useContext } from "react";

export const AnimeContext = createContext(null);

export const useAnime = () => {
    return useContext(AnimeContext);
};