import { Avatar, Typography, Button, Card } from "@material-tailwind/react";
import {
MapPinIcon,
BriefcaseIcon,
BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { updateUser, getCurrentUser } from "@/redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Profile() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [updateState, setUpdateState] = useState(false);

	useLayoutEffect(() => {
		dispatch(getCurrentUser())
			.then(res => {
				if (res.status === 200) {
					document.getElementById('name').value = res.data.name; 
					document.getElementById('email').value = res.data.email;
					document.getElementById('password').value = ""; 
					document.getElementById('confirm-password').value = ""; 
					if (res.data.isGmail) {
						setUpdateState(true);
					}
				}
			})
			.catch(err => console.log(err));
		// if (localStorage.getItem("isGmail") === 1) {
		// 	setUpdateState(false);
		// }
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(document.getElementById("form"));
		const userData = {
			name: data.get("name"),
			email: data.get("email"),
			password: data.get("password"),
			password2: data.get("confirm-password"),
			// isGmail: 0
		};
		if (!updateState) {
			dispatch(updateUser(userData))
				.then(res => {
					if (res.status === 200) {
						console.log("update");
					}
				})
				.catch(err => console.log(err));
		}
	};

	return (
		<>
			<div className="container mx-auto px-2.5 items-center justify-center mt-4 tablet:mt-20 text-[#2C2C5E]">
				<div className="ml-2.5 mb-5 cursor-pointer w-10 h-10 tablet:w-12 tablet:h-12 flex justify-start" onClick={() => navigate(-1)}>
					<img className="" src="/img/back1.png" />
				</div>
				<Typography className="mb-5 font-sans text-2xl laptop:text-4xl font-medium leading-10">Profile</Typography>
				<Card color="transparent" shadow={false} className="rounded-lg border-2 border-gray-400 w-full px-2 pb-3 overflow-y-auto h-[32rem] max-h-[32rem]">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<form className="space-y-4 md:space-y-6" id="form" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
								<input type="text" disabled={updateState} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
							</div>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
								<input type="email" disabled={updateState} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
								<input type="password" disabled={updateState} name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
							</div>
							<div>
								<label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
								<input type="password" disabled={updateState} name="confirm-password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
							</div>
							<div className="flex justify-end">
								<button type="submit"  className="justify-end w-28 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
							</div>	
						</form>
					</div>
				</Card>
			</div>
		</>
	);
}

export default Profile;
