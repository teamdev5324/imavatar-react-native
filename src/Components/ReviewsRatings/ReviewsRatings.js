import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './reviewsratingsstyle';
import OrderWise from '../OrderWise/OrderWise';
import CategoryWise from '../CategoryWise/CategoryWise';

const ReviewsRatings = () => {

    const [rrbtncolor, setRRBtnColor] = useState("Order Wise");

    const renderReviewsRatingsComp = (type) => {

        if (type === 'Order Wise') {
            return <OrderWise/>;
        }

        if (type === 'Category Wise') {
            return <CategoryWise />;
        }

    }; 

  return (
    <View>
          <View style={styles.returningbtnbox}>
              <View style={styles.returningbtnfixbox}>
                  <TouchableOpacity onPress={() => setRRBtnColor("Order Wise")} style={styles.returningtodaybtn}>
                      <Text style={rrbtncolor === "Order Wise" && styles.rbtntextcolor}>Order Wise</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setRRBtnColor("Category Wise")} style={[styles.returningtodaybtn, { borderLeftWidth: 1, borderLeftColor: "#D9D9D9" }]}>
                      <Text style={rrbtncolor === "Category Wise" && styles.rbtntextcolor}>Category Wise</Text>
                  </TouchableOpacity>
              </View>
          </View>
          
          {renderReviewsRatingsComp(rrbtncolor)}
    </View>
  )
}

export default ReviewsRatings