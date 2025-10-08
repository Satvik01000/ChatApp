package com.learning.websockets.chatappbackend.Service.Chat;

import com.learning.websockets.chatappbackend.DTO.MessageRequest;
import com.learning.websockets.chatappbackend.Entities.Messages;
import org.springframework.http.ResponseEntity;

public interface ChatService {
    MessageRequest sendMessages(String roomId, MessageRequest request);
}
