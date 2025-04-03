package com.learning.websockets.chatappbackend.Controller;

import com.learning.websockets.chatappbackend.DTO.MessageRequest;
import com.learning.websockets.chatappbackend.Service.Chat.ChatService;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {
    private ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public ResponseEntity<?> sendMessage(@DestinationVariable String roomId, @RequestBody MessageRequest request){
        return chatService.sendMessages(roomId, request);
    }
}
