import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './paymentsstyle';
import AmountBox from '../../../Components/AmountBox/AmountBox';
import SuccessfulTransactionComp from '../../../Components/SuccessfulTransactionComp/SuccessfulTransactionComp';
import OutstandingTransactionComp from '../../../Components/OutstandingTransactionComp/OutstandingTransactionComp';
import RefundedTransactionComp from '../../../Components/RefundedTransactionComp/RefundedTransactionComp';
import SucessfullTransPopup from '../../../Components/SucessfullTransPopup/SucessfullTransPopup';
import OutstandingTransPopup from '../../../Components/OutstandingTransPopup/OutstandingTransPopup';
import RefundedTransPopup from '../../../Components/RefundedTransPopup/RefundedTransPopup';

const Payments = () => {
  const [btnclick, setBtnClick] = useState('Successful transactions');

  const [sucessfulltranspopup, setSucessfullTransPopup] = useState(false);

  const [outstandingtranspopup, setOutstandingTransPopup] = useState(false);

  const [refundedtranspopup, setRefundedTransPopup] = useState(false);

  const renderTransactionComp = (
    type,
    sucessshow,
    setSucessShow,
    outstandingshow,
    setOutstandingShow,
    refundedshow,
    setRefundedShow,
  ) => {
    if (type === 'Successful transactions') {
      return (
        <SuccessfulTransactionComp show={sucessshow} setShow={setSucessShow} />
      );
    }

    if (type === 'Outstanding transactions') {
      return (
        <OutstandingTransactionComp
          show={outstandingshow}
          setShow={setOutstandingShow}
        />
      );
    }

    if (type === 'Refunded transactions') {
      return (
        <RefundedTransactionComp
          show={refundedshow}
          setShow={setRefundedShow}
        />
      );
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.paymentcontainer}>
        <View style={styles.paymentheader}>
          <View style={styles.paymentlogohead}>
            <Image source={require('../../assets/Icons/leftarrow.png')} />

            <View style={styles.paymentlogo}>
              <Image source={require('../../assets/Icons/logo-white.png')} />
              <Text style={styles.paymentlogotext}>imavatar</Text>
            </View>
          </View>

          <View style={styles.paymentheadertexthead}>
            <Text style={styles.paymentheadertext}>{btnclick}</Text>
            <View style={styles.paymentheadertextline}></View>
          </View>
        </View>

        <View style={styles.paymentbottomcontainer}>
          <View style={styles.paymentbottomamtcontain}>
            <AmountBox label="Total Earned Amount" amount="Rs. 84,574.00" />
            <AmountBox label="Outstanding Amount" amount="Rs. 84,574.00" />
            <AmountBox label="Amount Refunded" amount="Rs. 84,574.00" />
          </View>

          <View style={styles.transactionsbtnbox}>
            <View style={styles.transactionsbtnfixbox}>
              <TouchableOpacity
                onPress={() => setBtnClick('Successful transactions')}
                style={styles.transactionsbtn}>
                <Text
                  style={
                    btnclick === 'Successful transactions' &&
                    styles.tbtntextcolor
                  }>
                  Successful{'\n'}transactions
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setBtnClick('Outstanding transactions')}
                style={[
                  styles.transactionsbtn,
                  {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
                ]}>
                <Text
                  style={
                    btnclick === 'Outstanding transactions' &&
                    styles.tbtntextcolor
                  }>
                  Outstanding{'\n'}transactions
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setBtnClick('Refunded transactions')}
                style={[
                  styles.transactionsbtn,
                  {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
                ]}>
                <Text
                  style={
                    btnclick === 'Refunded transactions' && styles.tbtntextcolor
                  }>
                  Refunded{'\n'}transactions
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {renderTransactionComp(
            btnclick,
            sucessfulltranspopup,
            setSucessfullTransPopup,
            outstandingtranspopup,
            setOutstandingTransPopup,
            refundedtranspopup,
            setRefundedTransPopup,
          )}
        </View>
      </SafeAreaView>

      {sucessfulltranspopup && (
        <SucessfullTransPopup
          onPress={() => setSucessfullTransPopup(!sucessfulltranspopup)}
        />
      )}

      {outstandingtranspopup && (
        <OutstandingTransPopup
          onPress={() => setOutstandingTransPopup(!outstandingtranspopup)}
        />
      )}

      {refundedtranspopup && (
        <RefundedTransPopup
          onPress={() => setRefundedTransPopup(!refundedtranspopup)}
        />
      )}
    </ScrollView>
  );
};

export default Payments;
