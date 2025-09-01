"use client";
import {PageTitle} from "@/lib/components/PageTitle";
import {Button} from "@/lib/components/Button";
import {Spacer} from "@/lib/components/Spacer";
import React, {useState} from "react";
import {Modal} from "@/lib/components/Modal";
import {Field} from "@/lib/components/Field";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {FieldSet} from "@/lib/components/FieldSet";
import {StringField} from "@/lib/components/StringField";
import {Game} from "@/model/game/Game";
import {Card, CardHeader} from "@/lib/components/Card";
import {useRouter} from "next/navigation";
import {Tag} from "@/lib/components/Tag";

export function GameStatusTag({status}: {
  status: Game["status"]
}) {
  return <>
    {status === "RUNNING" && <Tag variant="yellow">{status}</Tag>}
    {status === "SUCCESS" && <Tag variant="green">{status}</Tag>}
    {status === "FAILURE" && <Tag variant="red">{status}</Tag>}
    {status === "CANCELED" && <Tag variant="red">{status}</Tag>}
  </>
}

function GameCard({value}: {
  value: Game
}) {
  const router = useRouter();
  return <Card className="cursor-pointer" onClick={() => router.push(`/games/${value.id}`)}>
    <CardHeader>
      <div>{value.name}</div>
      <GameStatusTag status={value.status} />
      <Spacer/>
      <span className="text-sm [font-variant:small-caps]">{value.tier}</span>
    </CardHeader>
  </Card>
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

export function MyGamesPage({games}: {
  games: Game[]
}) {
  return <>
    <div className="flex flex-row">
      <PageTitle>My Games</PageTitle>
    </div>
    {games.map(game => <GameCard key={game.id} value={game} />)}
  </>
}
