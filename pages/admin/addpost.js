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
                    <input
                        type="file"
                        name="imgs"
                        multiple
                        onChange={(e) => {
                            setImgs(e.target.files);
                        }}
                        className="p-5 my-5"
                        required
                    />
                    <button type="submit"> Submit </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default addpost;
