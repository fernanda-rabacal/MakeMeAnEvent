import { useContext } from "react";
import { EventContext } from "../contexts/EventContext";

export function useEvent() {
  let context = useContext(EventContext)

  return context
}