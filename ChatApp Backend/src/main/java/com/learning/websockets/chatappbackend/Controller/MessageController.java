package com.learning.websockets.chatappbackend.Controller;

import com.learning.websockets.chatappbackend.Entities.Messages;
import com.learning.websockets.chatappbackend.Service.Message.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/messages")
public class MessageController {
    private final MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    public ResponseEntity<?> addMessage(@RequestBody Messages message) {
        return messageService.addMessage(message);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMessage(@PathVariable String id) {
        return messageService.getMessage(id);
    }
}
