import { Container } from "./components/layout/Container";
import { itcMachine, youth } from "./lib/fonts";

export default function Page() {
  return (
    <Container>
      <p className={`${itcMachine.className} text-2xl`}>This is Page</p>
    </Container>
  );
}
