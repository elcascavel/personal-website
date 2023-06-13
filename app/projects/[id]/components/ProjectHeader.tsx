"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Project } from "@/types";
import Image from "next/image";
import { useUser } from "@/hooks/useUser";
import { BiTrash } from "react-icons/bi";
import Button from "@/components/Button";

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const { user } = useUser();
  const imagePath = useLoadImage(project);

  return (
    <div className="mb-2 flex flex-row items-center gap-x-6">
      <div className="relative aspect-square w-48 md:w-60 h-full overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src={imagePath || "/images/music-placeholder.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-4">
          <a
            href={project.link}
            className="text-neutral-50 text-2xl md:text-4xl font-bold"
          >
            {project.title}
          </a>

          {user && (
            <div className="flex gap-x-4 items-center">
              <Button
                onClick={() => {
                  console.log("TODO: Delete project.");
                }}
                className="bg-white hover:opacity-100 hover:bg-red-500 hover:text-white"
              >
                <BiTrash size={16} />
              </Button>
            </div>
          )}
        </div>
        <p className="text-neutral-50">{project.technologies.join(", ")}</p>
        <div>
          <p className="font-semibold">{project.author}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
