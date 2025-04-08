package com.learning.websockets.chatappbackend.Service.Room;

import com.learning.websockets.chatappbackend.DTO.RoomRequest;
import com.learning.websockets.chatappbackend.Entities.Messages;
import com.learning.websockets.chatappbackend.Entities.Room;
import com.learning.websockets.chatappbackend.Repository.MessageRepository;
import com.learning.websockets.chatappbackend.Repository.RoomRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class RoomServiceImplementation implements RoomService{
    private final RoomRepo roomRepo;

    public RoomServiceImplementation(RoomRepo roomRepo, MessageRepository messageRepository) {
        this.roomRepo = roomRepo;
        this.messageRepository = messageRepository;
    }

    private final MessageRepository messageRepository;

    @Override
    public ResponseEntity<?> createRoom(RoomRequest request) {
        if(roomRepo.findRoomByRoomId(request.getRoomId())!=null){
            return ResponseEntity.badRequest().body("Room already exists");
        }
        Room room = new Room();
        room.setRoomId(request.getRoomId());
        room.setRoomName(request.getRoomName());
        roomRepo.save(room);

        return ResponseEntity.status(HttpStatus.CREATED).body(room);
    }

    @Override
    public ResponseEntity<Room> getRoom(String roomId) {
        Room room = roomRepo.findRoomByRoomId(roomId);
        if (room == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

        return ResponseEntity.ok(room);
    }

    @Override
    public ResponseEntity<List<Messages>> getMessages(String roomId) {
        Room room = roomRepo.findRoomByRoomId(roomId);
        if(room==null)
            return ResponseEntity.badRequest().build();
        List<Messages> messages = room.getMessageList();
        return ResponseEntity.ok(messages);
    }

    @Override
    public ResponseEntity<?> addMessageToRoom(String roomId, Messages message) {
        Room room = roomRepo.findRoomByRoomId(roomId);
        if (room == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Room not found");
        }

        // Ensure message list is initialized
        if (room.getMessageList() == null) {
            room.setMessageList(new ArrayList<>());
        }

        // Set timestamp for the message
        message.setTimeStamp(LocalDateTime.now());

        // Save the message in the database
        Messages savedMessage = messageRepository.save(message);

        // Add the saved message to the room's message list
        room.getMessageList().add(savedMessage);
        roomRepo.save(room);

        return ResponseEntity.ok(room);
    }

}
