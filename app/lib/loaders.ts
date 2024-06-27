"use server";
import { unstable_noStore as noStore } from "next/cache";
import { DiscogsRelease } from "./types";
noStore();

const CONSUMER_KEY = process.env.CONSUMER_KEY;
const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
const TOKEN = process.env.TOKEN;

type Release = {
  status: string;
  format: string;
  catno: string;
  thumb: string;
  resource_url: string;
  title: string;
  id: number;
  year: number;
  artist: string;
};

const baseURL = "https://api.discogs.com";
const labelID = 1739622;

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    // console.log(response);
    if (!response.ok) throw new Error("error while fetching");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// this gets you entire thing
// https://api.discogs.com/database/search?token=bdCcunAzszuNomLVUaSkFjiAPbJEJzuhvDdZdUgE&label=Timeisnow

export async function getLabel() {
  const url = new URL(`/labels/${labelID}`, baseURL);
  return await fetchData(url.href);
}
export async function getReleases(page?: number | undefined) {
  let url;
  if (page) {
    url = new URL(
      //   `/labels/${labelID}/releases?token=${process.env.TOKEN}&page=${page}`,
      `/database/search?token=${TOKEN}&label=Timeisnow&page=${page}`,
      //   `https://api.discogs.com/database/search?token=bdCcunAzszuNomLVUaSkFjiAPbJEJzuhvDdZdUgE&label=Timeisnow&page=2`
      baseURL,
    );
  } else {
    url = new URL(`/labels/${labelID}/releases`, baseURL);
  }

  return await fetchData(url.href);
}

export async function getArtists() {
  //catalog of all release from all the pages
  const catalog: Release[] = [];
  const data = await getReleases();
  //get all total pages count
  const totalPages = data.pagination.pages;
  //create an array from number of  pages so we can loop through
  const arrayToLoop = Array.from({ length: totalPages }, (_, i) => i + 1);

  //loop through each page and store release in catalog
  for (const page of arrayToLoop) {
    const currentPageReleases = await getReleases(page);
    currentPageReleases.releases.forEach((release: Release) =>
      catalog.push(release),
    );
  }
  //get lists of all artists from catalog, artists results are duplicit
  const artistsRaw = catalog.map((release) => release.artist);
  //convert to set and back to array to get unique results
  const artistsUnique = Array.from(new Set(artistsRaw));
  //artist are not formated on discogs they are store as ex. Artist (4), if there are multiple artists with same name
  const artistsFormatted = artistsUnique.map((artist) => {
    const result = artist.split("(")[0] + artist.split(")")[1];
    return result.trim();
  });

  return artistsFormatted;
}

export async function getLatestReleases() {
  //catalog of all release from all the pages
  const catalog: DiscogsRelease[] = [];
  const data = await getReleases();
  //get all total pages count
  const totalPages = data.pagination.pages;
  //create an array from number of  pages so we can loop through
  const arrayToLoop = Array.from({ length: totalPages }, (_, i) => i + 1);

  //loop through each page and store release in catalog
  for (const page of arrayToLoop) {
    const currentPageReleases = await getReleases(page);
    currentPageReleases.results.forEach((release: DiscogsRelease) =>
      catalog.push(release),
    );
  }
  const recentReleases = catalog.filter(
    (release) => Number(release.year) === Number(new Date().getFullYear()),
  );
  return recentReleases;
}

// export async function getRelease(id: number) {
//   const url = new URL(`/releases/${id}?token=${process.env.TOKEN}`, baseURL);
//   const { images } = await fetchData(url.href);
//   return images.find((image) => image.type === "primary");
// }
