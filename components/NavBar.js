import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === "/" ? "active" : ""}>home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === "/about" ? "active" : ""}>about</a>
      </Link>
      <style jsx>
        {`
          a {
            text-decoration : none;
          }
          .active {
            color : yellow;
          }
        `}
      </style>
    </nav>
  );
}
