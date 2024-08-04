import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Blog() {
    const navigate = useNavigate();

    return (
        <div className="container px-3 w-auto mx-auto text-[#2C2C5E]">
            <section className="min-w-[114px] w-auto mx-auto">
                <Typography variant="h2" className="mb-10 mt-5">
                    The Filebot Blog
                </Typography>
                <div className="mb-10">
                    Welcome to the FileBot blog, where we discuss the amazing bebefits of using a GPT chatbot that taps into PDF files as a source of knowledge. Our articles provide valuable insights and clever strategies to use your own chatbot to power up your business!
                </div>
            </section>
            <section className="container  mb-10 mt-3">
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 ease-linear duration-300">
                    <div className="col-span-1">
                        <div className="flex flex-col justify-between min-w-[114px] md:max-w-[730px] w-auto mx-auto">
                            <div className="overflow-hidden panelHeight">
                                <img className="w-full h-auto mx-auto cursor-pointer" src="/img/blog7.jpg" onClick={() => navigate("/blog/benefit")} />
                            </div>
                            <a className="text-lg mb-4 leading-tight mt-2 cursor-pointer" onClick={() => navigate("/blog/benefit")} >Filebot vs. Chat GPT: The Benefits of a Focused and On-Topic Chatbot Solution</a>
                            <a className="text-xs cursor-pointer" onClick={() => navigate("/blog/benefit")} >Read More »</a>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col justify-between min-w-[114px] md:max-w-[730px] w-auto mx-auto">
                            <div className="overflow-hidden panelHeight">
                                <img className="w-full h-auto mx-auto cursor-pointer" src="/img/blog6.jpg" onClick={() => navigate("/blog/monetize")} />
                            </div>
                            <a className="text-lg mb-4 leading-tight mt-2 cursor-pointer" onClick={() => navigate("/blog/monetize")} >Monetizing Filebot: Unlocking New Revenue Streams and Business Opportunities</a>
                            <a className="text-xs cursor-pointer" onClick={() => navigate("/blog/monetize")} >Read More »</a>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col justify-between min-w-[114px] md:max-w-[730px] mx-auto">
                            <div className="overflow-hidden panelHeight">
                                <img className="w-full h-auto mx-auto cursor-pointer" src="/img/blog5.jpg" onClick={() => navigate("/blog/optimize")} />
                            </div>
                            <a className="text-lg mb-4 leading-tight mt-2 cursor-pointer" onClick={() => navigate("/blog/optimize")}>Optimizing PDF Content Structure for Filebot and NLP Integration</a>
                            <a className="text-xs cursor-pointer" onClick={() => navigate("/blog/optimize")}>Read More »</a>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col justify-between min-w-[114px] md:max-w-[730px] mx-auto">
                            <div className="overflow-hidden panelHeight">
                                <img className="w-full h-auto mx-auto cursor-pointer" src="/img/blog4.jpg" onClick={() => navigate("/blog/unlock")} />
                            </div>                                
                            <a className="text-lg mb-4 leading-tight mt-2 cursor-pointer" onClick={() => navigate("/blog/unlock")}>Unlocking the Power of PDFs Through Chatbot Integration: Benefits and Opportunities</a>
                            <a className="text-xs cursor-pointer" onClick={() => navigate("/blog/unlock")}>Read More »</a>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col justify-between min-w-[114px] md:max-w-[730px] mx-auto">
                            <div className="overflow-hidden panelHeight">
                                <img className="w-full h-auto mx-auto cursor-pointer" src="/img/blog3.jpg" onClick={() => navigate("/blog/revolution")} />
                            </div>
                            <a className="text-lg mb-4 leading-tight mt-2 cursor-pointer" onClick={() => navigate("/blog/revolution")}>Revolutionize Your Helpdesk with Filebot: Harness the Power of a Chatbot on Your Own Content</a>
                            <a className="text-xs cursor-pointer" onClick={() => navigate("/blog/revolution")}>Read More »</a>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col justify-between min-w-[114px] md:max-w-[730px] mx-auto">
                            <div className="overflow-hidden panelHeight">
                                <img className="w-full min-h-[76px] md:max-h-[490px] h-auto mx-auto cursor-pointer" src="/img/blog2.jpg" onClick={() => navigate("/blog/boost")} />
                            </div>
                            <a className="text-lg mb-4 leading-tight mt-2 cursor-pointer" onClick={() => navigate("/blog/boost")}>Boost Your Business with a Smart Chatbot: The Ultimate Guide to Enhancing Customer Experience</a>
                            <a className="text-xs cursor-pointer" onClick={() => navigate("/blog/boost")}>Read More »</a>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col justify-between min-w-[114px] md:max-w-[730px] mx-auto">
                            <div className="overflow-hidden panelHeight">
                                <img className="w-full min-h-[76px] md:max-h-[490px] h-auto mx-auto cursor-pointer" src="/img/blog1.jpg" onClick={() => navigate("/blog/future")} />
                            </div>
                            <a className="text-lg mb-4 leading-tight mt-2 cursor-pointer" onClick={() => navigate("/blog/future")}>The Future of On-Topic Information: Embracing GPT Chatbots like Filebot for Website Content Delivery</a>
                            <a className="text-xs cursor-pointer" onClick={() => navigate("/blog/future")}>Read More »</a>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </section>
        </div>
    );
}

export default Blog;