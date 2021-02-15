import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import MemberCard from "../../components/ui/MemberCard";
import { firebaseFunctions } from "../../components/utils/FirebaseFunctions";
export const getServerSideProps = async () => {
    const members = await firebaseFunctions.getMembers().then((data) => data);
    return {
        props: {
            members: members,
        },
    };
};
function index({ members }) {
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 md:px-32">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Our Team
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn
                            asymmetrical gentrify, subway tile poke
                            farm-to-table. Franzen you probably haven't heard of
                            them.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {members.map((member) => (
                            <MemberCard member={member} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default index;
