import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ui/ProjectCard";
import fetcher from "../../components/utils/fetcher";
import { firebaseFunctions } from "../../components/utils/FirebaseFunctions";
export const getServerSideProps = async () => {
    const projects = await firebaseFunctions.getPosts().then(data => data);
    return {
        props: {
            projects: projects,
        },
    };
};
// const projects = [
//     {
//         img: "https://dummyimage.com/1203x503",
//         title: "Shooting Stars",
//         excerpt:
//             "Swag shoindxgoitch literally meditation subway tile tumblrcold-pressed. Gastropub street art beard dreamcatcher neutra,ethical XOXO lumbersexual.",
//         link: "/",
//     },
//     {
//         img: "https://dummyimage.com/1203x503",
//         title: "Shooting Stars",
//         excerpt:
//             "Swag shoindxgoitch literally meditation subway tile tumblrcold-pressed. Gastropub street art beard dreamcatcher neutra,ethical XOXO lumbersexual.",
//         link: "/",
//     },
//     {
//         img: "https://dummyimage.com/1203x503",
//         title: "Shooting Stars",
//         excerpt:
//             "Swag shoindxgoitch literally meditation subway tile tumblrcold-pressed. Gastropub street art beard dreamcatcher neutra,ethical XOXO lumbersexual.",
//         link: "/",
//     },
// ];
function index({projects}) {
    console.log(projects);
    return (
        <>
            <Navbar />
            <section className="text-gray-400 body-font bg-gray-900">
                <div className="md:w-4/5 px-5 md:px-0 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {projects.map(project => <ProjectCard project={project}/>) }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default index;
