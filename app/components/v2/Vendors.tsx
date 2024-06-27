import { Container } from "./Container";

export default function Vendors() {
  return (
    <Container className="//bg-black py-24 sm:py-32">
      <div>
        <div className="mx-auto">
          <h3>FIND US 'ERE</h3>
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden bg-black sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            <div className="bg-white/10 p-8 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/10 p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/10 p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/10 p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
                alt="Laravel"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/10 p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/10 p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
