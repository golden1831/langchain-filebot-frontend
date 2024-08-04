import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Workflow() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto p-2.5 text-[#2C2C5E]">
        <div className="">
          <div className="mb-5">
            <Typography
              className="mt-12 font-sans text-2xl laptop:text-4xl font-medium leading-10"
            >
              A GPT Chatbot with your PDF's
            </Typography>
          </div>
          <Typography className="text-xl laptop:text-2xl font-medium text-inherit">
            How it works
          </Typography>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-5 gap-8 ease-linear duration-300 mt-10">
          <div className="col-span-3">
            <div className="w-full">
              <div className="mb-5">
                <Typography className="mb-5 font-normal">
                  Looking for a GPT chatbot that works with your own content? Filebot is a website that helps you create a chatbot that can answer questions. With your own PDF’s as the source! To create the chatbot, you can upload text documents or provide text for the chatbot to learn from. The text will be processed and analyzed so that the chatbot can accurately pick up the information. Once the chatbot is created, you can embed it on your website to enhance the user experience.
                </Typography>
                <Typography className="mb-5 font-normal">
                  The chatbot will only answer questions based on the provided data, but you can change this if you want. At the moment, Filebot supports plain text and pdf formats. You can easily add the chatbot to your website by allowing public access and including a provided script.
                </Typography>
                <Typography className="font-normal">
                  The chatbot can understand and help in over 50 different languages. When you ask a question, it will try its best to give you an answer in the language you asked, even if the text is written in a different language.
                </Typography>
              </div>
              <div className="flex justify-center">
                <Button onClick={() => navigate("/pricing")} variant="filled" size="lg" className="mt-4 mx-auto bg-[#2c2c5e] shadow-none hover:shadow-none text-base normal-case max-w-max px-8 py-3">
                  Start for free!
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mx-auto">
              <img className="w-full mx-auto rounded-3xl" src="/img/chatbot-pdf.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workflow;
