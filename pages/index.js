import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProjectCard from "../components/ui/ProjectCard";
const projects = [
    {
        img: "https://dummyimage.com/1203x503",
        title: "Shooting Stars",
        excerpt:
            "Swag shoindxgoitch literally meditation subway tile tumblrcold-pressed. Gastropub street art beard dreamcatcher neutra,ethical XOXO lumbersexual.",
        link: "/",
    },
    {
        img: "https://dummyimage.com/1203x503",
        title: "Shooting Stars",
        excerpt:
            "Swag shoindxgoitch literally meditation subway tile tumblrcold-pressed. Gastropub street art beard dreamcatcher neutra,ethical XOXO lumbersexual.",
        link: "/",
    },
    {
        img: "https://dummyimage.com/1203x503",
        title: "Shooting Stars",
        excerpt:
            "Swag shoindxgoitch literally meditation subway tile tumblrcold-pressed. Gastropub street art beard dreamcatcher neutra,ethical XOXO lumbersexual.",
        link: "/",
    },
];
export default function Home() {
    return (
        <>
            <div className="header h-screen">
                <div className="overlay h-full flex flex-col">
                    <Navbar />
                    <div className="h-full w-100 flex justify-center items-center">
                        <p className="text-white text-3xl font-bold uppercase">
                            something here
                        </p>
                    </div>
                </div>
            </div>
            <main>
                <section className="text-gray-600 body-font md:px-24">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                WHO WE ARE
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Copper mug try-hard pitchfork pour-over freegan
                                heirloom neutra air plant cold-pressed tacos
                                poke beard tote bag. Heirloom echo park mlkshk
                                tote bag selvage hot chicken authentic tumeric
                                truffaut hexagon try-hard chambray.
                            </p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="https://dummyimage.com/720x600"
                            />
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font md:px-24 bg-black bg-opacity-5">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
                                OUR SERVICES
                            </h1>
                        </div>
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className=" bg-white card px-4 py-6 rounded-lg">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">
                                        2.7K
                                    </h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className=" bg-white card px-4 py-6 rounded-lg">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">
                                        2.7K
                                    </h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className=" bg-white card px-4 py-6 rounded-lg">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">
                                        2.7K
                                    </h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className=" bg-white card px-4 py-6 rounded-lg">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">
                                        2.7K
                                    </h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-400 bg-gray-900 body-font md:px-24">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            <div className="flex flex-wrap justify-center sm:flex-row flex-col py-6 mb-12">
                                <h1 className=" text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                                    OUR LATEST PROJECTS
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                            {projects.map(project => <ProjectCard project={project} />)}
                            
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font md:px-24 bg-black bg-opacity-5">
                    <div className="flex flex-col justify-center py-28">
                        <h2 className="text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 uppercase">
                            To know more about the company
                        </h2>
                        <div className="flex justify-center">
                            <Link href="/contact">
                                <a className="mt-8 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    CONTACT US
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
