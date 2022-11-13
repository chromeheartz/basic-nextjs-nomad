import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router)
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a style={{ color: router.pathname === "/" ? "red" : "blue"}}>home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a style={{ color: router.pathname === "/about" ? "red" : "blue"}}>about</a>
      </Link>
    </nav>
  );
}
