import { useState, useActions } from "vuex-composition-helpers/dist";

export const useJuniorStop = () => {
  const { isJuniorStart } = useState(["isJuniorStart"]);

  const { changeJuniorStart } = useActions(["changeJuniorStart"]);

  return {
    isJuniorStart,
    changeJuniorStart,
  };
};