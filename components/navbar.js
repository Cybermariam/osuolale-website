// import Link from "next/link";
// import MobileMenu from "./MobileMenu";
// import NavigationLinks from "./NavigationLinks";
// import NavbarActions from "./NavbarActions";

// export default function Navbar() {
//   return (
//     <nav
//       className="relative bg-(--page-background) shadow flex justify-between items-center p-4
//     "
//     >
//       <Link className="flex items-center gap-2 cursor-pointer" href="/">
//         <div className="bg-(--brand-primary) flex justify-center items-center w-6 h-6">
//           L
//         </div>
//         <div className=" text-(--text-primary) font-bold">Osuolale</div>
//       </Link>
//       <MobileMenu />
//       <NavigationLinks mobile={false} />

//       <NavbarActions mobile={false} />
//     </nav>
//   );
// }
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavigationLinks from "./NavigationLinks";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  return (
    <nav className="bg-(--page-background) shadow px-6 md:px-12 lg:px-16">
      <div className=" py-4 flex justify-between items-center">
        <Link className="flex items-center gap-2 cursor-pointer" href="/">
          <div className="bg-(--brand-primary) flex justify-center items-center w-6 h-6">
            L
          </div>
          <div className="text-(--text-primary) font-bold">Osuolale</div>
        </Link>

        <MobileMenu />
        <NavigationLinks mobile={false} />
        <NavbarActions mobile={false} />
      </div>
    </nav>
  );
}
