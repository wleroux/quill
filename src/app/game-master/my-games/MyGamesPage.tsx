"use client";
import {PageTitle} from "@/lib/components/PageTitle";
import {SectionLabel} from "@/lib/components/SectionLabel";
import {Button} from "@/lib/components/Button";
import {Spacer} from "@/lib/components/Spacer";
import React, {useState} from "react";
import {Modal} from "@/lib/components/Modal";
import {Field} from "@/lib/components/Field";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {FieldSet} from "@/lib/components/FieldSet";
import {StringField} from "@/lib/components/StringField";
import { Game } from "@/model/game/Game";

function GameSlot({value}: {
  value: Game
}) {
  return <div>
    <h1>{value.name}</h1>
    <strong>Tier: {value.tier}</strong>
    <hr />
    <strong>Status: {value.status}</strong>
  </div>
}

export function StartGameModal({visible, onClose}: {
  visible: boolean,
  onClose: () => void,
}) {
  const [name, setName] = useState("");
  return <Modal
    visible={visible}
    header={<PageTitle>New Game</PageTitle>}
    onClose={onClose}
    children={<FieldSet inline>
      <FieldSet inline>
        <StringField label={"Name"} value={name} onChange={name => setName(name)} />
      </FieldSet>
      <FieldSet inline>
        <Field>
          <FieldLabel>Tier</FieldLabel>
        </Field>
      </FieldSet>
    </FieldSet>}
    footer={<>
      <Button label={"Create New Game"} />
    </>}
   />
}

export function MyGamesPage({activeGame, pastGames}: {
  activeGame: Game | undefined,
  pastGames: Game[]
}) {
  const [startGameModalOpen, setStartGameModalOpen] = React.useState(false);
  
  return <>
    <div className="flex flex-row">
      <PageTitle>Games</PageTitle>
      <Spacer />
      <Button disabled={activeGame !== undefined} label="Start Game" onClick={() => setStartGameModalOpen(true)} />
    </div>
    <StartGameModal visible={startGameModalOpen} onClose={() => setStartGameModalOpen(false)} />

    {activeGame && <>
        <SectionLabel>Active Game</SectionLabel>
        <GameSlot value={activeGame} />
    </>}
    {pastGames.length > 0 && <>
        <SectionLabel>Previous Games</SectionLabel>
      {pastGames.map(game => <GameSlot key={game.id} value={game} />)}
    </>}
  </>
}
