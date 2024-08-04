import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
    Input,
    Typography,
    Select,
    Option,
    Textarea,
    Button,
} from "@material-tailwind/react";
import SettingDemo from "./demo";
import "./demo.css";
import { useDispatch, useSelector } from "react-redux";
import { findSetting, updateSetting } from "@/redux/actions/settingAction";

export function MybotsSetting() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const chatbot = useSelector(state => state.setting)
    const { setId } = useParams();
    const [language, setLanguage] = useState("English");
    const [initData, setInitData] = useState({});
    const [pageState, setPageState] = useState(true);
    const [sideState, setSideState] = useState(false);
    const [botType, setBotType] = useState(0);

    useEffect(() => {
        if (setId) {
            dispatch(findSetting({id: setId}))
            .then(res => {
                if(res.status === 200) {
                    console.log(res.data);
                    setLanguage(res.data.language);
                    setInitData(res.data);
                }
            })
            .catch(err => console.log(err));
            // let data = chatbot.settings.filter(item => item._id === setId)[0];       
        }
    }, []);

    const update = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const settings = {
            botName: data.get("botName"),
            sysPrompt: data.get("sysPrompt"),
            language: data.get("language"),
            headTitle: data.get("headTitle"),
            subHeadTitle: data.get("subHeadTitle"),
            headBackColor: data.get("headBackColor"),
            firstMsg: data.get("firstMsg"),
            fieldMsg: data.get("fieldMsg"),
            botMsgColor: data.get("botMsgColor"),
            botMsgBackColor: data.get("botMsgBackColor"),
            userMsgColor: data.get("userMsgColor"),
            userMsgBackColor: data.get("userMsgBackColor"),
            widgetColor: data.get("widgetColor"),
        };
        setInitData(settings);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(document.getElementById("form"));
        const settings = {
            botName: data.get("botName"),
            sysPrompt: data.get("sysPrompt"),
            language: language,
            headTitle: data.get("headTitle"),
            subHeadTitle: data.get("subHeadTitle"),
            headBackColor: data.get("headBackColor"),
            firstMsg: data.get("firstMsg"),
            fieldMsg: data.get("fieldMsg"),
            botMsgColor: data.get("botMsgColor"),
            botMsgBackColor: data.get("botMsgBackColor"),
            userMsgColor: data.get("userMsgColor"),
            userMsgBackColor: data.get("userMsgBackColor"),
            widgetColor: data.get("widgetColor"),
        };
        dispatch(updateSetting({id: setId, ...settings}))
            .then(res => {
                if(res.status === 200) {
                    setLanguage(res.data.language);
                    setInitData(res.data);
                }
            })
            .catch(err => console.log(err));
        // setInitData(settings);
        // console.log("-------", settings);
    };

    const handleSelectLanguage = (val) => {
        setLanguage(val);
    };

    const onPageCheck = (e) => {
        e.preventDefault();
        setPageState(!pageState);
        setSideState(!sideState);
        setBotType(0);
    }

    const onSideCheck = (e) => {
        e.preventDefault();
        setSideState(!sideState);
        setPageState(!pageState);
        setBotType(1);
    }

    return (
        <div className="container justify-center mx-auto px-2.5">
            <div className="ml-2.5 mt-5 cursor-pointer w-10 h-10 tablet:w-12 tablet:h-12 flex justify-start" onClick={() => navigate(-1)}>
                <img className="" src="/img/back1.png" />
            </div>
            <form className="text-left text-[#2c2c5e]" id="form" onChange={update}>
                <section className="mt-3 pb-5 pt-4 mx-auto">
                    <div className="">
                        <Typography className="font-sans text-2xl laptop:text-4xl font-medium leading-10">
                            Settings
                        </Typography>
                        <div className="my-4">
                            <Typography variant="h6" className="mb-1">
                                Chatbot Name:
                            </Typography>
                            <div className="my-1">
                                <Input 
                                    size="md" 
                                    label="Chatbot name" 
                                    name="botName" 
                                    value={initData.botName || ''}
                                    onChange={(e) => setInitData({...initData, botName: e.currentTarget.value})}
                                />
                            </div>
                        </div>
                        <div className="my-4">
                            <Typography variant="h6" className="mb-1">
                                Default Language:
                            </Typography>
                            <Select
                                label="Default Language"
                                name="language"
                                value={language}
                                onChange={handleSelectLanguage}
                            >
                                <Option value={"English"}>English</Option>
                                <Option value={"Dutch"}>Dutch</Option>
                            </Select>
                        </div>
                        <div className="my-4">
                            <Typography variant="h6" className="mb-1">
                                System prompt (give an instruction on how to behave)
                            </Typography>
                            <Textarea 
                                label="System Prompt" 
                                name="sysPrompt"
                                value={initData.sysPrompt || ''} 
                                onChange={(e) => setInitData({...initData, sysPrompt: e.currentTarget.value})}
                            />
                        </div>
                    </div>
                </section>
                <section className="pb-20">
                    <Typography className="mt-5 font-sans text-2xl laptop:text-3xl font-medium leading-10">
                        Styling
                    </Typography>
                    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 ease-linear duration-300 mt-5">
                        <div className="col-span-1">
                            <div className="my-4">
                                <Typography variant="h6" className="mb-1">
                                    Heading title:
                                </Typography>
                                <div className="my-1">
                                    <Input 
                                        size="md" 
                                        label="Heading title" 
                                        name="headTitle"
                                        value={initData.headTitle || ''} 
                                        onChange={(e) => setInitData({...initData, headTitle: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <Typography variant="h6" className="mb-1">
                                    SubHeading:
                                </Typography>
                                <div className="my-1">
                                    <Input 
                                        size="md" 
                                        label="SubHeading" 
                                        name="subHeadTitle"
                                        value={initData.subHeadTitle || ''} 
                                        onChange={(e) => setInitData({...initData, subHeadTitle: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <Typography variant="h6" className="mb-1">
                                    Heading background color:
                                </Typography>
                                <div className="my-1 w-12">
                                    <Input
                                        type="color"
                                        label="color"
                                        list="presetColors"
                                        name="headBackColor"
                                        value={initData.headBackColor || ''}
                                        onChange={(e) => setInitData({...initData, headBackColor: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <Typography variant="h6" className="mb-1">
                                    First Message:
                                </Typography>
                                <div className="my-1">
                                    <Input
                                        size="md"
                                        label="Message"
                                        name="firstMsg"
                                        value={initData.firstMsg || ''}
                                        onChange={(e) => setInitData({...initData, firstMsg: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <Typography variant="h6" className="mb-1">
                                    Input filed message:
                                </Typography>
                                <div className="my-1">
                                    <Input
                                        size="md"
                                        label="Message"
                                        name="fieldMsg"
                                        value={initData.fieldMsg || ''}
                                        onChange={(e) => setInitData({...initData, fieldMsg: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <Typography variant="h6" className="mb-1">
                                    Bot message color:
                                </Typography>
                                <div className="my-1 w-12">
                                    <Input 
                                        type="color"
                                        list="presetColors" 
                                        label="color" 
                                        name="botMsgColor"
                                        value={initData?.botMsgColor || ''}
                                        onChange={(e) => setInitData({...initData, botMsgColor: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <Typography variant="h6" className="mb-1">
                                    Bot message background color:
                                </Typography>
                                <div className="my-1 w-12">
                                    <Input 
                                        type="color" 
                                        list="presetColors" 
                                        label="color" 
                                        name="botMsgBackColor"
                                        value={initData.botMsgBackColor || ''}
                                        onChange={(e) => setInitData({...initData, botMsgBackColor: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <Typography variant="h6" className="mb-1">
                                    User message color:
                                </Typography>
                                <div className="my-1 w-12">
                                    <Input 
                                        type="color" 
                                        list="presetColors" 
                                        label="color"
                                        name="userMsgColor"
                                        value={initData.userMsgColor || ''}
                                        onChange={(e) => setInitData({...initData, userMsgColor: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <Typography variant="h6" className="mb-1">
                                    User message background color:
                                </Typography>
                                <div className="my-1 w-12">
                                    <Input 
                                        type="color" 
                                        list="presetColors" 
                                        label="color"
                                        name="userMsgBackColor"
                                        value={initData.userMsgBackColor || ''}
                                        onChange={(e) => setInitData({...initData, userMsgBackColor: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <Typography variant="h6" className="mb-1">
                                    Widget color:
                                </Typography>
                                <div className="my-1 w-12">
                                    <Input 
                                        type="color" 
                                        list="presetColors" 
                                        label="color"
                                        name="widgetColor"
                                        value={initData.widgetColor || ""}
                                        onChange={(e) => setInitData({...initData, widgetColor: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            {/* <div id="chatwidget-direction">
                                <div className="element">
                                    <img src="/img/on-page.png" alt="On-page" className="on-page-image" />
                                    <span className="txt">
                                        On-page chatbot
                                    </span>
                                    <input type="radio" id="On-page" value={""} checked={pageState} onChange={onPageCheck} name="chatbot-page"></input>
                                </div>
                                <div className="element">
                                    <img src="/img/side-widget.png" value={""} alt="Side-widget" className="side-widget-image"/>
                                    <span className="txt">
                                        Side-widget chatbot
                                    </span>
                                    <input type="radio" id="Side-widget" checked={sideState} onChange={onSideCheck} name="chatbot-side"></input>
                                </div>
                            </div> */}
                            
                            <Button 
                                variant="filled"
                                type="submit"
                                className="mt-8 mx-auto shadow-none hover:shadow-none bg-[#2c2c5e] text-sm rounded normal-case max-w-max px-6 py-3"
                                onClick={handleSubmit}
                            >
                                Update
                            </Button>
                        </div>
                        <div className="col-span-1 h-[500px] mobile:h-full">
                            <div className="w-full h-full chatbot mx-auto my-auto justify-center">
                                <SettingDemo {...initData} />
                            </div>
                        </div>
                    </div>
                </section>
            </form>    
        </div>
    );
}

export default MybotsSetting;
