import Image from "next/image";
const Index = () =>{ 
    return(
            <div className="flex flex-col md:flex-row items-center self-center mt-20 w-3/4 bg-secondaryDark rounded-3xl">
              <Image
                src="/dhurgesh.png"
                alt="Dhurgeshwaran"
                width={500}
                height={500}
                className="mb-10 md:mb-0"
              />
              <div className="p-5 flex flex-col items-center md:items-start md:ml-10">
                <h1 className="text-h1 relative w-max mb-5 text-white font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-secondaryDark">
                  DhurgeshWaran
                </h1>
                <h2 className="text-h2 before:animate-pageLoading">FullStack Web & App Developer</h2>
              </div>
            </div>
          );
        };

export default Index