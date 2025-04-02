package com.learning.websockets.chatappbackend.Controller;

import com.learning.websockets.chatappbackend.DTO.RoomRequest;
import com.learning.websockets.chatappbackend.Entities.Messages;
import com.learning.websockets.chatappbackend.Service.Room.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomController {
    RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody RoomRequest roomRequest) {
        return roomService.createRoom(roomRequest.getRoomId());
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<?> getRoom(@PathVariable String roomId){
        return roomService.getRoom(roomId);
    }

    @GetMapping("/message/{roomId}")
    public ResponseEntity<List<Messages>> getMessages(@PathVariable String roomId){
        return roomService.getMessages(roomId);
    }

    @PostMapping("/message/{roomId}")
    public ResponseEntity<?> addMessageToRoom(@PathVariable String roomId, @RequestBody Messages message) {
        return roomService.addMessageToRoom(roomId, message);
    }
}
