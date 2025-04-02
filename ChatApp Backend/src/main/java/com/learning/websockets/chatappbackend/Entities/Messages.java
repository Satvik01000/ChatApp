package com.learning.websockets.chatappbackend.Entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "messages")
public class Messages {
    private String sender;
    private String content;
    private LocalDateTime timeStamp;

    public Messages(String sender, String content) {
        this.sender = sender;
        this.content = content;
        this.timeStamp=LocalDateTime.now();
    }
}
