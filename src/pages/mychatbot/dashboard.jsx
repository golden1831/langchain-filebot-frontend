import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { ChatbotCard } from "@/pages/components/cards";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSetting, getSetting } from "@/redux/actions/settingAction";
import { logoutUser } from "@/redux/actions/authAction";
import jwt_decode from 'jwt-decode';
import { tokens } from "@/utils/token";
import isEmpty from "is-empty";

export function Dashboard() {
	const [curBotNum, setCurBotNum] = useState([]);
	const [flag, setFlag] = useState(false);

	const auth = useSelector((state) => state.auth);
	const chatbot = useSelector((state) => state.setting)
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [user, setUser] = useState(() => {
		const info = jwt_decode(tokens.get());
		return ({
			...info
		})
	})

	useEffect(() => {
		if (!tokens.get()) {
			navigate("/signIn");
		}
		if (tokens.get()) {
			console.log("dashboard");
			const decodedToken = jwt_decode(tokens.get());
			console.log(decodedToken)
			if (decodedToken?.exp * 1000 < new Date().getTime()) {
				console.log('Token is expired!');
				dispatch(logoutUser());
				navigate("/signIn")
			}
		}
	}, []);


	useEffect(() => {
		const decode = jwt_decode(tokens.get())
		if (!isEmpty(decode)) {
			dispatch(getSetting({userId: decode.id}))
				.then(data => { setCurBotNum(data); console.log(data); })
				.catch(e => console.log(e));
		}
	}, [flag, dispatch]);

	const insertBot = () => {
		if (curBotNum.length >= user.chatbot) {
			console.log("You can't create anymore.");
		} else {
			setFlag(!flag);
			dispatch(addSetting({userId: user.id}));  
		}
	};

	const logout = () => {
		dispatch(logoutUser());
		setCurBotNum([]);
		navigate("/home");
	};

	return (
		<>
			<section className="container mx-auto p-2.5">
				<div className="container mx-auto">
					<div className="flex justify-end my-2.5 text-[#2c2c5e]">
						<p className="flex justify-end text-xl font-bold cursor-pointer hover:underline" onClick={() => navigate("/dashboard/profile")}>Profile</p>
						<p className="mx-2 text-xl font-bold">/</p>
						<p className="flex justify-end text-xl font-bold cursor-pointer hover:underline" onClick={() => navigate("/dashboard/subscription")}>Subscription</p>
						<p className="mx-2 text-xl font-bold">/</p>
						<div className="flex justify-center gap-2 cursor-pointer">	
							<p className="flex justify-end text-xl font-bold cursor-pointer hover:underline" onClick={() => logout()}>Log out</p>
							<img className="w-8 h-8" src="/img/logout1.png" onClick={() => logout()} />
						</div>
					</div>
					<div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl text-[#2c2c5e]">
						<div className="">
							<div className="my-8 text-center">
								<Typography variant="h2" className="mb-2">
									Dashboard
								</Typography>
							</div>
							<Button 
								variant="filled" 
								size="lg"
								onClick={() => insertBot()}
								className="mt-4 mx-auto flex flex-row items-center shadow-none hover:shadow-none bg-[#2c2c5e] hover:bg-[#5050a9] text-base normal-case max-w-max px-5 py-2"
							>	
								<Typography variant="h3" className="mr-3">+</Typography>
								<Typography variant="h6" className="pt-1">New Chatbot</Typography>
							</Button>
							<div key={`dashboard-${user.id}`} className="mt-20 grid grid-cols-1 gap-12 gap-x-24 ">
								{
									curBotNum && curBotNum.map((item, idx) => {
										return (
											<ChatbotCard key={item._id} is_public={item.is_public} chatbot_id={item._id} widget_color={item.widgetColor} files={item.files} chatbot_name={item.botName} histories={item.histories.chat_log} userId={item.userId} flag={flag} setFlag={setFlag} />
										);
									})
								}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Dashboard;
