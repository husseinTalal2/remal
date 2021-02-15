import Link from "next/link";
import React, { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { firebaseFunctions } from "../utils/FirebaseFunctions";

function ProjectCard({ project }) {
    const [imgs, setImgs] = useState("");

    useEffect(() => {
        storage
            .ref("posts/" + project.id)
            .listAll()
            .then((result) => {
                result.items.forEach((imageRef) => {
                    imageRef.getDownloadURL().then((url) => setImgs(url));
                });
            });
    }, []);
    return (
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
                <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={imgs}
                />
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">
                {project.title}
            </h2>
            <p className="text-base leading-relaxed mt-2">{project.excerpt}</p>
            <Link href={`projects/${project.id}`}>
                <a className="text-indigo-400 inline-flex items-center mt-3">
                    Learn More
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </Link>
        </div>
    );
}

export default ProjectCard;
