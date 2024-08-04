import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Boost() {
    const navigate = useNavigate();

    return(        
        <div className="container mx-auto p-2.5 text-[#2C2C5E]">
            <div className="mb-5">
                <Typography className="mt-12 font-sans text-2xl laptop:text-4xl font-medium leading-10">
                    Boost Your Business with a Smart Chatbot: The Ultimate Guide to Enhancing Customer Experience
                </Typography>
            </div>
            <div className="container mb-5">
                <div className="mt-10">In today’s competitive market, providing exceptional customer service is a top priority for businesses. A smart chatbot can be the key to unlocking seamless and personalized interactions with your customers. In this article, we’ll explore the benefits of integrating a smart chatbot into your website and how it can revolutionize the way you engage with your audience</div>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 ease-linear duration-300 mt-10">
                    <div className="col-span-1">
                        <div className="w-full">
                            <div className="mb-5 text-2xl font-medium text-inherit">Smart Chatbots Save Time and Resources</div>
                            <div className="mb-5">By automating routine tasks and providing instant answers to common questions, smart chatbots free up your customer support team’s time. This allows them to focus on more complex issues and provide personalized assistance to customers, ultimately improving efficiency and reducing costs.</div>
                            <div className="mb-5 text-2xl font-medium text-inherit">Enhance Customer Experience with Personalization</div>
                            <div>Smart chatbots can analyze user behavior and preferences, tailoring their responses to provide a more personalized experience. This level of personalization fosters better customer engagement, satisfaction, and loyalty, setting your business apart from competitors.</div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mx-auto">
                            <img className="w-full mx-auto rounded-3xl" src="/img/bg2.jpg" />
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <Typography className="mb-5 text-2xl font-medium text-inherit">24/7 Availability and Multilingual Support</Typography>
                    <div>Unlike human support agents, smart chatbots are available 24/7, providing instant assistance to customers around the clock. They can also support multiple languages, ensuring that your business caters to a global audience without any language barriers.</div>
                </div>
                <div className="mt-16">
                    <Typography className="mb-5 text-2xl font-medium text-inherit">Seamless Integration with Existing Systems</Typography>
                    <div>A smart chatbot can be easily integrated into your existing website and customer support systems. This ensures a smooth transition and allows your business to start reaping the benefits of a chatbot without any disruption to your current operations.</div>
                </div>
                <div className="mt-16">
                    <Typography className="mb-5 text-2xl font-medium text-inherit">Improve Lead Generation and Conversion Rates</Typography>
                    <div>Smart chatbots can actively engage with visitors on your website, capturing leads and guiding them through the sales funnel. By providing immediate assistance and nurturing potential customers, chatbots can significantly improve lead generation and conversion rates. <strong>Use links into you your PDF’s to lead to relevant pages within your site!</strong></div>
                </div>
                <div className="mt-16">
                    <Typography className="mb-5 text-2xl font-medium text-inherit">Efficient and Accurate Information Retrieval</Typography>
                    <div>Filebot’s advanced language model, similar to Chat GPT, understands user queries in a sophisticated manner. It establishes connections within the PDF files and generates the most relevant answers, ensuring that your customers receive precise and helpful information. This efficient approach to information retrieval saves time and resources, allowing your support team to focus on more complex issues.</div>
                </div>
                <div className="mt-16">
                    <Typography className="mb-5 text-xl laptop:text-2xl font-medium text-inherit">Streamline Internal Processes</Typography>
                    <div>Filebot’s PDF-based smart chatbot can also be a valuable tool for your internal teams. By providing instant access to information within PDF documents, it streamlines workflows and facilitates efficient collaboration. Employees can quickly find answers to their questions, increasing productivity and reducing the time spent on manual document searches.</div>
                </div>
                <div className="my-16">
                    <Typography className="mb-5 text-xl laptop:text-2xl font-medium text-inherit">Conclusion</Typography>
                    <div className="font-bold">Filebot’s unique approach to leveraging PDF files as a source of information for its smart chatbot makes it a game-changing solution for businesses aiming to enhance customer support and streamline processes. By implementing Filebot, you can unlock the full potential of your company or organization, improve customer experience, and increase efficiency across your organization. Don’t miss the opportunity to revolutionize your customer support with Filebot – embrace the future of chatbot technology today!</div>
                </div>
                <button className="w-[300px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Check here for the Filebot options</button>
            </div>
            <div className="grid grid-cols-2 divide-x mb-5">
                <div className="col-span-1 text-left flex flex-row justify-start items-center cursor-pointer overflow-hidden" onClick={() => navigate("/blog/future")}>
                    <div className="mr-1">
                        <img className="w-[30px]" src="/img/prev.png" />
                    </div>
                    <div className="flex flex-col" style={{ width: "calc(100% - 30px)" }}>
                        <span className="text-xs">PREVIOUS</span>
                        <span className="truncate w-auto text-red-500 hover:text-[#2C2C5E] text-xs">The Future of On-Topic Information: Embracing GPT Chatbots like Filebot for Website Content Delivery</span>
                    </div>
                </div>
                <div className="col-span-1 text-right flex flex-row justify-end items-center cursor-pointer overflow-hidden" onClick={() => navigate("/blog/revolution")}>
                    <div className="flex flex-col"  style={{ width: "calc(100% - 30px)" }}>
                        <span className="text-xs">NEXT</span>
                        <span className="truncate w-auto text-red-500 hover:text-[#2C2C5E] text-xs">Revolutionize Your Helpdesk with Filebot: Harness the Power of a Chatbot on Your Own Content</span>
                    </div>
                    <div className="ml-1">
                        <img className="w-[30px]" src="/img/next.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boost;