import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { firebaseFunctions } from "../../components/utils/FirebaseFunctions";
import { storage } from "../../firebase";

export const getServerSideProps = async ({ query }) => {
    const post = await firebaseFunctions.getPost(query.id).then((data) => data);
    return {
        props: {
            post: post,
        },
    };
};

function post({ post }) {
    const [imgs, setImgs] = useState("");

    const fetchImages = async () => {
        let result = await storage.ref("posts/" + post.id).listAll();
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
            <main>
                <div className="md:mx-36 mx-8 my-24">
                    <div className="imgs flex flex-wrap justify-evenly items-center">
                        {!!imgs
                            ? imgs.map((img) => {
                                  return (
                                      <div className="md:w-4/12 w-3/6 max-h-64 overflow-hidden">
                                          <img
                                              src={img}
                                              className="object-fill px-4"
                                          />
                                      </div>
                                  );
                              })
                            : ""}
                    </div>
                    <div className="flex flex-col justify-center items-start md:mx-32">
                        <h1 className="text-4xl font-bold my-8">
                            {post.title}
                        </h1>
                        <p className="">{post.body}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default post;
