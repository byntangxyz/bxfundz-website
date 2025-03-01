import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      className="pt-16 pb-24 bg-light dark:bg-dark transition-colors dark:text-white"
      id="about"
    >
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 dark:text-blue-400">
              About Me
            </h4>
            <h2 className="font-bold text-black text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
              Who am I?
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full self-center px-6 py-8 lg:w-1/2 bg-primary text-white">
            <p className="text-base font-medium text-slate-300 text-justify mb-6">
              <span className="text-white text-lg">
                Hello I'm
                <span className="text-white text-lg font-semibold block lg:inline-block">
                  Bintang Maulana Murtifandy,
                </span>
              </span>
              you can call me "Tang" or "Fund". I'm from Bantul, but I stayed in
              the Kota Yogyakarta. Right now I'm a grade 10 student who attends
              <a
                href="https://smkn2depoksleman.sch.id/utama/"
                className="text-secondary"
              >
                SMK N2 Depok Sleman
              </a>
              . I'm interested in programming, focusing on web development.
              Beyond that, I'm also interested in photography and computer
              networking.
            </p>
            <div className="w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">
                Support me to buy Camera
              </h2>
              <div className="flex items-center">
                <img
                  src="https://img.lazcdn.com/g/ff/kf/S9b950b43c5914e229a42b4e4dd83a8eca.jpg_720x720q80.jpg"
                  width="50px"
                  alt="Placeholder Image"
                  className="mr-4 rounded-lg lg:w-[150px]"
                />
                <div className="w-full">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs hidden font-semibold py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mb-4 lg:inline-block">
                        Progress to Rp3.000.000,00
                      </span>
                    </div>
                    <div className="flex h-2 mx-4 mb-8 bg-gray-200 rounded">
                      <div
                        className="bg-teal-600 h-full rounded"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                    <a
                      href="https://saweria.co/bxie"
                      className="px-4 py-2 rounded-lg shadow-lg text-white bg-secondary"
                    >
                      Contribute
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full self-center text-xl px-12 py-8 lg:w-1/2 md:text-2xl">
            <h4 className="font-bold mx-auto my-2">What can I do?</h4>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-8 lg:grid-cols-5">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "PHP",
                "Java",
                "TailwindCSS",
                "Laravel",
                "React",
                "Vue",
              ].map((tech, index) => (
                <a
                  key={index}
                  href=""
                  className="transform transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={`img/${tech.toLowerCase()}.png`}
                    alt={`${tech} Logo`}
                    priority={false}
                    className="h-16 w-16"
                  />
                </a>
              ))}
            </div>
            <div className="container mt-4">
              <h4 className="font-bold mx-auto">Connect with me</h4>
              <p className="font-medium text-slate-500 text-sm md:text-lg mb-4">
                I'll be happy to connect with you on social media. Here are my
                social media:
              </p>
              <div className="sosmed text-6xl gap-4 flex">
                <a
                  href="https://www.tiktok.com/@byntangxyz_"
                  target="_blank"
                ></a>
                <a
                  href="https://www.instagram.com/byntangxyz"
                  target="_blank"
                ></a>
                <a href="https://github.com/byntangxyz" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
