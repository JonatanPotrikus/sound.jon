import { useEffect } from "react";

type Props = {
  params: {
    name: string;
  };
};

export default function ArtistProfile({ params }: Props) {
  return (
    <>
      <h1>Artist profile {params.name}</h1>
    </>
  );
}
