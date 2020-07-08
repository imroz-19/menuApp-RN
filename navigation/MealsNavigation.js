import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import FilterScreen from "../screens/FilterScreen";

import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const Tabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
    return (
        <Stack.Navigator
                screenOptions ={
                    {
                        headerStyle: {
                            backgroundColor: Colors.primaryColor
                        },
                        headerTintColor: '#fff'
                    }
                }
            >
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={
                        { 
                            headerTitle: 'Meal Categories',
                        }
                    }
                />
                <Stack.Screen
                    name="CategoryMeals"
                    component={CategoryMeals}
                />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
    );
}

const FavoriteStack = createStackNavigator();

const FavoriteStackNavigator = () => {
    return (
        <FavoriteStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primaryColor,
                },
                headerTintColor: '#fff'
            }}
        >
            <FavoriteStack.Screen name="Favorites" component={FavoriteScreen} />
            <FavoriteStack.Screen name="Home" component={HomeScreen} />
        </FavoriteStack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={
                { 
                    activeTintColor: Colors.accentColor,
                    style: {
                        backgroundColor: Colors.primaryColor
                    }
                }
            }
        >
            <Tabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="ios-restaurant" color={color} size={size} />
                    }
                }}
            />
            <Tabs.Screen
                name="Favorites"
                component={FavoriteStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {                            
                        return <Ionicons name="ios-star" color={color} size={size} />
                    }
                }}
            />
        </Tabs.Navigator>
    )
}


const FilterStack = createStackNavigator();

const FilterStackNavigator = () => {
    return (
        <FilterStack.Navigator
            screenOptions={({ navigation }) => ({
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
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                },
                headerTintColor: '#fff'
            })}
        >
            <FilterStack.Screen name="Filter" component={FilterScreen} />
        </FilterStack.Navigator>
    )
}

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: Colors.primaryColor,
                    itemStyle: {
                        marginVertical: 30,
                        fontWeight: 'bold',
                        fontStyle: 30
                    },
                }}
            >
                <Drawer.Screen
                    name="MealsFav"
                    component={TabNavigator}
                    options={{
                        drawerLabel: 'Favorite',
                    }}
                />
                <Drawer.Screen
                    name="Filters"
                    component={FilterStackNavigator}
                    options={{
                        drawerLabel: 'Filters'
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
  }

export default MyDrawer;
