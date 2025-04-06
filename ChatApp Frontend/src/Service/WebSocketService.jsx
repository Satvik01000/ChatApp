import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const WebSocketService = ({ roomId, onMessageReceived }) => {
    const clientRef = useRef(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const socket = new SockJS("http://localhost:8080/chat"); // Your backend endpoint
        const stompClient = new Client({
            webSocketFactory: () => socket,
            debug: function (str) {
                console.log(str); // Optional for debugging
            },
            onConnect: () => {
                setConnected(true);
                console.log("Connected to WebSocket");

                // Subscribe to the topic for the current room
                stompClient.subscribe(`/topic/room/${roomId}`, (message) => {
                    const body = JSON.parse(message.body);
                    onMessageReceived(body);
                });
            },
            onStompError: (frame) => {
                console.error("Broker error:", frame.headers["message"]);
                console.error("Details:", frame.body);
            }
        });

        stompClient.activate();
        clientRef.current = stompClient;

        return () => {
            stompClient.deactivate();
        };
    }, [roomId]);

    const sendMessage = (message) => {
        if (clientRef.current && connected) {
            clientRef.current.publish({
                destination: `/app/sendMessage/${roomId}`,
                body: JSON.stringify(message),
            });
        } else {
            console.warn("WebSocket not connected yet.");
        }
    };

    return { sendMessage, connected };
};

export default WebSocketService;
