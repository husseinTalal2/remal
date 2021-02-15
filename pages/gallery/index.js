import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { firebaseFunctions } from "../../components/utils/FirebaseFunctions";
import { storage } from "../../firebase";
// const imgs = [
//     "https://dummyimage.com/600x360",
//     "https://dummyimage.com/600x360",
//     "https://dummyimage.com/600x360",
//     "https://dummyimage.com/600x360",
//     "https://dummyimage.com/600x360",
//     "https://dummyimage.com/600x360",
// ];


function index() {
    const [imgs, setImgs] = useState([])
    const fetchImages = async () => {
        let result = await storage.ref("gallery").listAll();
        /// map() array of the imageRef.getDownloadURL() promises
        let urlPromises = result.items.map((imageRef) =>
            imageRef.getDownloadURL()
        );
        // return all resolved promises
        return Promise.all(urlPromises);
    };

    useEffect(async () => {
        const urls = await fetchImages();
        setImgs(urls);
    }, []);
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Master Cleanse Reliac Heirloom
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn
                            asymmetrical gentrify, subway tile poke
                            farm-to-table. Franzen you probably haven't heard of
                            them man bun deep jianbing selfies heirloom.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 md:mx-32">
                        {imgs.map((img) => (
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex">
                                    <img
                                        alt="gallery"
                                        className=" inset-0 w-full h-64 object-cover object-center"
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
