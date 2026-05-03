package com.capstone.restaurantorders.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CategoryRequestDTO {

    @NotBlank(message = "Category name is required")
    private String name;

    @NotNull(message = "Restaurant ID is required")
    private Long restaurantId;

    // getters & setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(Long restaurantId) {
        this.restaurantId = restaurantId;
    }
}
