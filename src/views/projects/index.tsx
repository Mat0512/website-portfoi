import React from "react";
import Tag from "../../components/tags/Tag";
import Button from "../../components/button";

const Projects = () => {
    return (
        <div className="w-full h-full max-w-6xl mx-auto flex flex-col justify-center items-center gap-3">
            <p className="text-[36px] text-blue drop-shadow-blue self-start">
                Projects
            </p>
            <div className="w-full border border-blue p-7 flex flex-col gap-4">
                <p className="text-orchid text-lg leading-none">
                    BatStateU Alumni Portal and Tracking System
                </p>
                <p className="text-sm">
                    Web based system for analyzing, visualizing, and produce
                    descriptive reports about alumni’s employment data. Also
                    includes posting surveys and announcements.
                </p>
                <div className="flex flex-wrap gap-2">
                    <Tag text="React" />
                    <Tag text="Tailwind CSS" />
                    <Tag text="Node JS" />
                    <Tag text="Express JS" />
                    <Tag text="Mongoose" />
                    <Tag text="Cube JS" />
                </div>
                <div>
                    <Button
                        type="default"
                        text="Github Link"
                        color="orchid"
                        size="md"
                        onClick={() => {
                            console.log("hello");
                        }}
                    />
                </div>
            </div>

            <div className="w-full border border-blue p-7 flex flex-col gap-4">
                <p className="text-orchid text-lg leading-none">
                    This Website Portfolio
                </p>
                <p className="text-sm">
                    My website portfolio. Designed in Figma and coded in React,
                    Tailwind and Framer Motion
                </p>
                <div className="flex flex-wrap gap-2">
                    <Tag text="React" />
                    <Tag text="Tailwind CSS" />
                    <Tag text="Framer Motion" />
                    <Tag text="Figma" />
                </div>
                <div className="flex gap-2">
                    <Button
                        type="default"
                        text="Website Link"
                        color="orchid"
                        size="md"
                        onClick={() => {
                            console.log("hello");
                        }}
                    />
                    <Button
                        type="default"
                        text="Github Link"
                        color="orchid"
                        size="md"
                        onClick={() => {
                            console.log("hello");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
