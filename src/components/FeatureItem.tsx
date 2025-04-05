"use client";
import * as React from "react";

interface FeatureItemProps {
    text: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
    return (
        <div className="flex gap-5 items-center">
            <div className="flex justify-center items-center w-6 h-6 bg-blue-600 rounded-[100px]">

                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                    <path d="M12.9482 2.03032L4.9482 10.0303C4.87852 10.1002 4.79573 10.1557 4.70456 10.1936C4.6134 10.2314 4.51566 10.2509 4.41695 10.2509C4.31824 10.2509 4.2205 10.2314 4.12934 10.1936C4.03817 10.1557 3.95538 10.1002 3.8857 10.0303L0.3857 6.53032C0.315936 6.46056 0.260595 6.37774 0.222839 6.28658C0.185082 6.19543 0.165649 6.09774 0.165649 5.99907C0.165649 5.90041 0.185082 5.80272 0.222839 5.71156C0.260595 5.62041 0.315936 5.53759 0.3857 5.46782C0.455465 5.39806 0.538288 5.34272 0.62944 5.30496C0.720592 5.26721 0.818288 5.24777 0.916951 5.24777C1.01561 5.24777 1.11331 5.26721 1.20446 5.30496C1.29561 5.34272 1.37844 5.39806 1.4482 5.46782L4.41758 8.4372L11.887 0.969074C12.0278 0.828178 12.2189 0.749023 12.4182 0.749023C12.6175 0.749023 12.8086 0.828178 12.9495 0.969074C13.0903 1.10997 13.1695 1.30107 13.1695 1.50032C13.1695 1.69958 13.0903 1.89068 12.9495 2.03157L12.9482 2.03032Z" fill="white" />
                </svg>

            </div>
            <p className="text-base text-zinc-600">{text}</p>
        </div>
    );
};
