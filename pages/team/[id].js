import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { firebaseFunctions } from "../../components/utils/FirebaseFunctions";
const member = {
    name: "John Doe",
    position: "Something",
    bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper",
    education:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper",
    experience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper",
};

export const getServerSideProps = async ({query}) => {


    const member = await firebaseFunctions.getMember(query.id).then(data => data);

    return {
        props:{
            member:member
        }
    }
}
function id({member}) {
    return (
        <>
            <Navbar />
            <section>
                <div className="container flex md:flex-row flex-col md:px-36 my-16 justify-center ">
                    <div className="md:w-1/5 w-full flex flex-col items-center">
                        <div className="rounded-full h-40 w-40 flex items-center justify-center overflow-hidden mt-10">
                            <img src={member.img} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mt-4">
                                {member.name}
                            </h1>
                            <p className="text-xl mt-2 text-center md:text-left">{member.position}</p>
                        </div>
                    </div>
                    <div className="md:w-4/5 w-full flex flex-col mx-8">
                        <div className="mt-16">
                            <h1 className="text-3xl font-bold mb-4">bio</h1>
                            <hr />
                            <p className="mt-8">{member.bio}</p>
                        </div>
                        <div className="mt-16">
                            <h1 className="text-3xl font-bold mb-4">
                                Education
                            </h1>
                            <hr />
                            <p className="mt-8">{member.education}</p>
                        </div>
                        <div className="mt-16">
                            <h1 className="text-3xl font-bold mb-4">
                                Experience
                            </h1>
                            <hr />
                            <p className="mt-8">{member.experience}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default id;
