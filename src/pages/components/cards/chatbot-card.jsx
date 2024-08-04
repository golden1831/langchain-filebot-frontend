import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  Switch,
  IconButton,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import jwt_decode from 'jwt-decode';
import toast, { Toaster } from "react-hot-toast";
import { ChatBubbleOvalLeftIcon, ClockIcon, Cog8ToothIcon, GlobeAltIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { deleteSetting, updateSetting } from "@/redux/actions/settingAction";
import isEmpty from "is-empty";
import moment from "moment/moment";
import setAuthToken from "@/utils/setAuthToken";
import { tokens } from "@/utils/token";
import { fileUpload, fileDelete } from "@/redux/actions/fileAction";

export function ChatbotCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [history, setHistory] = useState(0);
  const [fileTotal, setFileTotal] = useState([]);
  const [chatDate, setChatDate] = useState("");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(() => {
		const info = jwt_decode(tokens.get());
		return ({
			...info
		})
	})
  const [loading, setLoading] = useState(false);

  // const auth = useSelector((state) => state.auth);
  
  const handleSettings = () => {
    navigate(`/dashboard/setting/${props.chatbot_id}`);
  };

  const handleChecked = (e) => {
    dispatch(updateSetting({id: props.chatbot_id, is_public: e.target.checked}))
      .then(res => {
          if(res.status === 200) {
            console.log('ok');
            props.setFlag(!props.flag);
          }
      })
      .catch(err => console.log(err));
  };

  const onRemove = async (item) => {
    console.log(item);
    
    setAuthToken(tokens.get());
    let save = fileTotal.map(file => file.uid === item.uid ? { ...file, status: "deleting" } : file);
    setFileTotal(save);
    try{
        // const res = await axios.post("http://localhost:8080/api/embed_file/delete", {file: item.uid, bot: props.chatbot_id})
        const res = await fileDelete({file: item.uid, bot: props.chatbot_id})
        if (res.status === 200) {
          console.log('ok');
          props.setFlag(!props.flag);
        }
    }
    catch(error){
        console.log(error)
    }
  };

  const deleteBot = () => {
    dispatch(deleteSetting({id: props.chatbot_id}))
      .then((res) => {
        props.setFlag(!props.flag);
      })
      .catch((err) => console.log(err));
    
  }

  const myChatbot = () => {
    navigate(`/chatbot/${props.chatbot_id}`);
  }

  useEffect(() => {
    if (!isEmpty(props.histories)) {
      setHistory(props.histories.filter(item => item.isBot === false).length);
      let last = props.histories.slice(-1)[0].created_at;
      setChatDate(moment(last).format('YYYY-MM-DD hh-mm'));
    }
    if (!isEmpty(props.files)) {
      console.log(1);
      setFileTotal(props.files.map((item) => { return {uid: item._id, name: item.original_name, status: "done", len: item.character_len}}));
    } else {
      console.log(2);
      setFileTotal([]);
    }
    
  }, [props]);

  // useEffect(() => {
  //   console.log(fileTotal);
  // }, [fileTotal])

  const handlePDFFileChange = async (event) => {
    // setLoading(true);
    let fileToLoad = event.target.files;
    // console.log(event.target.files);
    console.log(props.chatbot_id);
    if (!isEmpty(fileToLoad)) {
      let test = []
      let entries = Object.entries(fileToLoad);
      if (user.pdf - props.files?.length >= entries.length) {
        entries.forEach( ([key, val] = entry) => {
          test.push(val);
        });
        // console.log(test);
        let save = fileTotal.concat(test.map((item) => ({ uid: `${item.lastModified}`, name: item.name, status: "loading", len: 0 })));

        // save.concat(fileTotal);

        setFileTotal(save)
              
        const formData = new FormData();

        test.forEach(file => {
          formData.append("embedFile", file);
        })
        const config = {
          
        };
        fileUpload({chatbot_id: props.chatbot_id, formData: formData})
          .then(res => { console.log(res); setLoading(false); props.setFlag(!props.flag); })
          .catch(err => { toast.error(err.response.data.message); setLoading(false); props.setFlag(!props.flag); });
      } else {
        toast.error("Lack of pdf number.");
      }
    }
  }

  return (
    <>
      <Card shadow={false} className="w-full text-left text-[#2c2c5e] rounded-2xl border-2 h-200 p-2.5">
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 ease-linear duration-300 tablet:divide-x tablet:divide-solid">
          <div className="col-span-1 tablet:col-span-1 laptop:col-span-2 px-1">
            <div className="">
              <div className="flex flex-row">
                <Typography className="text-xl font-bold mt-6 mb-1 text-[#2c2c5e]">
                  Name: 
                </Typography>
                <Typography className="text-2xl font-bold mt-6 mb-1 ml-3 text-[#5050a9] hover:text-[#5050a9] hover:underline cursor-pointer" onClick={myChatbot}>
                  {props.chatbot_name}
                </Typography>
              </div>
              <div className="absolute right-3 top-3">
                <IconButton
                  color="blue-gray"
                  size="sm"
                  variant="text"
                  onClick={() => deleteBot()}
                >
                  <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
              </div>
              <div className="mt-2">
                <div className="flex flex-row align-center mb-5">
                  <Typography className="text-xl font-bold mt-3">
                    Source:
                  </Typography>
                  <div className="ml-3 mt-2.5">
                    <input
                      type="file"
                      id={`pdfUpload-${props.chatbot_id}`}
                      accept="application/pdf"
                      multiple= {user.pdf - props.files?.length > 1 ? true : false}
                      style={{ display: "none" }}
                      disabled={loading}
                      onChange={handlePDFFileChange}
                    />
                    <label htmlFor={`pdfUpload-${props.chatbot_id}`} className="">
                      <div className="flex">
                        <span className="text-xl font-bold p-1 text-[#5050a9] hover:text-[#5050a9] hover:bg-gray-300 cursor-pointer">
                          {`Add new (${user.pdf - props.files?.length} left)`}
                        </span>
                        <span className="flex justify-center items-center ml-1">
                          {`(${fileTotal.reduce((sum, item) => sum + item.len, 0)} / ${user.character})`}
                        </span>
                      </div>
                    </label>
                    {fileTotal.map((item, idx) => (
                      <div key={`bot-${props.chatbot_id}-${idx}`} className="mt-1 p-1 text-base hover:bg-gray-300 rounded flex justify-between">
                        <span className="flex">{item.name}</span>
                        <button
                          className="flex middle rounded"
                          type="button"
                          data-ripple-light="true"
                          onClick={() => onRemove(item)}
                        >
                          {item.status === "done" ? 
                            <span className="cursor-pointer mt-1">
                              <XMarkIcon strokeWidth={2} className="h-5 w-5 mr-2" />
                            </span> :
                            <div role="status">
                              <svg aria-hidden="true" className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                              </svg>
                              <span className="sr-only">Loading...</span>
                            </div>
                          }
                        </button>                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center mr-3 px-2 py-1 rounded-xl bg-[#edf2f8] ">
                <ChatBubbleOvalLeftIcon className="w-4 h-4 mr-1" />
                {`${history} / ${user.msg}`}
              </div>
              <div className="flex items-center px-4 py-1 rounded-xl bg-[#edf2f8]">
                <ClockIcon className="w-4 h-4 mr-1" />
                {chatDate}
              </div>
            </div>
          </div>
          <div className="col-span-1 p-2.5 flex flex-col justify-between w-full">
            <div onClick={handleSettings} className="flex mt-6 mb-1 items-center cursor-pointer hover:bg-deep-purple-200">
              <Cog8ToothIcon className="w-5 h-5 mr-2" />
              <Typography variant="h6" >
                Settings
              </Typography>
            </div>
            <Popover placement="top" open={open}>
              <PopoverHandler>
                <div onMouseUp={() => setOpen(!open)} className="flex mt-6 mb-1 items-center cursor-pointer hover:bg-deep-purple-200">
                  <GlobeAltIcon className="w-5 h-5 mr-2"/>
                  <Typography variant="h6">
                    Embed on Website
                  </Typography>
                </div>
              </PopoverHandler>
              <PopoverContent className="w-[300px] tablet:w-[500px] h-[500px] tablet:h-[400px]">
                <div className="divide-y divide-solid">
                  <div className="w-full p-2.5 flex justify-between">
                    <Typography>Add to website</Typography>
                    <Switch
                      checked={props.is_public}
                      onChange={handleChecked}
                      label="(Make chatbot public)"
                    />
                    <IconButton
                      color="blue-gray"
                      size="sm"
                      variant="text"
                      onClick={() => setOpen(!open)}
                    >
                      <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                  </div>
                  <div>
                    {!props.is_public ? <div className="flex justify-center items-center h-full">Enable public access for chatbot first</div> : 
                    <>
                      <div className="divide-y divide-solid">
                        <div className="py-3">
                          <Typography>Copy and add the following script to your website html:</Typography>
                          <div className="mt-3 p-2 bg-blue-gray-50">
                            <code>{`<script async="" src="http://localhost:8081/widget.js" data-chat-app-id="filebot" data-chat-app-key="${props.chatbot_id} data-chat-widget-color="${props.widget_color}"></script>`}</code>
                          </div>
                        </div>
                        <div className="py-3 w-full">
                          <Typography>Or use iframe if you want to embed to specific section:</Typography>
                          <div className="mt-3 p-2 bg-blue-gray-50">
                            <code>{`<iframe src="http://localhost:5173/chat/${props.chatbot_id}" width="450px" height="600px"></iframe>`}</code>
                          </div>
                        </div>
                      </div>
                    </>
                    }
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </Card>
      <Toaster />
    </>
  );
}

ChatbotCard.displayName = "ChatbotCard";

export default ChatbotCard;
