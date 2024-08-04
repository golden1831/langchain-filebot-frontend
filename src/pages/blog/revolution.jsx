import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Revolution() {
    const navigate = useNavigate();

    return(
        <div className="container mx-auto p-2.5 text-[#2C2C5E]">
            <div className="mb-5">
                <Typography className="mt-12 font-sans text-2xl laptop:text-4xl font-medium leading-10">
                    Revolutionize Your Helpdesk with Filebot: Harness the Power of a Chatbot on Your Own Content
                </Typography>
            </div>
            <div className="container mb-5">
                <div className="mt-10">Are you tired of sifting through endless PDF documents to find answers to customer inquiries? Look no further! Filebot is the innovative chatbot that can streamline your helpdesk processes by intelligently accessing information from your PDF files. This article will explore how Filebot, with its advanced language model similar to Chat GPT, can transform the way helpdesk agents work, making their jobs easier and more efficient.</div>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 ease-linear duration-300 mt-10">
                    <div className="col-span-1">
                        <div className="w-full">
                            <div className="text-2xl mb-5">Save Time and Improve Efficiency</div>
                            <div className="mb-5">Helpdesk agents often spend countless hours searching through PDF documents to find relevant information to address customer queries. Filebot simplifies this process by quickly generating accurate answers based on the user’s uploaded PDF files. By using a chatbot on your own content, you can significantly reduce response times and improve helpdesk efficiency.</div>
                            <div className="text-2xl mb-5">Unleash the Power of Advanced Language Models</div>
                            <div>Filebot’s language model, comparable to Chat GPT, understands user queries in a sophisticated manner. It can establish connections within the PDF files and generate the most relevant answers, unlocking valuable information in a user-friendly way. Helpdesk agents can now focus on providing exceptional customer service rather than being bogged down by manual document searches.</div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mx-auto">
                            <img className="w-full mx-auto rounded-3xl" src="/img/bg3.jpg" />
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <Typography className="mb-5 text-xl laptop:text-2xl font-medium text-inherit">Enhance the Customer Experience</Typography>
                    <div>Customers demand quick and accurate responses to their inquiries. With Filebot, helpdesk agents can provide precise answers in a timely manner, leading to increased customer satisfaction. By utilizing a chatbot on your own content, you can create a more personalized and efficient customer experience.</div>
                </div>
                <div className="mt-16">
                    <Typography className="mb-5 text-2xl font-medium text-inherit">Seamless Integration with Existing Systems</Typography>
                    <div>A smart chatbot can be easily integrated into your existing website and customer support systems. This ensures a smooth transition and allows your business to start reaping the benefits of a chatbot without any disruption to your current operations.</div>
                </div>
                <div className="mt-16">
                    <Typography className="mb-5 text-2xl font-medium text-inherit">Seamless Integration with Your Helpdesk Platform</Typography>
                    <div>Filebot is designed to be easily integrated into your existing helpdesk system, allowing your agents to access its powerful features without disrupting their workflow. This seamless integration ensures a smooth transition to a more effective and innovative helpdesk solution.</div>
                </div>
                <div className="mt-16">
                    <Typography className="mb-5 text-2xl font-medium text-inherit">Continuous Learning and Improvement</Typography>
                    <div>Filebot’s language model continually learns and evolves, ensuring that the chatbot’s performance improves over time. This means that as your helpdesk agents use Filebot, it will become even more adept at generating <strong>accurate answers from your PDF content.</strong></div>
                </div>
                <div className="my-16">
                    <Typography className="mb-5 text-xl laptop:text-2xl font-medium text-inherit">Conclusion</Typography>
                    <div className="font-bold">Filebot is a game-changer for helpdesk agents, allowing them to harness the power of a chatbot on their own content. By utilizing this cutting-edge technology, helpdesk teams can save time, improve efficiency, and enhance the customer experience. Don’t miss the opportunity to revolutionize your helpdesk with Filebot. Try it today and experience the difference for yourself!</div>
                </div>
                <button className="w-[300px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Check here for the Filebot options</button>
            </div>
            <div className="grid grid-cols-2 divide-x mb-5">
                <div className="col-span-1 text-left flex flex-row justify-start items-center cursor-pointer overflow-hidden" onClick={() => navigate("/blog/boost")}>
                    <div className="mr-1">
                        <img className="w-[30px]" src="/img/prev.png" />
                    </div>
                    <div className="flex flex-col" style={{ width: "calc(100% - 30px)" }}>
                        <span className="text-xs">PREVIOUS</span>
                        <span className="truncate w-auto text-red-500 hover:text-[#2C2C5E] text-xs">Boost Your Business with a Smart Chatbot: The Ultimate Guide to Enhancing Customer Experience</span>
                    </div>
                </div>
                <div className="col-span-1 text-right flex flex-row justify-end items-center cursor-pointer overflow-hidden" onClick={() => navigate("/blog/unlock")}>
                    <div className="flex flex-col"  style={{ width: "calc(100% - 30px)" }}>
                        <span className="text-xs">NEXT</span>
                        <span className="truncate w-auto text-red-500 hover:text-[#2C2C5E] text-xs">Unlocking the Power of PDFs Through Chatbot Integration: Benefits and Opportunities</span>
                    </div>
                    <div className="ml-1">
                        <img className="w-[30px]" src="/img/next.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Revolution;