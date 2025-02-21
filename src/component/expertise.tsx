import { Card } from "flowbite-react";
import { FaDatabase, FaCode, FaPencilRuler, FaRobot } from "react-icons/fa";

export function Expertise() {
const expertise = [
    {
      icon: <FaRobot size={24} className="text-blue-600" />,
    title: "Automation Testing",
    description:
        "As a QA, I am responsible for automating the testing of websites using Selenium and creating the necessary documentation.",
    },
    {
      icon: <FaCode size={24} className="text-blue-600" />,
    title: "Website Developer",
    description:
        "I possess the skills and experience to utilize React.js and TypeScript for front-end development, as well as Laravel and Golang for back-end development.",
    },
    {
      icon: <FaPencilRuler size={24} className="text-blue-600" />,
    title: "UI & UX Design",
    description:
        "I have extensive experience with UI design, honed through my use of Figma, and have also developed UX designs in my role in the UX department.",
    },
    {
      icon: <FaDatabase size={24} className="text-blue-600" />,
    title: "Database Design",
    description:
        "I am able to create a database design and provide a demonstration using dummy data.",
    },
];

return (
    <section className="py-12 px-4 mt-20 bg-white">
    <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertise.map((item, index) => (
            <Card key={index} className="shadow-md border border-gray-200 p-4">
            <div className="flex items-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </Card>
        ))}
        </div>
    </div>
    </section>
);
}
