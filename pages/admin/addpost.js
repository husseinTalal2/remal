import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { firebaseFunctions } from "../../components/utils/FirebaseFunctions";

function addpost() {
    const { register, handleSubmit, errors } = useForm();
    const [imgs, setImgs] = useState([]);

    const onSubmit = (data) => {
        firebaseFunctions.addPost(data, imgs);
    };

    return (
        <>
            <Navbar />
            <div className="container w-4/5 mx-auto">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-center items-center w-full mt-16"
                >
                    <label className="my-4 text-2xl">English</label>
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        ref={register({ required: true })}
                        className="p-5 my-5 shadow-md w-full"
                    />
                    <textarea
                        name="body"
                        ref={register({ required: true })}
                        className="p-5 my-5 shadow-md w-full"
                        placeholder="Body"
                    />
                    <textarea
                        name="excerpt"
                        ref={register({ required: true, max: 200 })}
                        className="p-5 my-5 shadow-md w-full"
                        placeholder="Excerpt"
                    />
                    <hr />
                    <label className="mb-4 mt-8 text-2xl">Arabic</label>
                    <input
                        type="text"
                        placeholder="Title"
                        name="arTitle"
                        ref={register({ required: true })}
                        className="p-5 my-5 shadow-md w-full"
                    />
                    <textarea
                        name="arBody"
                        ref={register({ required: true })}
                        className="p-5 my-5 shadow-md w-full"
                        placeholder="Body"
                    />
                    <textarea
                        name="arExcerpt"
                        ref={register({ required: true, max: 200 })}
                        className="p-5 my-5 shadow-md w-full"
                        placeholder="Excerpt"
                    />
                    <label className="custom-file-input bg-black text-white px-8 py-4 my-4 rounded cursor-pointer">
                        <input
                            type="file"
                            name="imgs"
                            multiple
                            onChange={(e) => {
                                setImgs(e.target.files);
                            }}
                            className="p-5 my-5"
                            required
                            placeholder="click to choose"
                            id="imgs-input"
                        />
                            Select Images
                        </label>
                    <button
                        type="submit"
                        className="submit-btn flex items-center shadow px-8 py-4 text-white rounded"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default addpost;
