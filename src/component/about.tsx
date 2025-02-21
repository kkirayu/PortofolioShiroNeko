import danilAbout from "../asset/danilabout.png";

export function AboutMe() {
  return (
    <div className="container mx-auto px-4">
      <section className="flex flex-col md:flex-row items-center justify-center p-12 min-h-screen w-full bg-white">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative rounded-lg p-6 w-full max-w-3xl flex justify-center">
            <img
              src={danilAbout}
              alt="Danil"
              className="rounded-lg object-cover w-full h-auto max-h-[600px]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h5 className="text-sm text-gray-500 uppercase">About</h5>
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600">
            I am an enthusiastic and passionate IT professional with a strong background
            in Full-Stack Web Development and Quality Assurance Testing. With 3 years of
            experience, I have honed my skills in building robust web applications, ensuring
            software quality, and optimizing system performance.
          </p>
          <p className="mt-4 text-gray-600">
            Currently, I am pursuing my studies at Universitas Amikom Yogyakarta, continuously
            expanding my knowledge and staying up to date with the latest trends in technology.
            My dedication to problem-solving, efficiency, and innovation drives me to create
            impactful digital solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
