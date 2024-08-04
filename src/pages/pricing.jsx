import { PricingCard } from "@/pages/components/cards";
import { Typography, Button } from "@material-tailwind/react";
import { pricing_data } from "@/data";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { tokens } from "@/utils/token";
import { useNavigate } from "react-router-dom";
import { getPricing } from "@/redux/actions/pricingAction";

export function Pricing() {
  const [pricingData, setPricingData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPricing()
      .then((res) => {
        setPricingData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <section className="container mx-auto p-2.5 text-[#2C2C5E]">
        <div className="mb-5">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full flex justify-center">
              <Typography
                className="my-12 font-sans text-2xl laptop:text-4xl font-medium leading-10"
              >
                What plan fits your needs?
              </Typography>
            </div>
            <div className="w-full grid grid-cols-1 tablet:grid-cols-3 gap-8">
                {
                  pricingData && pricingData.map((item, idx) => {
                    return (
                      <div className="col-span-1 pt-3" key={idx}>
                        <div className="flex flex-col justify-between min-w-[114px] w-auto mx-auto max-w-[750px] max-h-[620px]">
                          <PricingCard
                            // buttonFlag={!!!tokens.get()}
                            stripeId={item.stripe_id}
                            name={item.name}
                            description={item.description}
                            payType={item.pay_type}
                            price={item.price}
                            currencyType={item.currency_type}
                            chatbotNum={item.chatbot_count}
                            msgNum={item.message_count}
                            pdfNum={item.pdf_count}
                            characterNum={item.character_count}
                          />
                        </div>
                      </div>
                    )
                  })
                }
                
            </div>
            <div className="mx-auto mt-[50px]" >
              <div className="mt-4 mx-auto shadow-none hover:shadow-none bg-[#2c2c5e] text-base normal-case max-w-max px-8 py-3 cursor-pointer">
                <a href="mailto:contact@filebot.ai">
                  <span className="text-[#f9fafa]">
                    For larger plans feel free to contact us!
                  </span>
                </a>
              </div>
            </div>
            <div className="text-[#2c2c5e] mt-24">
              <b>What is a chatbot?</b><br/>
              A chatbot is a computer program that can answer questions and provide information about a specific topic. It can read and understand multiple files related to that topic. If you pay for a chatbot, there may be a limit on how many you can create each month.
              <br/><br/>
              <b>What is meant by “a message”?</b><br/>
              A message refers to a response sent by a chatbot. (excluding opening message)
              <br/><br/>
              <b>What does character limit mean for a chatbot?</b><br/>
              A character limit is the maximum amount of letters, numbers, and symbols that can be used to create a chatbot. The specific limit depends on the type of plan chosen. It includes all the characters found in the files used to create the chatbot.
            </div>
            <div className="mx-auto mt-[50px]" >
              <Button onClick={() => navigate("/privacy")} variant="filled" size="lg" className="mt-4 mx-auto shadow-none hover:shadow-none bg-[#2c2c5e] text-base normal-case max-w-max px-8 py-3">
                About Pricing Privacy
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
