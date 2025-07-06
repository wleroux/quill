import {StepperPassThroughOptions} from "primereact/stepper";
import {StepperPanelPassThroughOptions} from "primereact/stepperpanel";
import {twMerge} from "tailwind-merge";

export const STEPPER_PT: StepperPassThroughOptions = {
  nav: {
    className: "gap-8 border-b border-[color:var(--foreground)]/20 font-[family-name:var(--font-audiowide)] flex flex-row p-4 overflow-hidden overflow-x-auto bg-black/10 justify-around"
  },
  stepperpanel: {
    className: "flex flex-row"
  },
  panelContainer: {
    className: "p-4 flex flex-col gap-4"
  },
};
export const STEPPER_PANEL_PT: StepperPanelPassThroughOptions = {
  header: {
    className: "h-10 flex items-center text-lg flex-row text-nowrap",
  },
  number: {
    className: "w-8 h-8 items-center flex justify-center rounded-full border border-[color:var(--foreground)] drop-shadow-md hover:outline",
  },
  action: (props) => ({
    className: twMerge(
      "flex flex-row gap-2 flex-1 cursor-pointer",
      props.context.active ? "font-bold" : "opacity-65"
    )
  })
};