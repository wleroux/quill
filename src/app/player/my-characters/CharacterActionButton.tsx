import {Character} from "@/model/character/Character";
import {useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {CharacterID} from "@/model/character/CharacterID";
import React, {useRef, useState} from "react";
import {Menu} from "primereact/menu";
import {Button} from "@/lib/components/Button";
import {MENU_PASSTHROUGH} from "@/lib/components/Menu";
import {getCanLevelUp, getCurrentLevel} from "@/model/character/level/LevelChoice";
import {RenameDialog} from "@/lib/character/train/RenameDialog";
import {LevelDialog} from "@/lib/character/train/LevelDialog";
import {LongRestDialog} from "@/lib/character/long-rest/LongRestDialog";
import {RetrainDialog} from "@/app/player/my-characters/RetrainDialog";
import {ConfirmPopup} from "primereact/confirmpopup";
import {Game} from "@/model/game/Game";

export function CharacterActionButton({value, games}: {value: Character, games: Game[]}) {
  const router = useRouter();
  const retire = useMutation({
    mutationFn: ({characterID}: {characterID: CharacterID}) => {
      return fetch(`/api/characters/${characterID}/retire`, {
        method: "POST"
      });
    },
    onSuccess: () => {
      router.refresh();
    }
  });
  const menu = useRef<Menu>(null);

  const [isConfirmRetireVisible, setIsConfirmRetireVisible] = useState(false);
  const retireButtonRef = useRef(null);

  const [isRenameOpen, setIsRenameOpen] = React.useState(false);
  const [isLevelUpOpen, setIsLevelUpOpen] = React.useState(false);
  const [isLongRestOpen, setIsLongRestOpen] = React.useState(false);
  const [isRetrainOpen, setIsRetrainOpen] = React.useState(false);

  const canLevelUp = getCanLevelUp(value, games);

  return <>
    <Button ref={retireButtonRef} size="small" label="Actions" onClick={(ev) => {
      menu.current?.toggle(ev);
    }} />
    <Menu pt={MENU_PASSTHROUGH} ref={menu} popup popupAlignment="right" model={[
      {label: `Level Up`, visible: canLevelUp,  disabled: isLevelUpOpen, command() {
        setIsLevelUpOpen(true);
      }},
      {label: `Long Rest`, disabled: isRenameOpen, command() {
          setIsLongRestOpen(true);
        }},
      {label: "Initiate Retrain", visible: getCurrentLevel(value) < 5, command() {
          setIsRetrainOpen(true)
        }},
      {label: `Rename`, disabled: isRenameOpen, command() {
          setIsRenameOpen(true);
        }},
      {label: `Retire`, disabled: retire.isPending || isConfirmRetireVisible, command() {
          setIsConfirmRetireVisible(true);
        }}
    ]} />
    <RenameDialog value={value} visible={isRenameOpen} onClose={() => setIsRenameOpen(false)} />
    {canLevelUp && <LevelDialog value={value} visible={isLevelUpOpen} onClose={() => setIsLevelUpOpen(false)} />}
    <LongRestDialog value={value} visible={isLongRestOpen} onClose={() => setIsLongRestOpen(false)} />
    <RetrainDialog value={value} visible={isRetrainOpen} onClose={() => setIsRetrainOpen(false)} />

    <ConfirmPopup pt={{
      root: {className: "bg-red-800 border-red-400/50 text-red-50 dark:bg-red-950 border dark:border-red-400/50 p-4 mt-4 gap-4 flex flex-col"},
      message: {className: "pl-4 text-red-100"},
      icon: {className: "text-red-100"}
    }} target={retireButtonRef.current ?? undefined} visible={isConfirmRetireVisible} onHide={() => setIsConfirmRetireVisible(false)}
                  message={`Are you sure you want to retire ${value.name}? Once retired, they cannot be unretired.`} icon="pi pi-exclamation-triangle" accept={() => {
      retire.mutate({characterID: value.id});
    }} reject={() => setIsConfirmRetireVisible(false)}  />
  </>
}
