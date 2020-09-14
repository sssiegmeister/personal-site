import bbal from './mods/nochangeforbbal.package';
import outfit from './mods/nooutfitchange.package';
import sad from './mods/sadwalkstylelater.package';
import stylist from './mods/Siegmeister_NoStylist.ts4script';

const data = [
  {
    text: "I found that sims changing into athletic outfits whenever they play basketball resulted in everyone always having athletic outfits on. Now they should only change for a group game.",
    media: bbal,
    type: "download",
  },
  {
    text: "I got sick of NPCs going into stores and buying outfits which then get added to that sim's appearence. This mod aims to keep things more static by disabling the outcome of that interaction, though one day I'll go back and make that specific to NPCs.",
    media: outfit,
    type: "download",
  },
  {
    text: "Sims won't walk sadly with their heads down until they become 'Very Sad'.",
    media: sad,
    type: "download",
  },
  {
    text: "If you've ever used the stylist career to create a trend, you might find that random Sims are wearing that outfit all over the place, and that there's no way to stop it. This script disables those trends, for when you get tired of it like I did.",
    media: stylist,
    type: "download",
  }
]

export default data;