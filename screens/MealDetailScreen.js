import React from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import  DefaultText  from "../components/DefaultText";
import { MEALS } from '../data/dummy';

const MealDetailScreen = (props) => {
    const { mealId } = props.route.params;
    const mealDetails = MEALS.find(meal => meal.id === mealId);

    props.navigation.setOptions({
        title: mealDetails.title,
        headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favorite"
                iconName="ios-star"
                onPress={() => {
                    console.log('Hi !!')
                }}
            />
        </HeaderButtons>
        )
    })

    return (
        <ScrollView>
            <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />
            <View style={styles.mealDetail}>
              <DefaultText>{mealDetails.duration}m</DefaultText>
              <DefaultText>{mealDetails.complexity.toUpperCase()}</DefaultText>
              <DefaultText>{mealDetails.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {mealDetails.ingredients.map((ingredient) => (
                <Text style={styles.listItem} key={ingredient}>{ingredient}</Text>
            ))}
            <Text style={styles.title}>Steps</Text>
            {mealDetails.steps.map((step) => (
                <Text style={styles.listItem} key={step}>{step}</Text>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        padding: 10,
        borderWidth: 1
    },
    mealDetail: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 20,
        textAlign: 'center'
    }
})
export default MealDetailScreen;