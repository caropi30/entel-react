import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ItemListDetail from './ItemListDetail';

const items = [
    [
        {
            "equipmentid": 1, 
            "name": "iPhone 12", 
            "brand": "Apple", 
            "image": "../assets/img/apple/IPHONE_12.png", 
            "price": 0
        },
        {
            "equipmentid": 2, 
            "name": "V20", 
            "brand": "Vivo", 
            "image": "../assets/img/vivo/VIVO_V20.png", 
            "price": 0
        },
        {
            "equipmentid": 3, 
            "name": "K41s", 
            "brand": "LG", 
            "image": "../assets/img/lg/K41S.png", 
            "price": 0
        },
        {
            "equipmentid": 4, 
            "name": "Galaxy S20", 
            "brand": "Samsung", 
            "image": "../assets/img/samsung/GALAXY_S20.png", 
            "price": 0
        },
        {
            "equipmentid": 5, 
            "name": "Redmi Note 9", 
            "brand": "Xiaomi", 
            "image": "../assets/img/xiaomi/REDMI_NOTE_9.png", 
            "price": 0
        },
        {
            "equipmentid": 6, 
            "name": "Nokia 2.3", 
            "brand": "Nokia", 
            "image": "../assets/img/nokia/NOKIA_2-3.png", 
            "price": 0
        }
    ]
];

function ItemList() {
  const [item, setItem] = useState(null);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    })
      .then((response) => response)
      .then((data) => {
        setItem(data);
      })
      .catch((err) => console.log('Se ha generado un ' + setItem(err)));
  }, []);
  return (
    <ItemListDetail />
  );
}

export default ItemList;