import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Unlock() {
    const navigate = useNavigate();
    return(
        <div className="container mx-auto p-2.5 text-[#2C2C5E]">
            <div className="mb-5">
                <Typography className="mt-12 font-sans text-2xl laptop:text-4xl font-medium leading-10">
                    Unlocking the Power of PDFs Through Chatbot Integration: Benefits and Opportunities
                </Typography>
            </div>
            <div className="container mb-5">
                <div className="mt-10">Filebot is an innovative chatbot that generates answers to user queries using PDF files as source material. With a language model similar to Chat GPT, Filebot intelligently understands user questions and establishes connections within the PDF to generate the best possible answer. This enables information to be accessed in a smart and efficient manner. In this blog post, we’ll explore the benefits and opportunities offered by integrating chatbot technology with PDF files, highlighting the potential of handling up to six million characters.</div>
                <div className="mt-16">
                    <Typography className="text-xl laptop:text-2xl font-medium text-inherit">Benefits of Unlocking PDFs Through Chatbot Integration:</Typography>
                </div>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 ease-linear duration-300 mt-10">
                    <div className="col-span-1">
                        <div className="pl-10 w-full">
                            <ol className="list-decimal w-full">
                                <li>
                                    <strong>Streamlined access to information</strong>
                                    <br />
                                    – Efficiently search and navigate PDF content
                                    <br />
                                    – Reduce time spent on manual document searches
                                </li>
                                <li>
                                    <strong>Enhanced customer support</strong>
                                    <br />
                                    – Provide instant, accurate answers to user queries
                                    <br />
                                    – Handle multiple customer inquiries simultaneously
                                </li>
                                <li>
                                    <strong>Improved internal communication and collaboration</strong>
                                    <br />
                                    – Facilitate easy access to important documents for employees
                                    <br />
                                    – Simplify knowledge sharing within teams
                                </li>
                                <li>
                                    <strong>Free up human resources for more complex issues</strong>
                                    <br />
                                    – Increased productivity and efficiency
                                    <br />
                                    – Minimize time-consuming manual tasks
                                    <br />
                                    – Optimize workflows and processes
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mx-auto">
                            <img className="w-full mx-auto rounded-3xl" src="/img/bg4.jpg" />
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="mb-5">
                        <Typography className="text-2xl font-medium text-inherit">Opportunities Presented by Chatbot Integration with PDFs:</Typography>
                    </div>
                    <div>
                        <ol className="list-decimal ml-10">
                            <li>
                                <strong>Scalability: Up to 6 million characters</strong>
                                <br />
                                – Accommodate large volumes of text for comprehensive support
                                <br />
                                – Handle extensive libraries of documents without compromising performance
                            </li>
                            <li>
                                <strong>Advanced language understanding</strong>
                                <br />
                                – Utilize natural language processing (NLP) for improved query comprehension
                                <br />
                                – Offer more precise and relevant answers to user inquiries
                            </li>
                            <li>
                                <strong>Seamless integration with existing systems</strong>
                                <br />
                                – Easily incorporate Filebot into your current infrastructure
                                <br />
                                – Enhance your knowledge base with minimal disruption
                            </li>
                            <li>
                                <strong>Continuous improvement through AI advancements</strong>
                                <br />
                                – Benefit from ongoing developments in AI technology
                                <br />
                                – Evolve your chatbot capabilities alongside the latest innovations
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="my-16">
                    <Typography className="mb-5 text-xl laptop:text-2xl font-medium text-inherit">Conclusion</Typography>
                    <div className="font-bold">Integrating chatbot technology with PDF files presents a wealth of benefits and opportunities for businesses looking to streamline access to information, enhance customer support, and improve internal communication. With the potential to handle up to six million characters, Filebot offers a scalable and powerful solution for unlocking the true potential of your PDF documents. Embrace the future of information access and harness the power of Filebot to elevate your business operations.</div>
                </div>
                <button className="w-[300px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Check here for the Filebot options</button>
            </div>
            <div className="grid grid-cols-2 divide-x mb-5">
                <div className="col-span-1 text-left flex flex-row justify-start items-center cursor-pointer overflow-hidden" onClick={() => navigate("/blog/revolution")}>
					<div className="mr-1">
						<img className="w-[30px]" src="/img/prev.png" />
					</div>
					<div className="flex flex-col" style={{ width: "calc(100% - 30px)" }}>
						<span className="text-xs">PREVIOUS</span>
						<span className="truncate w-auto text-red-500 hover:text-[#2C2C5E] text-xs">Revolutionize Your Helpdesk with Filebot: Harness the Power of a Chatbot on Your Own Content</span>
					</div>
				</div>
				<div className="col-span-1 text-right flex flex-row justify-end items-center cursor-pointer overflow-hidden" onClick={() => navigate("/blog/optimize")}>
					<div className="flex flex-col"  style={{ width: "calc(100% - 30px)" }}>
						<span className="text-xs">NEXT</span>
						<span className="truncate w-auto text-red-500 hover:text-[#2C2C5E] text-xs">Optimizing PDF Content Structure for Filebot and NLP Integration</span>
					</div>
					<div className="ml-1">
						<img className="w-[30px]" src="/img/next.png" />
					</div>
				</div>
            </div>
        </div>
    );
}

export default Unlock;