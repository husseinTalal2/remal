import Link from "next/link";
import React from "react";

function MemberCard({member}) {
    return (
        <Link href={`team/${member.id}`}>
        <a className="lg:w-1/3 md:w-1/2 w-full">
        <div className="p-2 ">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={member.img}
                />
                <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium capitalize">
                        {member.name}
                    </h2>
                    <p className="text-gray-500">{member.position}</p>
                </div>
            </div>
        </div>
        </a>
        </Link>
    );
}


export default MemberCard;
