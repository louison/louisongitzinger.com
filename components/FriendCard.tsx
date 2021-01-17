type FriendCardProps = {
    title: string
    description: string
    href: string
    icon: string
}

const FriendCard = ({title, description, href, icon}: FriendCardProps) => {
    return (
        <a
            className="mb-4 hover:shadow"
            href={href}
            // onClick={() => trackGoal(title)}
            aria-label={title}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex items-center border border-gray-200 h-full dark:border-gray-800 rounded p-4">
                <div className="h-8 w-8 ml-2 mr-4">
                    <span className="sr-only">{title.toUpperCase()}</span>
                    <div
                        className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                    >
                        <img
                            src={icon}
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        {title}
                    </h4>
                    <p className="leading-5 text-gray-700 dark:text-gray-300">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    );
}

export default FriendCard