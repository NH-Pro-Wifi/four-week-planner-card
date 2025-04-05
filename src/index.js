import { WeekPlannerCard2 } from './card';
import { WeekPlannerCardEditor2 } from "./editor";
import { version } from '../package.json';

customElements.define(
    'four-week-planner-card',
    FourWeekPlannerCard
);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'four-week-planner-card',
    name: 'Four week Planner Card',
    description: 'Card to display events 4 weeks.'
});

customElements.define(
    'four-week-planner-card-editor',
    FourWeekPlannerCardEditor
);

console.info(
    `%c FOUR-WEEK-PLANNER-CARD %c v${version} `,
    'color: white; background: black; font-weight: 700;',
    'color: black; background: white; font-weight: 700;',
);