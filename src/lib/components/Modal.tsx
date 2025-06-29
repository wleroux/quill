import {Dialog, DialogPassThroughOptions} from "primereact/dialog";
import {PageTitle} from "@/lib/components/PageTitle";
import React, {PropsWithChildren} from "react";

const modalPt: DialogPassThroughOptions = {
  root: {
    className: "bg-[color:var(--background)] container border border-[color:var(--foreground)]/20 drop-shadow-lg rounded-md mt-32 mb-40"
  },
  header: {
    className: "p-4 bg-black/40 rounded-t-md border-b border-[color:var(--foreground)]/20"
  },
  headerTitle: {
    className: "flex-1"
  },
  closeButton: {
    className: "cursor-pointer border rounded-md border border-[color:var(--foreground)]/50 hover:outline"
  },
  footer: {
    className: "p-4 bg-black/40 rounded-b-md border-t border-[color:var(--foreground)]/20"
  },
  content: {
    className: "bg-transparent p-0"
  },
  mask: {
    className: "bg-black/50 items-start overflow-y-auto",
    style: {alignItems:"start"}
  }
};

export function Modal({visible, header, children, footer, onClose}: PropsWithChildren<{
  visible: boolean,
  onClose?: () => void,
  header?: React.ReactNode;
  footer?: React.ReactNode;
}>) {
  return <Dialog
    focusOnShow={false}
    draggable={false}
    modal
    visible={visible} onHide={onClose ? onClose : () => {}}
    pt={modalPt}
    header={header}
    footer={footer}
    children={children}
  />
}