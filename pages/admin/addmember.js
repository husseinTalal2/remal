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
                    <input
                        type="text"
                        placeholder="Name"
                        name="Name"
                        ref={register({ required: true, maxLength: 80 })}
                        className="p-5 my-5 shadow-md w-full"
                    />
                    <textarea
                        name="Bio"
                        ref={register({ required: true })}
                        placeholder="Bio"
                        className="p-5 my-5 shadow-md w-full"
                    />
                    <textarea
                        name="Experience"
                        ref={register({ required: true })}
                        className="p-5 my-5 shadow-md w-full"
                        placeholder="Experience"
                    />
                    <textarea
                        name="Education"
                        ref={register({ required: true })}
                        className="p-5 my-5 shadow-md w-full"
                        placeholder="Education"
                    />

                    <input
                        type="file"
                        name="imgs"
                        className="p-5 my-5"
                        required
                        onChange={(e) => {
                            setImg(e.target.files[0]);
                        }}
                    />
                    <button type="submit"> Submit </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default addmember;
