package com.capstone.restaurantorders.dto;

import jakarta.validation.constraints.NotNull;

public class AddToCartRequestDTO {

    @NotNull
    private Long userId;

    @NotNull
    private Long menuItemId;

    @NotNull
    private Integer quantity;

    // ===== GETTERS & SETTERS =====

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getMenuItemId() {
        return menuItemId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }


}
