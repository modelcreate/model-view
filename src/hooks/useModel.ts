import { useContext } from "react";
import ModelContext from "../context/ModelContext";

export default function useModel() {
  const context = useContext(ModelContext);

  return context;
}
