"use client"
import { io } from "socket.io-client";
import { useState, useRef } from "react";

export default function Page() {
	const inputRef = useRef<HTMLInputElement>();
	const [messages, setMessages] = useState<any[]>(() => []);

	const socket = io("http://127.0.0.1:3001");

	socket.emit("connection");

	function handleSend() {
		socket.emit("input_message", inputRef.current.value);
	}

	socket.on("input_message", (msg: string) => {
		console.log('msg', msg);
		setMessages(prev => [...prev, msg]);
	});
	
	return (
		<div className="h-screen w-screen bg-slate-400 p-2" >
			<div className="h-[80vh] border-1 rounded-sm bg-white p-4" >
				<div className="bg-gray-300 ml-2 max-w-48 mt-2 rounded-md border-slate-800 border-2" >
					{messages.map(msg => (
						<>
					<div>
						{msg}
					</div>
					<div>
						id
					</div>
						</>
					))}
				</div>
			</div>
			<div className="grid grid-cols-4 p-1 h-fit" >
			<input ref={inputRef} className="rounded-md p-2 m-2 h-14 col-span-3" type="text"  />
			<div className=" border-1 rounded-sm col-span-1" >
				<button className="m-2 bg-yellow-400 h-fit w-[90%] rounded-md py-4 px-8 ml-[20px]" onClick={handleSend} >Send</button>
			</div>
			</div>
		</div>
	)	
}

//()
