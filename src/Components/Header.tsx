
//Global Imports
import { createClient } from "@/prismicio";

//Local IMports
import { NavBar } from "@/Components"

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <div>
      <NavBar settings={settings} />
      </div>
  )
}
