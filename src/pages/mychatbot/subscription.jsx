import { Avatar, Typography, Button, Card } from "@material-tailwind/react";
import {
MapPinIcon,
BriefcaseIcon,
BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokens } from "@/utils/token";
import jwt_decode from 'jwt-decode';

export function Subscription() {
	const navigate = useNavigate();
	const [plan, setPlan] = useState("Free");
	const [messageNum, setMessageNum] = useState(1);
	const [user, setUser] = useState(() => {
		const info = jwt_decode(tokens.get());
		return ({
			...info
		})
	})
	const [chatbotNum, setChatbotNum] = useState(1);
	const [pdfNum, setPdfNum] = useState(1);
	const [startAt, setStartAt] = useState("2023-04-05");
	const [endAt, setEndAt] = useState("2023-05-05");
	
	return (
		<>
			<div className="container mx-auto px-5 items-center justify-center mt-5 tablet:mt-20 text-[#2C2C5E]">
				<div className="ml-2.5 mb-5 cursor-pointer w-10 h-10 tablet:w-12 tablet:h-12 flex justify-start" onClick={() => navigate(-1)}>
					<img className="" src="/img/back1.png" />
				</div>
				<Typography className="mb-5 font-sans text-2xl laptop:text-4xl font-medium leading-10">Subscription</Typography>
				<Card color="transparent" shadow={false} className="rounded-lg border-2 border-gray-400 w-full px-2 pb-3 overflow-y-auto h-[32rem] max-h-[32rem]">
					<div className="p-6 sm:p-8 grid grid-cols-1 tablet:grid-cols-2 gap-4 justify-between items-center">
						<div className="col-span-1">
							<div className="text-xl tablet:text-2xl items-center">Your current plan: {plan}</div>
						</div>
						<div className="col-span-1">
							<div className="leading-7">
								<p>{messageNum} / {user.msg} <strong>messages per month</strong></p>
								<p>{chatbotNum} / {user.chatbot} <strong>chatbots per month</strong></p>
								<p>{user.character} characters <strong>per chatbot</strong></p>
								<p>{pdfNum} / {user.pdf} PDF's <strong>per chatbot</strong></p>
								<p><strong>Period:</strong> {startAt} - {endAt}</p>
								<div className="flex justify-start mt-5">
									<button type="button" onClick={() => navigate("/pricing")} className="w-{120pxx} text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update current plan</button>
								</div>	
							</div>
						</div>
					</div>
					<div className="ml-5">If you would like to cancel or downgrade, please let us know us at: contact@filechat.io</div>
				</Card>
			</div>
		</>
	);
}

export default Subscription;
