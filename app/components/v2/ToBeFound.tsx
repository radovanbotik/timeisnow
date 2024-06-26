import Image from "next/image";
import { Container } from "./Container";

const clients = [
  ["Phobia", "logoPhobiaLight"],
  ["Family Fund", "logoFamilyFund"],
  ["Unseal", "logoUnseal"],
  ["Mail Smirk", "logoMailSmirk"],
  ["Home Work", "logoHomeWork"],
  ["Green Life", "logoGreenLife"],
  ["Bright Path", "logoBrightPath"],
  ["North Adventures", "logoNorthAdventures"],
];

export default function ToBeFound() {
  return (
    <div className="rounded-4xl mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container className="max-w-7xl">
        <div className="flex items-center gap-x-8">
          <h5 className="text-center font-druk font-semibold tracking-wider text-white sm:text-left">
            Cop your copy mate, join the movement
          </h5>
          <div className="h-2 flex-auto bg-neutral-800" />
        </div>
        <>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <>
                  <p>{client}</p>
                  {/* <Image src={logo} alt={client} unoptimized /> */}
                </>
              </li>
            ))}
          </ul>
        </>
      </Container>
    </div>
  );
}
