import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import BouncingDotsLoader from "../components/BouncingDotsLoader";
import TypeWriter from "../components/TypeWriter";
import QaBox from "./chat.style";
import { useDispatch, useSelector } from "react-redux";
import { findSetting, updateSetting } from "@/redux/actions/settingAction";
import { 
	Input
} from "@material-tailwind/react";
import { sendMessage } from "@/redux/actions/chatAction";

let is_loading = false;

export const Chat = () => {
	const [question, setQuestion] = useState("");
	const [messages, setMessages] = useState([{ key: 0, isBot: true, data: "Hello! What can I do for you today?" }]);
	const { embedID } = useParams();
	const dispatch = useDispatch();
	const [initData, setInitData] = useState({});

	const req_qa_box = useRef(null)

	const handleQuestionUpdated = (event) => {
		if (event.key === "Enter") {
			sendQuestion();
		}
	}
	
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

	useEffect(() => {
        if (embedID) {
            dispatch(findSetting({id: embedID}))
            .then(res => {
                if(res.status === 200) {
                    console.log(res.data);
                    setInitData(res.data);
                }
            })
            .catch(err => console.log(err));
            // let data = chatbot.settings.filter(item => item._id === setId)[0];       
        }
    }, []);

	useEffect(() => {
		if (question === "") return;

		req_qa_box.current.scrollTop = req_qa_box.current.scrollHeight;
		setQuestion("");

		sendMessage({ message: question, chatbot_id: embedID })
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
		<>
			<div className="justify-center w-full h-full">
				<div className="w-full h-[4rem] p-2.5" style={{backgroundColor: initData.headBackColor}}>
					<div className="flex flex-col h-auto text-[#ffffff]">
						<div>{initData.headTitle}</div>
						<div>{initData.subHeadTitle}</div>
					</div>
				</div>
				<div className="p-2.5 overflow-y-auto h-[calc(100vh-7rem)]">
					<QaBox className="pt-4" ref={req_qa_box} style={{ display: 'flex', flexDirection: 'column' }}>
					{
						messages && messages.map((item, idx) =>{
							if (!item.isBot) { 
								return (
									<div className="flex justify-end mt-5 max-w-3/4" key={idx}>
										<div id="wordPos" className="rounded-lg px-2 py-2 max-w-3/4 text-left whitespace-normal" style={{maxWidth: "75%", backgroundColor: initData.userMsgBackColor, color: initData.botMsgColor }}>{item.data}</div>
									</div>
							)} else if ( item.data === "..." ) {
								return (
									<div className="flex justify-start mt-5" key={idx}>
										<BouncingDotsLoader />
									</div>
							)} else {
								return (
									<div className="flex justify-start mt-5 max-w-3/4" key={idx}>
										<div className="r-0 rounded-lg px-2 py-2 text-left max-w-3/4 whitespace-normal" style={{maxWidth: "75%", backgroundColor: initData.botMsgBackColor, color: initData.botMsgColor}}>
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
				</div>
				<div className="w-full h-[3rem]">
					<Input 
						label="Input..." 
						icon={<i className="fa fa-paper-plane" />} 
						value={question} 
						onChange={handleQuestionChange} 
						onKeyDown={handleQuestionUpdated}></Input>
				</div>
			</div>
		</>
	);
};

export default Chat;