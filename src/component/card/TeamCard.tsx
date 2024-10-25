import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GlobeAmericasIcon } from "@heroicons/react/20/solid";

type Props = {
  avatar: string;
  name: string;
  role: string;
  description: string;
  link1?: string;
  link2?: string;
};

const TeamCard = (props: Props) => {
  const { avatar, name, role, description, link1, link2 } = props;

  return (
    <div className="container mx-auto">
      <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white py-10 px-5">
        <div className="h-48 w-48 mx-auto rounded-full flex items-center justify-center overflow-hidden">
          <img
            className="hover:scale-125 transition-all duration-500 w-full h-full object-cover"
            src={avatar}
            alt="Avatar"
            width={500}
            height={500}
          />
        </div>

        <div className="px-6 py-4">
          <a
            href="#"
            className="text-normal text-gray-200 font-semibold pt-2 hover:text-cyan-500 transition-colors duration-300"
          >
            {name}
          </a>
          <p className="text-gray-300 text-sm mb-3 hover:text-cyan-500">
            {role}
          </p>
          <p className="max-w-md mx-auto text-sm md:text-sm lg:text-gray-200">
            {description}
          </p>

          <div className="mt-10 flex items-center justify-center space-x-3">
            {link1 && (
              <a href={link1} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="text-gray-800 hover:text-blue-200"
                  icon={faLinkedin}
                />
              </a>
            )}
            {link2 && (
              <a href={link2} target="_blank" rel="noopener noreferrer">
                <GlobeAmericasIcon
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-200 hover:text-cyan-500"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
