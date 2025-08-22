import { cookies } from "next/headers";
import FeaturedCard from "../components/featured-card";

export const metadata = {
  title: "Featured"
};

export default async function Featured() {
  const cookieStore = await cookies();

  const access_token = cookieStore.get ("iplaymusic_access_token")

  const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
    headers: {
      "Authorization": `Bearer ${access_token.value}`
    }
  });

  const data = await response.json();
  console.log("data", data);

  return (
    <ul className="albums">
        {data?.albums?.items?.map
        (item => (
          <li key={item.id}>
          <FeaturedCard item={item} />
        </li>)
      )}
        
      </ul>
  );
}
