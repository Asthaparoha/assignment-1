package com.capstone.restaurantorders.service.impl;

import com.capstone.restaurantorders.dto.CategoryRequestDTO;
import com.capstone.restaurantorders.dto.CategoryResponseDTO;
import com.capstone.restaurantorders.entity.Category;
import com.capstone.restaurantorders.entity.Restaurant;
import com.capstone.restaurantorders.repository.CategoryRepository;
import com.capstone.restaurantorders.repository.RestaurantRepository;
import com.capstone.restaurantorders.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final RestaurantRepository restaurantRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository,
                               RestaurantRepository restaurantRepository) {
        this.categoryRepository = categoryRepository;
        this.restaurantRepository = restaurantRepository;
    }

    @Override
    public CategoryResponseDTO createCategory(CategoryRequestDTO request) {

        Restaurant restaurant = restaurantRepository.findById(request.getRestaurantId())
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));

        Category category = new Category();
        category.setName(request.getName());
        category.setRestaurant(restaurant);

        Category saved = categoryRepository.save(category);

        return mapToResponse(saved);
    }

    @Override
    public List<CategoryResponseDTO> getCategoriesByRestaurant(Long restaurantId) {

        return categoryRepository.findByRestaurantId(restaurantId)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteCategory(Long id) {

        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        categoryRepository.delete(category);
    }

    private CategoryResponseDTO mapToResponse(Category category) {

        CategoryResponseDTO response = new CategoryResponseDTO();
        response.setId(category.getId());
        response.setName(category.getName());
        response.setRestaurantId(category.getRestaurant().getId());

        return response;
    }
}