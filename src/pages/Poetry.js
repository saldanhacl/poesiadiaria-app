import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView, View, Text } from 'react-native';
import CardView from 'react-native-cardview'

const Poetry = (props) => {
  return (
    <ScrollView>
      <View style={styles.customView}>
        <Image
          style={styles.img}
          source={{ uri: props.data.poesia_img }}
        />
      </View>
      <CardView
        cardElevation={10}
        cornerRadius={10}
        style={styles.card}>
        <Text style={styles.cardTitle}>
          {props.data.titulo}
        </Text>
        <Text style={styles.cardContent}>
          {props.data.poesia}
        </Text>
      </CardView>
      <CardView
        cardElevation={10}
        cornerRadius={10}
        style={styles.cardAuthor}>
        <Text style={styles.cardAuthorTitle}>
          Sobre o Autor
            </Text>
        <Text style={styles.cardAuthorContent}>
          {props.data.autor}</Text>
      </CardView>
      <View style={styles.addPadding}>
        <View
          style={styles.roundedShadow}>
          <Image
            style={styles.roundedAvatar}
            source={{ uri: props.data.comentarista_img }}
          />
        </View>
        <CardView
          cardElevation={10}
          cornerRadius={10}
          style={styles.cardComment}>
          <Text style={styles.cardCommentTitle}>
            Comentários
              </Text>
          <Text style={styles.cardCommentContent}>
            {props.data.comentario}</Text>
        </CardView>
      </View>
    </ScrollView>
  );
}

export default Poetry;

const styles = StyleSheet.create({
  customView: {
    height: 250,
    alignSelf: 'stretch',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden'
  },
  img: {
    height: 250,
    alignSelf: 'stretch'
  },
  card: {
    height: 'auto',
    flex: 0,
    backgroundColor: '#FFF',
    width: 300,
    marginTop: -30,
    alignSelf: 'center'
  },
  cardTitle: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardContent: {
    alignSelf: 'center',
    margin: 40,
    fontSize: 14,
    color: '#808080'
  },
  cardAuthor: {
    height: 'auto',
    flex: 0,
    backgroundColor: '#000',
    width: 300,
    marginTop: 20,
    alignSelf: 'center'
  },
  cardAuthorTitle: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
  cardAuthorContent: {
    alignSelf: 'center',
    margin: 40,
    fontSize: 14,
    color: '#FFF'
  },
  cardComment: {
    height: 'auto',
    flex: 0,
    backgroundColor: '#2E0E26',
    width: 300,
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center'
  },
  cardCommentTitle: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
  cardCommentContent: {
    alignSelf: 'center',
    margin: 40,
    fontSize: 14,
    color: '#FFF'
  },
  roundedShadow: {
    backgroundColor: '#FFF',
    height: 80,
    width: 80,
    top: 35,
    left: 20,
    zIndex: 100,
    elevation: 100,
    position: 'absolute',
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    overflow: 'visible',
    elevation: 11,
  },
  roundedAvatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  addPadding: {
    paddingTop: 20,
  }
});

