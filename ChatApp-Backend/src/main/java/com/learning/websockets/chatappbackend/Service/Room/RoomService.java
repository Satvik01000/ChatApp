package com.learning.websockets.chatappbackend.Service.Room;


import com.learning.websockets.chatappbackend.DTO.RoomRequest;
import com.learning.websockets.chatappbackend.Entities.Messages;
import com.learning.websockets.chatappbackend.Entities.Room;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface RoomService {
    ResponseEntity<?> createRoom(RoomRequest request);
    ResponseEntity<Room> getRoom(String roomId);
    ResponseEntity<List<Messages>> getMessages(String roomId);
    ResponseEntity<?> addMessageToRoom(String roomId, Messages message);
}
