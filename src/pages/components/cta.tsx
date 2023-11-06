import Image from "next/image";

type CtaProps = {
  ctaOption?: string;
  openModal: (option: string) => void;
  price?: boolean;
  label?: string;
};

const CTA = ({
  openModal,
  price = false,
  label = "Quero aumentar minha produção de leite",
  ctaOption = '0'
}: CtaProps) => {
  return (
    <div className="flex w-full flex-col items-center rounded-sm bg-cream text-blue">
      <div className="mt-5 w-full text-center">
        {/* <a href="https://instagram.com/carolina.procaci"> */}
        {/* <a href="https://pay.hotmart.com/O84147403X"> */}

        <button
          onClick={e =>openModal(ctaOption)}
          className="text-white my-2 max-w-[250px] rounded-lg border-b-4 border-b-[#236C0F] bg-[#40C351] px-4 py-3 text-[13.6px] font-extrabold uppercase text-cream hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:max-w-md lg:py-5 lg:text-[22.6px]"
        >
          {label}
        </button>
        {/* </a> */}

        {/* </a> */}
        {price ? (
          <p>
            12x
            <span className="mb-[14.4px] ml-1 mt-6 text-center text-[25px] font-extrabold uppercase leading-[29.17px] tracking-[-25] lg:text-[31.25px]">
              R$49,60
            </span>{" "}
            <br /> ou R$497,00 à vista
          </p>
        ) : (
          <></>
        )}
        <div className="">
          <Image
            className="mx-auto h-10 px-4"
            alt="Meios de Pagamento"
            src="/pagamentos2.svg"
            width={529}
            height={30}
          ></Image>
        </div>
      </div>
      <div className="m-4 grid w-full max-w-sm grid-cols-3 px-4 lg:max-w-3xl">
        <div className="flex flex-col items-center">
          <Image
            alt="acesso-imediato"
            height={58.6}
            width={58.6}
            src={"/calendario2.svg"}
          ></Image>
          <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">
            2 anos de acesso
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="zoom"
            width={58.6}
            src={"/zoom.svg"}
            height={58.6}
          ></Image>
          <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">
            Suporte quinzenal no ZOOM
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="garantia"
            width={44}
            src={"/garantia2.svg"}
            height={58.6}
          ></Image>
          <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">
            Garantia de 21 DIAS
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
