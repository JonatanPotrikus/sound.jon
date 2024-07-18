import Image from "next/image";

export default function MadeFor() {
  return (
    <>
      <h1 className="font-semibold text-2xl mt-12 ml-2 my-6">Made For <span className="font-semibold text-2xl text-lime-400">Jon</span></h1>

      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
          <Image className="rounded-md w-full" src="/discover-weekly.jpeg" width={120} height={120} alt="Imagem de capa" />
          <strong className="font-semibold">Discovery Weekly</strong>
          <span className="text-sm text-zinc-400">Your weekly mixtape of fresh music. </span>
        </a>

        <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
          <Image className="rounded-md w-full" src="/logica-insana.png" width={120} height={120} alt="Imagem de capa" />
          <strong className="font-semibold">Lógica Insana</strong>
          <span className="text-sm text-zinc-400">Jxn. P, Sam.Ronin, Naga 048, GHR 44, Lalau AD </span>
        </a>

        <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
          <Image className="rounded-md w-full" src="/daily-mix-2.jpeg" width={120} height={120} alt="Imagem de capa" />
          <strong className="font-semibold">Mix Daily 1</strong>
          <span className="text-sm text-zinc-400">Jxn. P, Sam.Ronin, Naga 048, GHR 44, Lalau AD </span>
        </a>

        <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
          <Image className="rounded-md w-full" src="/naga048.jpeg" width={120} height={120} alt="Imagem de capa" />
          <strong className="font-semibold">Mix Daily 2</strong>
          <span className="text-sm text-zinc-400">Jxn. P, Sam.Ronin, Naga 048, GHR 44, Lalau AD </span>
        </a>

        <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
          <Image className="rounded-md w-full" src="/negro-rudy.jpeg" width={120} height={120} alt="Imagem de capa" />
          <strong className="font-semibold text-ellipsis">Negro Rudhy</strong>
          <span className="text-sm text-zinc-400">Jxn. P, Sam.Ronin, Naga 048, GHR 44, Lalau AD </span>
        </a>

        <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
          <Image className="rounded-md w-full" src="/radar.jpeg" width={120} height={120} alt="Imagem de capa" />
          <strong className="font-semibold text-ellipsis">Radar de novidades</strong>
          <span className="text-sm text-zinc-400">Jxn. P, Sam.Ronin, Naga 048, GHR 44, Lalau AD </span>
        </a>
      </div>
    </>
  );
}
