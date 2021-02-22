import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { firebaseFunctions } from "../../components/utils/FirebaseFunctions";

function gallery() {
    const [imgs, setImgs] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        firebaseFunctions.addGalleryImgs(imgs);
    };
    return (
        <>
            <Navbar />
            <div>
                <div className="flex justify-center items-center my-16">
                    <h1 className="text-4xl font-bold uppercase">
                        {" "}
                        add galley photos
                    </h1>
                </div>
                <div className="flex justify-center items-center ">
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label className="custom-file-input bg-black text-white px-8 py-4 rounded cursor-pointer">
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
                        className="submit-btn flex justify-center mt-5 items-center shadow px-8 py-4 text-white rounded"
                    >
                        SUBMIT
                    </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default gallery;
