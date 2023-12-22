import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";


const Header = () => {
  return (
    <section id="header" className="pt-10">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="nav_brand mb-4">
              <h2 className="text-lg font-bold">Loream Lipsum</h2>
            </div>
          </div>
          <div className="col-span-12">
            <nav>
              <ul className="flex gap-8 items-center">
                <li className="font-medium text-darkGray border-b-2 border-b-black hover:border-b-[#3282B8] transition-all ease-in-out duration-300">
                  <Link href="/about">About</Link>
                </li>
                <li className="font-medium text-darkGray border-b-2 border-b-black hover:border-b-[#BBE1FA] transition-all ease-in-out duration-300">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="font-medium text-darkGray border-b-2 border-b-black hover:border-b-[#0F4C75] transition-all ease-in-out duration-300">
                  <Link href="/gitHub" className="flex gap-2 items-center">
                    GitHub
                    <span>
                      <LiaExternalLinkAltSolid />
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
