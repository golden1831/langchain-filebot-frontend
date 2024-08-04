import React from "react";
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto text-[#2C2C5E]">
        <div className=" bg-[#E7E7E7]">
          <div className="container mx-auto grid grid-cols-1 tablet:grid-cols-2 my-auto ease-linear duration-300">
            <div className="col-span-1 self-center">
              <div className="w-full flex flex-col items-center content-center">
                <div className="flex text-center">
                  <Typography
                    className="font-sans text-2xl tablet:text-3xl laptop:text-4xl leading-10 font-black text-[#ffffff]"
                  >
                    Create a GPT Chatbot
                  </Typography>
                </div>
                <div className="mx-auto my-10 text-xl tablet:text-xl laptop:text-2xl font-semibold max-w-md flex">
                    <motion.div
                      initial={{ opacity: 0}}
                      animate={{
                        opacity: [0 ,1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        x: [180, 90, 90, 90, 90, 90, 90, 60, 60, 60, 60, 60, 60],
                        transition: {
                          duration: 5,
                          repeat: Infinity,
                        },
                      }}>
                        <p className="break-words">From your own data</p>
                        </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        x: [-100, -100, -100, -100, -100, -100, 0, 0, 0, 0, 0, 0 , 0],
                        scale: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        transition: {
                          duration: 5,
                          repeat: Infinity,
                          delay: 2
                        },
                      }}
                      >
                        <p>That really works</p>
                    </motion.div>
                </div>
                <div className="flex justify-center">
                  <Button onClick={() => navigate("/pricing")} size="lg" className="mt-4 mx-auto text-base bg-[#2c2c5e] shadow-none hover:shadow-none normal-case max-w-max px-8 py-3">
                    Try for free!
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-full bottom-0">
                <img
                  src="/img/model.png"
                  alt="model"
                  className="h-full rounded-none bottom-0"
                >
                </img>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-2.5 mt-16 mx-auto">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 ease-linear duration-300 mt-10">
            <div className="col-span-1">
              <div className="w-full">
                <div className="mb-5">
                  <Typography
                    className="mt-12 font-sans text-2xl laptop:text-4xl font-medium leading-10"
                  >
                    A GPT CHATBOT WITH YOUR PDF'S
                  </Typography>
                </div>
                <div className="mt-5">
                  <Typography className="text-2xl font-medium text-inherit">
                    HOW IT WORKS
                  </Typography>
                </div>
                <Typography className="mt-5 font-normal">
                  Filebot is a chatbot that can really assist your website visitors. Unlike other chatbots, it provides helpful information that your visitors need.<br/><br/>
                  <b>You can train this chatbot with your own PDF files</b> and use the latest techniques to provide relevant information to your customers. It stays on topic and doesn’t rely on the database of Chat GPT. Instead, it utilizes the latest language models to enhance the user experience. Based on your own provided PDF’s
                </Typography>
                  <div className="mt-2">
                    <div className="flex h-7 items-center">
                      <img
                        src={'/img/check.svg'}
                        alt='check'
                        className="w-4 h-4 mr-2"
                      />
                      Super Smart Chatbot for your company or organisation
                    </div>
                    <div className="flex h-7 items-center">
                      <img
                        src={'/img/check.svg'}
                        alt='check'
                        className="w-4 h-4 mr-2"
                      />
                      The Ultimate user experience
                    </div>
                    <div className="flex h-7 items-center">
                      <img
                        src={'/img/check.svg'}
                        alt='check'
                        className="w-4 h-4 mr-2"
                      />
                      50+ languages
                    </div>
                    <div className="flex h-7 items-center">
                      <img
                        src={'/img/check.svg'}
                        alt='check'
                        className="w-4 h-4 mr-2"
                      />
                      Smart content including urls
                    </div>
                    <div className="flex h-7 items-center">
                      <img
                        src={'/img/check.svg'}
                        alt='check'
                        className="w-4 h-4 mr-2"
                      />
                      Allways on topic with your own content.
                    </div>
                    <div className="flex h-7 items-center">
                      <img
                        src={'/img/check.svg'}
                        alt='check'
                        className="w-4 h-4 mr-2"
                      />
                      GDPR proof.
                    </div>
                  </div>
                  <Button onClick={() => navigate("/workflow")} className="mt-8 mx-auto shadow-none hover:shadow-none bg-[#2c2c5e] text-sm rounded normal-case max-w-max px-6 py-3">Read more</Button>
                
              </div>
            </div>
            <div className="col-span-1">
              <div className="mx-auto">
                <img className="w-full mx-auto rounded-3xl" src="/img/dashboard.png" />
              </div>
            </div>
          </div>
        </div>
        <section className="container py-24 px-4 mb-20 mx-auto">
          <div className="container mx-auto max-w-max flex flex-col text-[#2c2c5e]">
            <Typography className="mb-4 font-bold text-2xl laptop:text-4xl normal-case max-w-max text-center">
              Use this great technology for your site!
            </Typography>
            <Button onClick={() => navigate("/pricing")} variant="filled" size="lg" className="mt-4 mx-auto bg-[#2c2c5e] shadow-none hover:shadow-none text-base normal-case max-w-max px-8 py-3">
              Start for free!
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
