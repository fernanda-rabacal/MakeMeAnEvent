import { ReactNode } from "react";
import { ModalContainer } from "./styles";

interface ModalProps {
  children: ReactNode
}

export function EditEventModal({children} : ModalProps) {
  return(
    <ModalContainer>
      {children}
    </ModalContainer>
  )
}