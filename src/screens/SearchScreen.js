import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurants();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$' || '$$$$'
        return restaurants.filter(restaurants => {
            return restaurants.price === price;
        })
    };
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title='Cost Effective'
                />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title='Bit Pricier'
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title='Very Nice'
                />
                <ResultsList
                    results={filterResultsByPrice('$$$$')}
                    title='Big Spender'
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;