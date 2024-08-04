import {
  Card,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import TokenDecode from "@/utils/token_decode";
import { useNavigate } from "react-router-dom";
import isEmpty from "is-empty";
import { createSubscription } from "@/redux/actions/pricingAction";

export function PricingCard ({stripeId, name, description, payType, price, currencyType, chatbotNum, msgNum, pdfNum, characterNum}) {
	const tokenInfo = TokenDecode();
	const navigate = useNavigate();

	const onSubscription = (stripeId) => {
	  createSubscription({stripeId: stripeId})
      .then((res) => {
		    if (res.status ===200) {
			    window.location = res.data.url
		    } else {
           		console.log('Faild pricing');
		    }
      })
      .catch((err)=>{
        console.log(err)
      });
	}

  return (
    <Card shadow={false} className="text-left text-[#2c2c5e] flex rounded-none flex-row bg-[#f9fafa]">
			<div className="w-full flex flex-col justify-center bg-violet-200">
				<div className="flex flex-col justify-center items-center bg-[#2c2c5e] h-24 p-5">
						<Typography variant="h4" color="white" className="uppercase">
							{name}
						</Typography>
						<Typography variant="h6" color="white" className="font-thin">
							{description}
						</Typography>
				</div>
				<div className="my-8 flex flex-col justify-center items-center">
						<div className="flex justify-center">
							<Typography variant="h6">{currencyType}</Typography>
							<Typography variant="h1" className="-mt-2.5 ml-1">{price}</Typography>
						</div>
						<Typography variant="h6" className="text-center uppercase">{payType}</Typography>
				</div>
				<div className="w-4/5 mx-auto">
						<div className="border-b-2 py-3 flex justify-center">
							<img 
								src="/img/check-circle.svg"
								className="w-5 h-5 mx-4"
							/>
							{chatbotNum} Chatbot
						</div>
						<div className="border-b-2 py-3 flex justify-center">
							<img 
								src="/img/check-circle.svg"
								className="w-5 h-5 mx-4"
							/>
							Install chatbot on website
						</div>
						<div className="border-b-2 py-3 flex justify-center">
							<img 
								src="/img/check-circle.svg"
								className="w-5 h-5 mx-4"
							/>
							{msgNum} messages per day
						</div>
						<div className="border-b-2 py-3 flex justify-center">
							<img 
								src="/img/check-circle.svg"
								className="w-5 h-5 mx-4"
							/>
							{pdfNum} PDF
						</div>
						<div className="py-3 flex justify-center">
							<img 
								src="/img/check-circle.svg"
								className="w-5 h-5 mx-4"
							/>
							{characterNum} characters per bot
						</div>
					</div>
					<Button 
						disabled={!isEmpty(tokenInfo) && tokenInfo.chatbot === chatbotNum && tokenInfo.character === characterNum} 
						variant="filled" 
						size="lg" 
						className="my-5 mx-auto shadow-none hover:shadow-none rounded text-base bg-[#2c2c5e] normal-case max-w-max px-8 py-3" 
						onClick={() => {
							if (!isEmpty(tokenInfo)) {
								onSubscription(stripeId);
							} else {
								navigate("/signIn");
							}
						}}
					>
						Get yours!
					</Button>
			</div>
    </Card>
  );
}

PricingCard.displayName = "PricingCard";

export default PricingCard;
