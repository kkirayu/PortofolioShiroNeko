import kpk from "../asset/kpk.png";
import jvn from "../asset/javN.png";

export function Portfolio() {
    return (
        <section className="container mx-auto px-6 py-12">
            <div className="container mx-auto">
                <h5 className="text-sm text-gray-500 uppercase">Recent Projects</h5>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">My Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow p-6">
                        <img
                            src={kpk}
                            alt="KPK Logo"
                            className="mx-auto w-[500px] h-auto object-contain"
                        />
                        <h3 className="mt-4 text-xl font-semibold">Quality Assurance KPK SNC</h3>
                        <p className="text-gray-600 text-md">Manual test with QaTouch, Document, and Delivery</p>
                    </div>
                    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow p-6">
                        <img
                            src={jvn}
                            alt="Javan Logo"
                            className="mx-auto w-[500px] h-auto object-contain"
                        />
                        <h3 className="mt-4 text-xl font-semibold">Fullstack Developer</h3>
                        <p className="text-gray-600 text-md">Laravel, ReactJS, Typescript</p>
                    </div>
                    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow p-6">
                        <img
                            src={kpk}
                            alt="KPK Logo"
                            className="mx-auto w-[500px] h-auto object-contain"
                        />
                        <h3 className="mt-4 text-xl font-semibold">Analyst</h3>
                        <p className="text-gray-600 text-md">Mockup, User Guide, SDD, UAD, UAT</p>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    {/* <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 text-lg">
            TBA
          </button> */}
                </div>
            </div>
        </section>
    );
}
