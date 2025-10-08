package com.learning.websockets.chatappbackend.Service.Message;

import com.learning.websockets.chatappbackend.Entities.Messages;
import com.learning.websockets.chatappbackend.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MessageServiceImplementation implements MessageService {
    private final MessageRepository messageRepository;

    @Autowired
    public MessageServiceImplementation(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @Override
    public ResponseEntity<?> addMessage(Messages message) {
        message.setTimeStamp(LocalDateTime.now());
        messageRepository.save(message);
        return ResponseEntity.status(HttpStatus.CREATED).body(message);
    }

    @Override
    public ResponseEntity<?> getMessage(String id) {
        Messages message = messageRepository.findById(id).orElse(null);
        if (message == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Message not found");
        }
        return ResponseEntity.ok(message);
    }
}