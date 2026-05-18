package com.astha.todoapp.dto;

import com.astha.todoapp.entity.TodoStatus;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class TodoDTO {

    @NotNull
    @Size(min = 3)
    private String title;

    private String description;

    private TodoStatus status;

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public TodoStatus getStatus() { return status; }
    public void setStatus(TodoStatus status) { this.status = status; }
}