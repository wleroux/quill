import {Game} from "@/model/game/Game";
import Page from "@/lib/components/Page";
import {PageTitle} from "@/lib/components/PageTitle";
import {SectionLabel} from "@/lib/components/SectionLabel";
import {GameStatusTag} from "@/app/game-master/my-games/MyGamesPage";
import {Character} from "@/model/character/Character";
import {CharacterCard} from "@/app/player/my-characters/CharacterCard";

export function GamePage({game, characters}: {
  game: Game,
  characters: Character[]
}) {
  return <Page>
    <PageTitle>
      {game.name}
      <GameStatusTag status={game.status} />
    </PageTitle>
    <span>Tier: {game.tier}</span>
    <SectionLabel>Characters</SectionLabel>
    {characters.map(character => <CharacterCard key={character.id} value={character} />)}
  </Page>
}