import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
const imgs = [
    "https://dummyimage.com/600x360",
    "https://dummyimage.com/600x360",
    "https://dummyimage.com/600x360",
    "https://dummyimage.com/600x360",
    "https://dummyimage.com/600x360",
    "https://dummyimage.com/600x360",
];
function index() {
    return (
        <>
            <Navbar />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Master Cleanse Reliac Heirloom
                        </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn
                            asymmetrical gentrify, subway tile poke
                            farm-to-table. Franzen you probably haven't heard of
                            them man bun deep jianbing selfies heirloom.
                        </p>
                    </div>
                    <div class="flex flex-wrap -m-4 md:mx-32">
                        {imgs.map((img) => (
                            <div class="lg:w-1/3 sm:w-1/2 p-4">
                                <div class="flex">
                                    <img
                                        alt="gallery"
                                        class=" inset-0 w-full h-full object-cover object-center"
                                        src={img}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default index;
