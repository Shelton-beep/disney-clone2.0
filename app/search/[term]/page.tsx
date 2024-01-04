import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound;

  //removing percentages on movie name e.g star%wars should return starwars
  const termToUse = decodeURI(term);

  //API TO GET THE SEARCHED MOVIES
  //API TO GET THE POPULAR MOVIES

  return <div>SearchPage: {termToUse}</div>;
}

export default SearchPage;
