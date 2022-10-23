import React from "react";
import { View } from "react-native";
import { CardSocialProps } from "../../interfaces/Card.interface";
import styles from "./styles";

export default function CardSocial({ children }: CardSocialProps) {
  return <View style={styles.cardSocial}>{children}</View>;
}