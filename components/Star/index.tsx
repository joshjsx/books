import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// icons
import Ionicons from "@expo/vector-icons/Ionicons";
// types
import { Book } from "../../services/data/bookdata";

type Props = {
  initStar: boolean;
  item: Book;
  starredBooks: Book[];
  unstarredBooks: Book[];
  setStarredBooks: (starredBooks: Book[]) => void;
  setUnstarredBooks: (unStarredBooks: Book[]) => void;
  index: number;
};

export default function Star(props: Props) {
  const {
    item,
    setStarredBooks,
    setUnstarredBooks,
    unstarredBooks,
    starredBooks,
    initStar,
    index,
  } = props;

  const [isStarred, setIsStarred] = useState(initStar);

  const handlePress = () => {
    if (isStarred) {
      // remove from starred
      const updatedStarred = [...starredBooks];
      updatedStarred.splice(index, 1);

      setStarredBooks(updatedStarred);
      // add to unstarred
      setUnstarredBooks([...unstarredBooks, item]);
      // change state to unstarred.
      setIsStarred(false);
    } else if(!isStarred && starredBooks.length < 3) {
      // remove from unstarred
      const updatedUnstarred = [...unstarredBooks];
      updatedUnstarred.splice(index, 1);

      setUnstarredBooks(updatedUnstarred);
      // add to starred
      setStarredBooks([...starredBooks, item]);
      // change state to starred
      setIsStarred(true);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>
        <Ionicons
          name={isStarred ? "star" : "star-outline"}
          size={32}
          color={isStarred ? "gold" : "black"}
        />
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
