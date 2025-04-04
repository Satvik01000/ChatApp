package com.learning.websockets.chatappbackend.Repository;

import com.learning.websockets.chatappbackend.Entities.Messages;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends MongoRepository<Messages, String> {
}