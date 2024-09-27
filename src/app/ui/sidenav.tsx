import NavLinks from "@/app/ui/nav-links";
import Link from "next/link";

export default function SideNav() {
  return (
      <div className="flex h-full flex-col justify-end px-3 py-4 md:px-2 bg-custom-bg-dark">
          <div className="flex bg-custom-bg w-full justify-center items-center p-5 mb-3 rounded-md">
            <Link className="text-xl font-bold" href={"/"}>Darcheville Thomas</Link>
          </div>
          <div className="flex grow flex-row justify-start space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
