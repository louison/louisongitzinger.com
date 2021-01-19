import {TrackType} from "../types";

type TrackProps = TrackType & { ranking: number }

const Track = ({ranking, songUrl, artist, title}: TrackProps) => {
    return (
        <div
            className="flex flex-row items-baseline border-b border-gray-100 dark:border-gray-800 max-w-3xl w-full mt-8">
            <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
                {ranking}
            </p>
            <div className="flex flex-col pl-3">
                <a
                    className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
                    href={songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
                <p
                    className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
                    color="gray.500"
                >
                    {artist}
                </p>
            </div>
        </div>
    );
}

export default Track;