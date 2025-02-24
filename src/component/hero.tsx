import { Button } from "flowbite-react";
import danil from "../asset/dasdad.png";

export function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center p-12 bg-blue-50 min-h-screen w-screen">
            <div className="max-w-2xl ml-36 text-center md:text-left mr-36 flex flex-col items-center md:items-start">
                <p className="text-gray-600 text-lg">Hey, I am Danil</p>
                <h1 className="text-5xl font-bold text-gray-900">
                    I <span className="text-blue-600">Software Engineer</span>
                </h1>
                <h2 className="text-3xl font-semibold text-gray-800 mt-2">and UI & UX Designer</h2>
                <p className="text-gray-600 mt-6 text-lg">
                    I have extensive experience working as a project programmer at the Ministry of Education in Malaysia.
                </p>
                <Button className="mt-6 px-6 py-3 text-lg" color="blue">Read</Button>
            </div>
            <div className="relative mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
                <div className="relative rounded-lg bg-blue-50 w-full max-w-2xl flex justify-center">
                    <img
                        src={danil}
                        alt="Danil"
                        className="rounded-lg object-cover w-full h-auto"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        { }
                    </div>
                </div>
            </div>
        </section>
    );
}
