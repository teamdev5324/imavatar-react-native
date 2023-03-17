import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './ordersstyle';
import ScrollElement from '../../../Components/ScrollElement/ScrollElement';
import OrderComp from '../../../Components/OrderComp/OrderComp';
import InTransit from '../../../Components/InTransit/InTransit';
import Delivered from '../../../Components/Delivered/Delivered';
import Cancelled from '../../../Components/Cancelled/Cancelled';
import ReadytoShip from '../../../Components/ReadytoShip/ReadytoShip';
import UpdateModel from '../../../Components/UpdateModel/UpdateModel';

const Orders = () => {
  const [scrollelement, setScrollElement] = useState('New Order');

  const [updateshow, setUpdateShow] = useState(false);

  const renderComp = (type, show, setShow) => {
    if (type === 'New Order') {
      return <OrderComp show={show} setShow={setShow} />;
    }

    if (type === 'Ready to Ship') {
      return <ReadytoShip />;
    }

    if (type === 'In transit') {
      return <InTransit />;
    }

    if (type === 'Delivered') {
      return <Delivered />;
    }

    if (type === 'Cancelled') {
      return <Cancelled />;
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.ordercontainer}>
        <View style={styles.dashboardheader}>
          <View style={styles.dashboardlogohead}>
            <Image source={require('../../assets/Icons/menu-icon.png')} />

            <View style={styles.dashboardlogo}>
              <Image source={require('../../assets/Icons/logo-white.png')} />
              <Text style={styles.dashboardlogotext}>imavatar</Text>
            </View>
          </View>

          <View style={styles.dashboardheadertextcontainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ScrollElement
                title="New Order"
                state={scrollelement}
                onPress={() => setScrollElement('New Order')}
              />

              <ScrollElement
                title="Ready to Ship"
                state={scrollelement}
                onPress={() => setScrollElement('Ready to Ship')}
              />

              <ScrollElement
                title="In transit"
                state={scrollelement}
                onPress={() => setScrollElement('In transit')}
              />

              <ScrollElement
                title="Delivered"
                state={scrollelement}
                onPress={() => setScrollElement('Delivered')}
              />

              <ScrollElement
                last="last"
                title="Cancelled"
                state={scrollelement}
                onPress={() => setScrollElement('Cancelled')}
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.ordercomcontainer}>
          {renderComp(scrollelement, updateshow, setUpdateShow)}
        </View>
      </SafeAreaView>

      {updateshow && (
        <UpdateModel showmodel={updateshow} setShowModel={setUpdateShow} />
      )}
    </ScrollView>
  );
};

export default Orders;
