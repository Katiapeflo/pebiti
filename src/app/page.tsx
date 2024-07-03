import Image from "next/image";
import Link from "next/link";
import Button from "./components/ui/button";
export default function Home() {
  let mi_edad = 23
  return (
   <div>
    <Link href="http://localhost:3000/nosotres" >Nosotres</Link>
<Button color="primary">Descubre como</Button>
<Button color="secondary">Descubre como</Button>
    </div>
  );
}
