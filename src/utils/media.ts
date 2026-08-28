import { getCollection } from "astro:content";
import { type MediaData } from "../content.config";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export type MediaItem = {
  id: string;
  data: MediaData;
  filePath: string | undefined;
  collection: string | undefined;
};

const books = await getCollection("books");
const movies = await getCollection("movies");
const tvShows = await getCollection("tvShows");
const games = await getCollection("games");

export const media = [...books, ...movies, ...tvShows, ...games];

export const mediaOngoing = media.filter(({ data }) => {
  return data.date_started !== null && data.date_finished === null;
});

export const mediaFinished = media.filter(({ data }) => {
  return data.date_finished !== null;
});

export function sortMedia(mediaToSort: MediaItem[]) {
  const mediaSorted = mediaToSort.sort((a, b) => {
    const aFinDate = a.data.date_finished.valueOf();
    const bFinDate = b.data.date_finished.valueOf();
    return bFinDate - aFinDate;
  });

  return mediaSorted;
}

export function groupMediaByYear(mediaToSort: MediaItem[]) {
  const mediaGrouped = Object.groupBy(mediaToSort, ({ data }) => {
    if (data.date_finished === null) {
      return false;
    }
    const dateFinishedYear = data.date_finished?.getFullYear();
    return dateFinishedYear;
  });
  return mediaGrouped;
}

export function groupMediaByMonth(mediaToSort: MediaItem[]) {
  const mediaGrouped = Object.groupBy(mediaToSort, ({ data }) => {
    if (data.date_finished === null) {
      return false;
    }
    const year = data.date_finished?.getFullYear();
    const monthNr = data.date_finished?.getMonth();
    const month = months[monthNr];
    return `${month} ${year}`;
  });
  return mediaGrouped;
}

export function groupMediaByType(mediaToSort: MediaItem[]) {
  const mediaGrouped = Object.groupBy(mediaToSort, (item) => item.data.type);
  return mediaGrouped;
}
