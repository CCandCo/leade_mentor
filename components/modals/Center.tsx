import { ReactNode } from "react";

interface CenterModalProps {
  isOpen: boolean;
  children: ReactNode;
}
const CenterModal = ({ isOpen, children }: CenterModalProps) => {
  return <div className={`absolute`}>

  </div>;
};

export default CenterModal;
