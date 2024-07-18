import Image from "next/image";

type Library = {
  id: string;
  name: string;
  image: string;
  active?: boolean
};

export default function YourLibrary() {
  const librarys: Library[] = [
    { name: "Lógica Insana", id: "725QwQVh0AYEDIl7jjvXSD", image: "/logica-insana.png" },
    { name: "Jxn.P", id: "1kiiU4c56cKMmqAsHHM4S1", image: "/jxnp.jpeg", active: true },
    { name: "Naga 048", id: "1wbm5Qaq6wwP0wD2XyY56U", image: "/naga048.jpeg" },
    { name: "Sam.Ronin", id: "1j5uPRNXVMam2Atdtv6mJB", image: "/sabotage.jpeg" },
    { name: "Ghr 048", id: "0NoWHmuQ003MVtbbZYo1CG", image: "/radar.jpeg" },
  ];

  const classActive = "border-green-400 rounded-e-3xl px-5"

  return (
    <nav className="mt-10 pt-10 border-t border-zinc-700 flex flex-col gap-2">
      {librarys.map((library) => (
        <a
          key={library.id}
          href={`/artist/${library.id}`}
          className="flex group gap-4 py-2 items-center text-sm hover:text-zinc-100 hover:bg-white/5 hover:px-5 hover:border-l border-green-400 hover:ease-in hover:transition-all rounded-e-3xl transition delay-40"
        >
          <Image
            className="rounded-full brightness-75 group-hover:brightness-100 "
            src={library.image}
            width={48}
            height={48}
            alt="Capa da banda Lógica Insana"
          />
          <div className="flex flex-col">
            <strong className="text-xs text-zinc-100">{library.name}</strong>
            <span className="text-xs text-zinc-400">Artist</span>
          </div>
        </a>
      ))}
    </nav>
  );
}
