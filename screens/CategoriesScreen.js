import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import CategoryGrid from '../components/CategoryGrid';

const CategoriesScreen = ({ navigation }) => {
    
    navigation.setOptions({
        headerTitle: 'Meal Categories',
        headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favorite"
                iconName="ios-menu"
                onPress={() => navigation.openDrawer()}
            />
        </HeaderButtons>
        ) 
    });

    const renderGridItem = ({ item }) => {
        return (
            <CategoryGrid
                itemId={item.id}
                title={item.title}
                color={item.color}
                onSelect= {() => {
                    navigation.navigate('CategoryMeals', {
                        categoryId: item.id
                    });
                }}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.id}
        />
    );
}
const styles = StyleSheet.create({

})
export default CategoriesScreen;