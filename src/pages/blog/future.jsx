import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Future() {
    const navigate = useNavigate();
    return(
        <div className="container mx-auto p-2.5 text-[#2C2C5E]">
            <div className="mb-5">
                <Typography className="mt-12 font-sans text-2xl laptop:text-4xl font-medium leading-10">
                    The Future of On-Topic Information: Embracing GPT Chatbots like Filebot for Website Content Delivery
                </Typography>
            </div>
            <div className="container mb-5">
                <div className="mb-10">As businesses and users seek efficient ways to access relevant website information. GPT chatbots like Filebot are revolutionizing content delivery. By staying on topic and providing polite answers when the requested information is not available in the embedded PDFs, Filebot ensures a user-friendly and accurate experience. In this article, we will discuss how chatbots like Filebot are shaping the future of on-topic information presentation, replacing a traditional webpage with a more interactive and engaging approach.</div>
                <div className="mt-16 ml-5">
                    <Typography className="text-xl laptop:text-2xl font-medium text-inherit">Website Content Delivery using a GPT chatbot</Typography>
                </div>
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 ease-linear duration-300 mt-10">
                    <div className="col-span-1 tablet:col-span-1 laptop:col-span-2">
                        <div className="w-full">
                            <ul className="list-disc ml-10">
                                <li className="mb-5">
                                    <strong>User-Centric and Interactive Experience:</strong>
                                    <br />
                                    – Filebot offers a personalized and interactive experience, allowing users to ask questions and receive tailored responses
                                    <br />
                                    – Unlike traditional webpages, Filebot engages users in a conversation, making information retrieval more natural and enjoyable.
                                    <br />
                                    - This user-centric approach enhances customer satisfaction and promotes loyalty.
                                </li>
                                <li className="mb-5">
                                    <strong>Streamlined Access to Relevant Information:</strong>
                                    <br />
                                    – By focusing on embedded PDFs, Filebot ensures that users receive on-topic answers, minimizing the need for extensive browsing or searching.
                                    <br />
                                    – Filebot eliminates the need to sift through irrelevant content, providing users with the information they need quickly and efficiently
                                    <br />
                                    - As a result, users save time and effort, leading to increased productivity and satisfaction
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mx-auto">
                            <img className="w-full mx-auto rounded-3xl" src="/img/bg1.jpg" />
                        </div>
                    </div>
                </div>
                
                <div className="mt-16">
                    <ul className="list-disc ml-5">
                        <li className="mt-5">
                            <strong>Enhanced Knowledge Management for Businesses:</strong>
                            <br />
                            – Filebot enables businesses to curate and maintain a targeted knowledge base, ensuring that users receive accurate and up-to-date information.
                            <br />
                            – By consolidating content within embedded PDFs, Filebot makes it easier for companies to update and manage their information resources.
                            <br />
                            - This streamlined approach to knowledge management benefits both businesses and users, promoting effective communication and reducing the risk of misinformation.
                        </li>
                        <li className="mt-5">
                            <strong>AI-Powered Accuracy and Politeness:</strong>
                            <br />
                            - Filebot’s advanced NLP techniques, similar to Chat GPT, ensure accurate and on-topic responses.
                            <br />
                            – When an answer is not available within the embedded PDFs, Filebot provides a polite response, guiding users to seek further assistance.
                            <br />
                            - This combination of accuracy and politeness promotes user trust and satisfaction, fostering positive interactions with the chatbot.
                        </li>
                        <li className="mt-5">
                            <strong>Adaptable and Scalable Solutions:</strong>
                            <br />
                            – GPT chatbots like Filebot can be easily integrated into various platforms and websites, offering a versatile solution for businesses in different industries.
                            <br />
                            – As content needs evolve, Filebot can adapt to new information sources and formats, ensuring ongoing relevance and value
                            <br />
                            - This adaptability and scalability make Filebot a future-proof solution for content delivery and information retrieval
                        </li>
                    </ul>
                </div>
                <div className="my-16">
                    <Typography className="mb-5 text-xl laptop:text-2xl font-medium text-inherit">Conclusion</Typography>
                    <div className="font-bold">GPT chatbots like Filebot are paving the way for the future of on-topic information presentation, offering users a more engaging and efficient alternative to traditional webpages. By providing accurate, polite, and user-centric experiences, Filebot is transforming how users access and interact with content. As businesses and users continue to embrace this innovative approach, GPT chatbots like Filebot will play an increasingly vital role in shaping the future of content delivery and knowledge management.</div>
                </div>
                <button className="w-[300px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Check here for our Filebot options</button>
            </div>
            <div className="grid grid-cols-2 divide-x mb-5">
                <div></div>
                <div className="col-span-1 text-right flex flex-row justify-end items-center cursor-pointer overflow-hidden" onClick={() => navigate("/blog/boost")}>
                    <div className="flex flex-col"  style={{ width: "calc(100% - 30px)" }}>
                        <span className="text-xs">NEXT</span>
                        <span className="truncate w-auto text-red-500 hover:text-[#2C2C5E] text-xs">Boost Your Business with a Smart Chatbot: The Ultimate Guide to Enhancing Customer Experience</span>
                    </div>
                    <div className="ml-1">
                        <img className="w-[30px]" src="/img/next.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Future;