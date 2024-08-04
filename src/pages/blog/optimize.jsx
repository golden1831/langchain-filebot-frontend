import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Optimize() {
    const navigate = useNavigate();

    return(
        <div className="container mx-auto p-2.5 text-[#2C2C5E]">
            <div className="mb-5">
                <Typography className="mt-12 font-sans text-2xl laptop:text-4xl font-medium leading-10">
                    Optimizing PDF Content Structure for Filebot and NLP Integration
                </Typography>
            </div>
            <div className="container mb-5">
                <div className="mt-10">To ensure the best possible outcome when using Filebot or another NLP-driven chatbot to index and retrieve information from a PDF file, it’s essential to structure the content in a clear and organized manner. In this guide, we’ll provide you with detailed instructions on how to structure your PDF content to optimize it for Filebot and NLP integration. To start with: Always take care of enough content in your  PDF’s so there is enough to index!</div>
                <div className="mt-16">
                    <Typography className="text-xl laptop:text-2xl font-medium text-inherit">9 tips to structure your PDFs for an Optimal working Chatbot:</Typography>
                </div>
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 ease-linear duration-300 mt-10">
                    <div className="col-span-1 tablet:col-span-1 laptop:col-span-2">
                        <div className="pl-10 w-full">
                            <ol className="list-decimal w-full">
                                <li>
                                    <strong>Organize content with clear headings and subheadings:</strong>
                                    <br />
                                    – Use descriptive headings and subheadings to break up the content into sections
                                    <br />
                                    – Ensure that headings accurately represent the content within each section
                                    <br />
                                    - Utilize a consistent format and hierarchy for headings and subheadings
                                </li>
                                <li>
                                    <strong>Implement a logical and linear structure:</strong>
                                    <br />
                                    – Present information in a logical sequence, with related topics grouped together
                                    <br />
                                    – Maintain a consistent flow of ideas, making it easier for the NLP model to understand the content
                                </li>
                                <li>
                                    <strong>Use concise and clear language:</strong>
                                    <br />
                                    – Write in simple, straightforward sentences to facilitate NLP understanding
                                    <br />
                                    – Avoid jargon, complex language, or overly technical terms that might confuse the chatbot
                                </li>
                                <li>
                                    <strong>Utilize bullet points and numbered lists:</strong>
                                    <br />
                                    – Break down complex ideas or processes into easily digestible bullet points or numbered lists This format makes it easier for the chatbot to extract key information from the text
                                </li>
                                <li>
                                    <strong>Include a table of contents and page numbers:</strong>
                                    <br />
                                    – Provide a table of contents to help the chatbot navigate the document structure
                                </li>
                                <li>
                                    <strong>Use text-based PDFs rather than image-based PDFs:</strong>
                                    <br />
                                    – Ensure that your PDF is created using text-based content rather than images of text
                                    <br />
                                    – Text-based PDFs are more accessible to NLP algorithms and allow for more accurate information extraction
                                </li>
                                <li>
                                    <strong>Implement proper tagging for accessibility:</strong>
                                    <br />
                                    – Use appropriate tags for headings, paragraphs, lists, tables, and other elements to improve the chatbot’s understanding of the document structure
                                    <br />
                                    – Proper tagging enhances the chatbot’s ability to navigate and access content within the PDF
                                </li>
                                <li>
                                    <strong>Test the chatbot’s understanding of the content:</strong>
                                    <br />
                                    – After structuring your PDF content, test the chatbot’s ability to understand and retrieve information from the document
                                    <br />
                                    – Identify any areas where the chatbot struggles and adjust the content structure accordingly
                                </li>
                                <li>
                                    <strong>Use URL-links</strong>
                                    <br/>
                                    Use URLs to relevant pages where costumers ans users can find more information about the topic. Make in this way the Filebot more interactive.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mx-auto">
                            <img className="w-full mx-auto rounded-3xl" src="/img/bg5.jpg" />
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <Typography className="mb-5 text-xl laptop:text-2xl font-medium text-inherit">Conclusion</Typography>
                    <div className="font-bold">By following these guidelines for structuring your PDF content, you can optimize the document for Filebot and other NLP-driven chatbots. This ensures that the chatbot can efficiently and accurately index, retrieve, and provide answers based on the information contained within the PDF, resulting in improved user experience and more effective knowledge management.</div>
                </div>
                <button className="w-[300px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Check here for the Filebot options</button>
            </div>
            <div className="grid grid-cols-2 divide-x mb-5">
                <div className="col-span-1 text-left flex flex-row justify-start items-center cursor-pointer overflow-hidden" onClick={() => navigate("/blog/unlock")}>
					<div className="mr-1">
						<img className="w-[30px]" src="/img/prev.png" />
					</div>
					<div className="flex flex-col" style={{ width: "calc(100% - 30px)" }}>
						<span className="text-xs">PREVIOUS</span>
						<span className="truncate w-auto text-red-500 hover:text-[#2C2C5E] text-xs">Unlocking the Power of PDFs Through Chatbot Integration: Benefits and Opportunities</span>
					</div>
				</div>
				<div className="col-span-1 text-right flex flex-row justify-end items-center cursor-pointer overflow-hidden" onClick={() => navigate("/blog/monetize")}>
					<div className="flex flex-col"  style={{ width: "calc(100% - 30px)" }}>
						<span className="text-xs">NEXT</span>
						<span className="truncate w-auto text-red-500 hover:text-[#2C2C5E] text-xs">Monetizing Filebot: Unlocking New Revenue Streams and Business Opportunities</span>
					</div>
					<div className="ml-1">
						<img className="w-[30px]" src="/img/next.png" />
					</div>
				</div>
            </div>
        </div>
    );
}

export default Optimize;