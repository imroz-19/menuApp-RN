import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = (props) => (
    <View style={styles.filterContainer}>
        <Text>{props.title}</Text>
        <Switch
            value={props.value}
            onValueChange={() => props.handler(!props.value)}
            trackColor={{ true: Colors.primaryColor }}
            thumbColor="green"
        />
    </View>
)
const FilterScreen = ({ navigation }) => {
    const [isGluteenFree, setGluteenFree] = useState(false);
    const [isLactoseFree, setLactoseFree] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);
    console.log(navigation.setParams());
    

    const saveFilter  = () => {
        const appliedFilters = {
            gluteenFree : isGluteenFree,
            lactoseFree : isLactoseFree,
            vegan : isVegan,
            vegetarian : isVegetarian,
        }
    }

    useEffect(() => {
        navigation.setParams({
            save: saveFilter
        })
    }, [ isGluteenFree, isLactoseFree, isVegan, isVegetarian ])

    navigation.setOptions({
        headerTitle: 'Filter Meal',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-menu"
                    onPress={() => navigation.openDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={() => navigation.navigation.getParam()}
                />
            </HeaderButtons>
        )
    });

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch
                title="Gluteen Free"
                value={isGluteenFree}
                handler={setGluteenFree}
            />
            <FilterSwitch
                title="Lactose Free"
                value={isLactoseFree}
                handler={setLactoseFree}
            />
            <FilterSwitch
                title="Vegan"
                value={isVegan}
                handler={setVegan}
            />
            <FilterSwitch
                title="Vegetarian"
                value={isVegetarian}
                handler={setVegetarian}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        margin: 20,
        fontSize: 22,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 40,
        alignItems: 'center'
    }
})
export default FilterScreen;