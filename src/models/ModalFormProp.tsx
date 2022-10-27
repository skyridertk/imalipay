import React from "react";

export type ModalFormProp = {
  visible: boolean;
  onCancel: () => void;
  children: React.ReactNode;
};
