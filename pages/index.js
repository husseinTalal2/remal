import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
    return (
        <>
            <div className="header h-screen">
              <div className="overlay h-full flex flex-col">
                <Navbar />
                <div className="h-full w-100 flex justify-center items-center">
                  <p className="text-white text-3xl font-bold uppercase">something here</p>
                </div>
              </div>
            </div>
            <main></main>
        </>
    );
}
