import React from 'react';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy';

const FavoriteScreen = ({ navigation }) => {
    const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

    navigation.setOptions({
        headerTitle: 'Favorite Meals',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-menu"
                    onPress={() => navigation.openDrawer()}
                />
            </HeaderButtons>
        )
    })
    return (
        <MealList
            data={favMeals}
            navigation={navigation}
        />
    );
}

export default FavoriteScreen;