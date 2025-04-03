package com.learning.websockets.chatappbackend.Service.Chat;

import com.learning.websockets.chatappbackend.DTO.MessageRequest;
import com.learning.websockets.chatappbackend.Entities.Messages;
import com.learning.websockets.chatappbackend.Entities.Room;
import com.learning.websockets.chatappbackend.Repository.MessageRepository;
import com.learning.websockets.chatappbackend.Repository.RoomRepo;
import com.learning.websockets.chatappbackend.Service.Room.RoomService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ChatServiceImplementation implements ChatService{
    private final RoomRepo roomRepo;
    private final MessageRepository messageRepository;
    private RoomService roomService;

    public ChatServiceImplementation(RoomRepo roomRepo, MessageRepository messageRepository, RoomService roomService) {
        this.roomRepo = roomRepo;
        this.messageRepository = messageRepository;
        this.roomService = roomService;
    }

    @Override
    public ResponseEntity<?> sendMessages(String roomId, MessageRequest request) {
        Room room = roomRepo.findRoomByRoomId(request.getRoomId());
        if(room==null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No such room found");

        Messages messages = new Messages();
        messages.setSender(request.getSender());
        messages.setContent(request.getContent());
        messages.setTimeStamp(LocalDateTime.now());

        messageRepository.save(messages);
        roomService.addMessageToRoom(request.getRoomId(), messages);

        return ResponseEntity.status(HttpStatus.CREATED).body(messages);
    }
}
