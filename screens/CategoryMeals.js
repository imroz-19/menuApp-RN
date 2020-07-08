import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy';
import MealList from '../components/MealList';

const CategoryMeals = ({ navigation, route }) => {
    const { categoryId } = route.params;
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
    const displayMeals  = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

    navigation.setOptions({
        title: selectedCategory.title,
    });

    return (
        <MealList
            data={displayMeals}
            navigation={navigation}
        />
    );
}

export default CategoryMeals;