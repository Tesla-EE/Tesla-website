import { workshopsData, WorkshopItem } from './workshops';
import { competitionsData, CompetitionItem } from './competitions';
import { highlightsData, HighlightItem } from './highlights';

export interface EventDataStore {
  workshops: WorkshopItem[];
  competitions: CompetitionItem[];
  highlights: HighlightItem[];
}

export const eventsData: EventDataStore = {
  workshops: workshopsData,
  competitions: competitionsData,
  highlights: highlightsData
};
