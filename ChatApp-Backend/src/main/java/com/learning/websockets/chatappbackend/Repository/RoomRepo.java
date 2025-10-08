package com.learning.websockets.chatappbackend.Repository;

import com.learning.websockets.chatappbackend.Entities.Room;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepo extends MongoRepository<Room, String> {
    Room findRoomByRoomId(String roomId);
}
