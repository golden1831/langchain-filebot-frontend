import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./demo.css"

export function SettingDemo(props) {
    useEffect(() => {
        // console.log(props);
    }, [props]);
    return (
        <div className="flex flex-col justify-between h-3/4 items-center">
            <div className="w-7/12 h-2/3 m-auto demo">
                <div className="flex flex-row w-full h-[70px] p-2.5 rounded-t-lg" style={{background: props.headBackColor}}>
                    <div className="flex flex-col h-auto text-[#ffffff]">
                        <div>&nbsp;{props.headTitle}</div>
                        <div>&nbsp;{props.subHeadTitle}</div>
                    </div>
                </div>
                <div className="flex justify-start mt-5 max-w-3/4 px-2.5">
                    <div className="r-0 rounded-lg px-2 py-2 text-left max-w-3/4 whitespace-normal" style={{background: props.botMsgBackColor, color: props.botMsgColor}}>{props.firstMsg}</div>
                </div>
                <div className="flex justify-end mt-5 max-w-3/4 px-2.5">
                    <div className="rounded-lg px-2 py-2 max-w-3/4 text-left whitespace-normal" style={{background: props.userMsgBackColor, color: props.userMsgColor}}>{props.fieldMsg}</div>
                </div>
            </div>        
            <div className="w-7/12 flex justify-end">
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    backgroundColor: props.widgetColor, 
                    border: "none",
                    borderRadius: 30,
                    alignItems: 'center'
                }}>
                    <img 
                        src="/img/widget.svg"
                        className="w-8 h-8"
                    />
                    {/* <i className="fas fa-comment" style={{fontSize: 36, color: "#FFF"}}></i> */}
                </div>
            </div>
        </div>
    )
}

SettingDemo.displayName = "SettingDemo";

export default SettingDemo;