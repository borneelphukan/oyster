type props = {
  thumbnail: string;
  header: string;
  content: string;
};

const NewsCard = ({ thumbnail, header, content }: props) => {
  return (
    <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-x-4 my-1">
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
        <img
          src={thumbnail}
          alt="News thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* News Content */}
      <div className="flex flex-col justify-center flex-1">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {header}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
