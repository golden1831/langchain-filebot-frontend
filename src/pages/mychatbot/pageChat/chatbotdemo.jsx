import { ArrowPathIcon } from "@heroicons/react/24/solid";
import {
	Card,
	Input,
	Typography,
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import setAuthToken from "@/utils/setAuthToken";
import BouncingDotsLoader from "@/pages/components/BouncingDotsLoader";
import TypeWriter from "@/pages/components/TypeWriter";
import QaBox from "./chat.style";
import { tokens } from "@/utils/token";
import isEmpty from "is-empty";
import {sendMessage, ChatActive} from "@/redux/actions/chatAction";

let is_loading = false;

export function ChatbotDemo() {
	const [question, setQuestion] = useState("");
	const [messages, setMessages] = useState([{ key: 0, isBot: true, data: "Hello! What can I do for you today?" }]);
	const navigate = useNavigate();
	const { botId } = useParams();

	const req_qa_box = useRef(null)

	const handleQuestionUpdated = (event) => {
		if (event.key === "Enter") {
			sendQuestion();
		}
	}
	
	useEffect(() => {
		if (isEmpty(messages)) {
      ChatActive({botId: botId})
				.then((data) => console.log(data))
				.catch((err) => console.log(err))
		}
	}, [messages])

	const handleQuestionChange = (event) => {
		setQuestion(event.target.value);
	};

	const sendQuestion = (event) => {
		if (question === "" || is_loading) return;

		is_loading = true;
		setMessages((messages) => [
			...messages,
			{ key: messages.length, isBot: false, data: question },
			{ key: messages.length + 1, isBot: true, data: "..." },
		]);
	};

	const PageReload = () => {
		setMessages([{ key: 0, isBot: true, data: "Hello! What can I do for you today?" }]);
		console.log("Reload!!!")
	};

	useEffect(() => {
		if (question === "") return;

		req_qa_box.current.scrollTop = req_qa_box.current.scrollHeight;

		setQuestion("");
		setAuthToken(tokens.get());
		sendMessage({ message: question, chatbot_id: botId })
			.then((response) => {
				console.log(response);
				let current_messages = messages;
				current_messages.pop();
				setMessages((messages) => [
          ...current_messages,
          { key: current_messages.length, isBot: true, data: response.data.text },
				]);
				is_loading = false;
			})
			.catch((error) => {
				return error;
			});
	}, [messages.length]);

	return (
		<div className="container justify-center mx-auto p-2.5 mt-5 tablet:mt-20">
			<div className="ml-2.5 mb-5 cursor-pointer w-10 h-10 tablet:w-12 tablet:h-12 flex justify-start" onClick={() => navigate(-1)}>
                <img className="" src="/img/back1.png" />
            </div>
			<Card color="transparent" shadow={false} className="rounded-lg border-2 border-gray-400 w-full px-2 pb-3 overflow-y-auto h-[32rem] max-h-[32rem]">
				<div className="border-b-2 border-gray-400 flex justify-end py-1">
					<Typography
						as="li"
						variant="small"
						className="capitalize flex align-center"
					>
					<ArrowPathIcon className="w-[25x] h-[25px] opacity-75 m-1 hover:cursor-pointer" onClick={PageReload} />
					</Typography>
				</div>
					<QaBox className="p-2" ref={req_qa_box} style={{ display: 'flex', flexDirection: 'column' }}>
					{
						messages && messages.map((item, idx) =>{
							if (!item.isBot) { 
								return (
									<div className="flex justify-end mt-5 max-w-3/4" key={idx}>
										<Typography id="wordPos" className="rounded-lg px-2 py-2 bg-blue-100 max-w-3/4 text-left whitespace-normal" style={{maxWidth: "75%"}}>{item.data}</Typography>
									</div>
							)} else if ( item.data === "..." ) {
								return (
									<div className="flex justify-start mt-5" key={idx}>
										<BouncingDotsLoader />
									</div>
							)} else {
								return (
									<div className="flex justify-start mt-5 max-w-3/4" key={idx}>
										<div className="r-0 rounded-lg px-2 py-2 bg-blue-100 text-left max-w-3/4 whitespace-normal" style={{maxWidth: "75%"}}>
											<TypeWriter 
												content={item.data}
												box_ref={req_qa_box}
												speed={10} 
											/>
										</div>
									</div>
								)
							}
						})
					}
					</QaBox>
			</Card>
			<div className="w-full mt-2">
				<Input label="Input..." icon={<i className="fa fa-paper-plane" />} value={question}
					onChange={handleQuestionChange}
					onKeyDown={handleQuestionUpdated} />
			</div>
		</div>
	);
}

ChatbotDemo.displayName = "ChatbotDemo";

export default ChatbotDemo;
