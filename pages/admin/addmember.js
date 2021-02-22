import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { firebaseFunctions } from "../../components/utils/FirebaseFunctions";
function addmember() {
    const { register, handleSubmit, errors } = useForm();
    const [img, setImg] = useState(null);
    const onSubmit = (data) => {
        console.log(errors);
        firebaseFunctions.addMember(data, img);
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
                        placeholder="Name"
                        name="name"
                        ref={register({ required: true, maxLength: 80 })}
                        className="p-5 my-5 shadow-md w-full"
                    />
                    <input
                        type="text"
                        placeholder="Position"
                        name="position"
                        ref={register({ required: true, maxLength: 80 })}
                        className="p-5 my-5 shadow-md w-full"
                    />
                    <textarea
                        name="bio"
                        ref={register({ required: true })}
                        placeholder="Bio"
                        className="p-5 my-5 shadow-md w-full"
                    />
                    <textarea
                        name="experience"
                        ref={register({ required: true })}
                        className="p-5 my-5 shadow-md w-full"
                        placeholder="Experience"
                    />
                    <textarea
                        name="education"
                        ref={register({ required: true })}
                        className="p-5 my-5 shadow-md w-full"
                        placeholder="Education"
                    />

                    <label className="mb-4 mt-8 text-2xl">Arabic</label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="arName"
                        ref={register({ required: true, maxLength: 80 })}
                        className="p-5 my-5 shadow-md w-full"
                    />
                    <input
                        type="text"
                        placeholder="Position"
                        name="arPosition"
                        ref={register({ required: true, maxLength: 80 })}
                        className="p-5 my-5 shadow-md w-full"
                    />
                    <textarea
                        name="arBio"
                        ref={register({ required: true })}
                        placeholder="Bio"
                        className="p-5 my-5 shadow-md w-full"
                    />
                    <textarea
                        name="arExperience"
                        ref={register({ required: true })}
                        className="p-5 my-5 shadow-md w-full"
                        placeholder="Experience"
                    />
                    <textarea
                        name="arEducation"
                        ref={register({ required: true })}
                        className="p-5 my-5 shadow-md w-full"
                        placeholder="Education"
                    />
                    <label className="custom-file-input bg-black shadow text-white px-8 py-4 my-4 rounded cursor-pointer">
                        <input
                            type="file"
                            name="imgs"
                            className="p-5 my-5"
                            required
                            onChange={(e) => {
                                setImg(e.target.files[0]);
                            }}
                            id="imgs-input"
                            className="p-5 my-5"
                        />
                        Select image
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

export default addmember;
