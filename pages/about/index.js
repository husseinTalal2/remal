import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
function index() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto">
                <div className="flex flex-col justify-center items-center mt-16 md:mx-48 mx-12">
                    <h1 className="font-extrabold uppercase text-4xl">
                        who we are
                    </h1>
                    <p className="my-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque nisl eros, pulvinar facilisis justo mollis,
                        auctor consequat urna. Morbi a bibendum metus. Donec
                        scelerisque sollicitudin enim eu venenatis. Duis
                        tincidunt laoreet ex, in pretium orci vestibulum eget.
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Duis pharetra
                        luctus lacus ut vestibulum. Maecenas ipsum lacus,
                        lacinia quis posuere ut, pulvinar vitae dolor. Integer
                        eu nibh at nisi ullamcorper sagittis id vel leo. Integer
                        feugiat faucibus libero, at maximus nisl suscipit
                        posuere. Morbi nec enim nunc. Phasellus bibendum turpis
                        ut ipsum egestas, sed sollicitudin elit convallis. Cras
                        pharetra mi tristique sapien vestibulum lobortis. Nam
                        eget bibendum metus, non dictum mauris. Nulla at tellus
                        sagittis, viverra est a, bibendum metus.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center mt-16 md:mx-48 mx-12">
                    <h1 className="font-extrabold uppercase text-4xl">
                        our vision
                    </h1>
                    <p className="my-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque nisl eros, pulvinar facilisis justo mollis,
                        auctor consequat urna. Morbi a bibendum metus. Donec
                        scelerisque sollicitudin enim eu venenatis. Duis
                        tincidunt laoreet ex, in pretium orci vestibulum eget
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center mt-16 md:mx-48 mx-12">
                    <h1 className="font-extrabold uppercase text-4xl">
                        Mission
                    </h1>
                    <p className="my-10">
                        ullamcorper sagittis id vel leo. Integer feugiat
                        faucibus libero, at maximus nisl suscipit posuere. Morbi
                        nec enim nunc. Phasellus bibendum turpis ut ipsum
                        egestas, sed sollicitudin elit convallis. Cras pharetra
                        mi tristique sapien vestibulum lobortis. Nam eget
                        bibendum metus, non dictum mauris. Nulla at tellus
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default index;
