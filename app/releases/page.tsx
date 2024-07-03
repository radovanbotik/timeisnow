import Gallery from "../components/v2/Gallery";
import { fetchReleases } from "../lib/loaders";

export default async function Page() {
  const releases = await fetchReleases();

  return (
    <>
      <Gallery data={releases} />
    </>
  );
}
