import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import {
  NestableScrollContainer,
  NestableDraggableFlatList,
} from "react-native-draggable-flatlist";
// icons
import Ionicons from "@expo/vector-icons/Ionicons";
// components
import Star from "../../components/Star";

type Props = {
  materialIconName: keyof typeof Ionicons.glyphMap;
};

import { books, Book } from "../../services/data/bookdata";

// irl this would come from async storage, so that this data can be spun up quickly, and can exist even without an internet connection someone wanting to pick a book in a bookstore without internet etc.
const initialData1: Book[] = books.slice(0, 3);
const initialData2: Book[] = books.slice(3);

export default function Home() {
  const [starredBooks, setStarredBooks] = useState(initialData1);
  const [unstarredBooks, setUnstarredBooks] = useState(initialData2);

  const handleAddBook = () => {
    const newId = unstarredBooks.length + starredBooks.length + 1;

    const updatedUnstarred: Book[] = [
      ...unstarredBooks,
      {
        id: `${newId}`,
        title: "Anna Kerenina",
        author: "Leo Tolstoy",
        avgRating: 4.2,
        genres: ["fiction", "classics", "memoir"],
        img: "https://images.penguinrandomhouse.com/cover/9780679783305",
      },
    ];

    setUnstarredBooks(updatedUnstarred);
  };

  const renderItem = ({
    item,
    drag,
    isActive,
    getIndex,
  }: RenderItemParams<Book>) => {
    const initStar = !!starredBooks.find((element) => element.id === item.id);

    const itemIndex = getIndex() || 0;

    return (
      <ScaleDecorator>
        <TouchableOpacity
          activeOpacity={1}
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            { backgroundColor: isActive ? "dodgerblue" : "white" },
          ]}
        >
          <Star
            initStar={initStar}
            item={item}
            starredBooks={starredBooks}
            setStarredBooks={setStarredBooks}
            setUnstarredBooks={setUnstarredBooks}
            unstarredBooks={unstarredBooks}
            index={itemIndex}
          />
          <View style={styles.bookDetails}>
            <Text>
              <Text style={styles.label}>Title: </Text>
              {item.title}
            </Text>
            <Text>
              <Text style={styles.label}>Author: </Text> {item.author}
            </Text>
            <Text>
              <Text style={styles.label}>Avg Rating: </Text>
              {item.avgRating}
            </Text>
            <Text>
              <Text style={styles.label}>Genres: </Text>
              {item.genres
                ? item.genres.map((elem, index) => (
                    <Text key={index}>
                      {" "}
                      {`${elem}${
                        item.genres && item.genres.length - 1 !== index
                          ? ","
                          : " "
                      }`}
                    </Text>
                  ))
                : null}
            </Text>
          </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  const getBookCovers = () => {
    if (starredBooks.length < 3) {
      const bookCovers: Book[] = [...starredBooks];
      const unstarredAdditions: Book[] = unstarredBooks.slice(
        0,
        3 - bookCovers.length
      );
      return [...starredBooks, ...unstarredAdditions];
    }
    return starredBooks;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "http://i.stack.imgur.com/bZ8Lk.png" }}
        imageStyle={styles.shelf}
        style={styles.shelfContainer}
      >
        <Text style={styles.coverTitle}>To Read</Text>
        <View style={styles.coverContainer}>
          {getBookCovers().map((elem: Book, index) => (
            <View style={styles.bookPicContainer} key={index}>
              {elem.img ? (
                <Image
                  source={{
                    uri: elem.img,
                  }}
                  style={{ width: 80, height: 120 }}
                />
              ) : (
                <Text style={{ color: "white" }}>{elem.title}</Text>
              )}
            </View>
          ))}
        </View>
      </ImageBackground>
      <NestableScrollContainer style={styles.bookListContainer}>
        <NestableDraggableFlatList
          data={starredBooks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onDragEnd={({ data }) => setStarredBooks(data)}
        />
        <NestableDraggableFlatList
          data={unstarredBooks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onDragEnd={({ data }) => setUnstarredBooks(data)}
        />
      </NestableScrollContainer>
      <View style={styles.newBook}>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.rowItem,
            { justifyContent: "center", alignContent: "center" },
          ]}
          onPress={handleAddBook}
        >
          <Text style={styles.addText}>
            <Ionicons name="add-circle-outline" size={28} color="white" /> New
            Book
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  rowItem: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "auto",
    padding: 12,
  },
  text: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  addText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    alignSelf: "center",
  },
  coverContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 5,
    width: "80%",
    alignSelf: "center",
  },
  newBook: { backgroundColor: "black", width: "80%", opacity: 0.5 },
  bookListContainer: { width: "80%", height: "55%" },
  coverTitle: {
    color: "white",
    fontSize: 18,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  shelf: {
    resizeMode: "contain",
    top: undefined,
    bottom: -10,
    left: 10,
  },
  shelfContainer: {
    display: "flex",
    height: "20%",
    width: "95%",
    justifyContent: "space-between",
  },
  label: { fontWeight: "bold" },
  bookDetails: { alignContent: "flex-start", paddingLeft: 10 },
  bookPicContainer: { width: 80, height: 120, backgroundColor: "black" },
});
