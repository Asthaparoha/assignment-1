package com.capstone.restaurantorders.dto;

import jakarta.validation.constraints.NotNull;

public class PlaceOrderRequestDTO {

    @NotNull
    private Long userId;

    // getters & setters

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}