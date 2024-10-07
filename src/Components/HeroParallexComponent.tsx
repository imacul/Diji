import { HeroParallax } from "@/Components";
import { createClient } from "@/prismicio";


// Define the type of the data coming from Prismic (adjust as needed)
interface HeroParallaxItem {
  title: string;
  link: string;
  thumbnail: string;
}

// This function will fetch data from Prismic
export default async function HeroParallexComponent() {
  const client = createClient();
  const settings = await client.getSingle('settings');

  // Map the data from Prismic to match the structure expected by HeroParallax
  const products: HeroParallaxItem[] = settings?.data?.heroprallex?.map((item: any) => ({
    title: item.title || '', // Assuming the title is a text field, adjust if necessary
    link: item.link.url || '#', // Adjust based on how the link is structured
    thumbnail: item.thumbnail.url || '/supabase1.png', // Default image if no thumbnail
  })) || []; // Fallback to an empty array if data is undefined

  return <HeroParallax products={products} />;
}
