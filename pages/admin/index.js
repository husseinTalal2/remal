import Link from "next/link";
import React from "react";
import { Plus } from "react-feather";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function index() {
    return (
        <>
            <Navbar />
            <main>
                <section className="h-screen">
                    <div className="flex flex-wrap justify-center items-center mt-36">
                        <Link href="/admin/addpost">
                            <div className="flex justify-evenly items-center bg-white p-5 rounded shadow-md hover:shadow-sm mx-5 cursor-pointer">
                                <Plus /> ADD POST
                            </div>
                        </Link>
                        <Link href="/admin/addmember">
                            <div className="flex justify-evenly items-center bg-white p-5 rounded shadow-md hover:shadow-sm mx-5 cursor-pointer">
                                <Plus /> ADD MEMBER
                            </div>
                        </Link>
                        <Link href="/admin/gallery">
                            <div className="flex justify-evenly items-center bg-white p-5 rounded shadow-md hover:shadow-sm mx-5 cursor-pointer">
                                <Plus /> ADD GALLERY IMAGES
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default index;
