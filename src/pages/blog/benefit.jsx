import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Benefit() {
	const navigate = useNavigate();

	return(
		<div className="container mx-auto p-2.5 text-[#2C2C5E]">
			<div className="mb-5">
				<Typography className="mt-12 font-sans text-2xl laptop:text-4xl font-medium leading-10">
					Filebot vs. Chat GPT: The Benefits of a Focused and On-Topic Chatbot Solution
				</Typography>
			</div>
			<div className="container mb-5">
				<div className="mt-10">In a world where chatbots and NLP techniques are increasingly popular for customer support and information retrieval, Filebot stands out as a unique and powerful solution. Unlike Chat GPT, Filebot focuses on extracting information from embedded PDFs, ensuring on-topic responses and polite handling of queries beyond its knowledge base. In this blog post, we will explore the benefits of Filebot in comparison to Chat GPT, highlighting its potential to revolutionize customer service and knowledge management.</div>
				<div className="mt-16">
					<Typography className="text-xl laptop:text-2xl font-medium text-inherit">Focused and On-Topic Chatbot Solution:</Typography>
				</div>
				<div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 ease-linear duration-300 mt-10">
					<div className="col-span-1 tablet:col-span-1 laptop:col-span-2">
						<div className="pl-10 w-full">
							<ol className="list-decimal w-full">
								<li>
									<strong>Staying On-Topic:</strong>
									<br />
									- Filebot’s exclusive focus on extracting information from embedded PDFs ensures that it remains on-topic and provides relevant answers to users’ questions.
									<br />
									- By contrast, Chat GPT can occasionally provide off-topic or unrelated responses, potentially leading to user frustration and confusion.
									<br />
									- The focused approach of Filebot guarantees a more accurate and satisfactory user experience
								</li>
								<li>
									<strong>Polite Handling of Unanswered Questions:</strong>
									<br />
									– If a query falls outside the scope of the provided PDFs, Filebot acknowledges the limitation and offers a polite response, encouraging users to seek further assistance.
									<br />
									–  Chat GPT, on the other hand, may attempt to generate an answer based on its broader knowledge base, which may not always be helpful or accurate
									<br />
									Filebot’s approach ensures that users are not misled by incorrect information and are guided towards appropriate resources
								</li>
							</ol>
						</div>
					</div>
					<div className="col-span-1">
						<div className="mx-auto items-center">
							<img className="w-full mx-auto rounded-3xl" src="/img/bg7.jpg" />
						</div>
					</div>
				</div>
					
				<div className="mt-16">
					<Typography variant="h4" className="mb-5 text-xl laptop:text-2xl font-medium text-inherit">On-Topic Chatbot Solution: Stay on topic even more focused!</Typography>
					<ol className="list-decimal ml-10">
						<li>
							<strong>Streamlined Knowledge Management:</strong>
							<br />
							Filebot allows businesses to efficiently manage and maintain their knowledge base by focusing on a curated set of PDFs
							<br />
							Companies can easily update and modify their PDF content, ensuring that Filebot provides the most up-to-date and accurate information
							<br />
							In contrast, Chat GPT relies on a more extensive knowledge base, which may not always reflect a business’s current practices, products, or services
						</li>
						<li>
							<strong>Enhanced Data Security and Privacy:</strong>
							<br />
							By working exclusively with embedded PDFs, Filebot ensures that sensitive company information remains within the organization’s control
							<br />
							Unlike Chat GPT, Filebot does not access external data sources, reducing the risk of unauthorized data access or sharing
							<br />
							This feature makes Filebot a more secure and privacy-focused option for businesses handling sensitive information
						</li>
						<li>
							<strong>Customization and Branding:</strong>
							<br />
							Filebot offers the flexibility to tailor its responses and language based on the content within the provided PDFs
							<br />
							Businesses can ensure that Filebot’s responses align with their brand voice and messaging, creating a consistent user experience
							<br />
							Chat GPT, while highly adaptable, may not always reflect a company’s specific tone or style accurately
						</li>
					</ol>
				</div>
				<div className="my-16">
					<Typography className="mb-5 text-xl laptop:text-2xl font-medium text-inherit">Conclusion</Typography>
					<div className="font-bold">Filebot’s unique approach to information extraction and customer service offers numerous advantages over Chat GPT. By focusing on embedded PDFs, Filebot ensures on-topic responses, polite handling of unanswered queries, streamlined knowledge management, enhanced data security, and customization opportunities. These benefits make Filebot an appealing and powerful chatbot solution for businesses looking to improve their customer support and knowledge management systems while maintaining control over their content and brand.</div>
				</div>
				<button className="w-[300px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Check here for the Filebot options</button>
			</div>
			<div className="grid grid-cols-2 divide-x mb-5">
				<div className="col-span-1 text-left flex flex-row justify-start items-center cursor-pointer overflow-hidden" onClick={() => navigate("/blog/monetize")}>
					<div className="mr-1">
						<img className="w-[30px]" src="/img/prev.png" />
					</div>
					<div className="flex flex-col" style={{ width: "calc(100% - 30px)" }}>
						<span className="text-xs font-normal">PREVIOUS</span>
						<span className="truncate w-auto text-red-500 hover:text-[#2C2C5E] text-xs">Monetizing Filebot: Unlocking New Revenue Streams and Business Opportunities</span>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}

export default Benefit;