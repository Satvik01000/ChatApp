package com.learning.websockets.chatappbackend.Service.Message;

import com.learning.websockets.chatappbackend.Entities.Messages;
import org.springframework.http.ResponseEntity;

public interface MessageService {
    ResponseEntity<?> addMessage(Messages message);
    ResponseEntity<?> getMessage(String id);
}
