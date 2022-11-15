import firebase from "firebase";
import React, { useState } from "react";
import db from "firebase";
import {
    EmojiIcon,
    GIFIcon,
    ImageIcon,
    PollIcon,
    ScheduleIcon,
} from "../icons/Icon";

const TweetBox = () => {
    const [content, setContent] = useState("");

    const sendTweet = () => {
        if (content !== "") {
            db.collection("feed").add({
                displayName: "Mr. Code",
                username: "@mrcode",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                image:
                    "https://media.tenor.com/LEe1hkOO6mAAAAAM/penguin-wave.gif",
                avatar:
                    "https://global-uploads.webflow.com/6097e0eca1e875de53031ff6/6128a6efab1b0984562c0979_maxwell-nelson-taiuG8CPKAQ-unsplash-p-2000.jpeg",
            });

            setContent("");
        }
    };

    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
            <textarea
                className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
                placeholder="What's happening?"
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ImageIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <GIFIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PollIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <EmojiIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ScheduleIcon className="w-6 h-6 text-primary-base" />
                    </div>
                </div>
                <button
                    className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                    onClick={sendTweet}
                >
                    Tweet
                </button>
            </div>
        </div>
    );
};

export default TweetBox;
