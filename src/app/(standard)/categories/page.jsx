import { cookies } from "next/headers";

export const metadata = {
  title: "Catergories"
};

const colors = [
  "bg-pink",
  "bg-dark-orange",
  "bg-light-orange",
  "bg-yellow",
  "bg-light-green",
  "bg-dark-green",
  "bg-turquoise",
  "bg-light-blue",
  "bg-dark-blue",
];

export default async function CategoryPage() {

    const cookieStore = await cookies();
    
      const access_token = cookieStore.get ("iplaymusic_access_token")

      const categoryresponse = await fetch("https://api.spotify.com/v1/browse/categories", {
        headers: {
            "Authorization": `Bearer ${access_token.value}`
        }
        
        })
        const categorydata = await categoryresponse.json();
        console.log("categorydata", categorydata);
    
      return (
        <ul className="flex flex-col items-center gap-[16px]">
            {categorydata?.categories?.items?.map
            ((item, index) => 
              
              <li className=" " key={item.id}>
      
              <p className={` ${colors[index % colors.length]} w-[325px] text-white  pl-6 justify-items-center pt-[17] pb-[13] rounded-[10]`}>{item.name} </p>
              
            </li>
          )}
            
          </ul>
      );
}