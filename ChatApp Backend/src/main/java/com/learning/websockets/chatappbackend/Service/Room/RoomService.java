package com.learning.websockets.chatappbackend.Service.Room;


import com.learning.websockets.chatappbackend.Entities.Messages;
import com.learning.websockets.chatappbackend.Entities.Room;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface RoomService {
    ResponseEntity<?> createRoom(String roomId);
    ResponseEntity<Room> getRoom(String roomId);
    ResponseEntity<List<Messages>> getMessages(String roomId);
    ResponseEntity<?> addMessageToRoom(String roomId, Messages message);
}
