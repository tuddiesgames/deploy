import Link from "next/link"
import Image from "next/image";

interface Mobilenav{
    name: string
    route: string
}
const FullPageNav = ({ navList, setIsOpen }:any) => {
    return (
      <div className="fixed inset-0 bg-secondaryDark p-2 flex flex-col gap-10 z-50">
        <button
          onClick={() => setIsOpen(false)}
          className="self-end text-white"
        >
        <Image
          src="/cancel.png"
          alt="Menu Icon"
          width={40}
          height={40}
          className="justify-center"
          onClick={() => setIsOpen(true)}
        />
        </button>
        {navList.map((nav:Mobilenav) => (
          <li key={nav.name} className="list-none hover:text-complementary text-center text-white text-3xl ">
            <Link href={nav.route}>
              {nav.name}
            </Link>
          </li>
        ))}
      </div>
    );
  };
  
  export default FullPageNav;