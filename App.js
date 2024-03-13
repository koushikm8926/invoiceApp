//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
// create a component
const MyComponent = () => {
  return (
    <ScrollView style={{backgroundColor:'white', flex:1,}} showsVerticalScrollIndicator={false}>
    <View style={{borderColor:'#8b41a8',borderWidth:0.2,marginTop:10,}}/>
      <View style={{flexDirection:'row',margin:10,}}>     
        <View style={{flex:1, justifyContent:'center'}}>
                <View style={{flexDirection:'row',}}>
                    <Image source={require('./Images/Flower.png')} style={{height:80,width:80,}} />
                        <View style={{flexDirection:'column',justifyContent:'center'}}>
                            <Text style={{color:'#8b41a8',fontSize:20,textAlign:'left'}}>Purple daisy</Text>
                            <Text style={{textAlign:'left'}}>Photography</Text>
                        </View>
                </View>
        </View>
       
        <View style={{flex:1}}>
          <Text style={{fontSize: 30, fontWeight: '400',textAlign:'right',color:'black'}}>INVOICE</Text>
          <Text style={{textAlign:'right'}}>Robinson Wedding</Text>
          <Text style={{textAlign:'right',color:'black',fontWeight:'600'}}>Purple daisy Photography</Text>
          <Text style={{textAlign:'right'}}> 25 Carlaw Avenew, unit 601</Text>
          <View style={{height:10,}}/>
          <Text style={{textAlign:'right'}}>514-412-8942</Text>
          <Text style={{textAlign:'right'}}>www.purpledaisyphotos.com</Text>
        </View>

      </View>

      <View style={{borderColor:'#8b41a8',borderWidth:0.2,marginTop:10,}}/>
      <View style={{flexDirection:'row',marginTop:10,}}>               
            <View style={{flex:1,marginLeft:10,}}>
                <Text style={{fontSize:17,}}>BIll TO</Text>
                <View style={{height:5,}}/>
                <Text style={{fontWeight:'bold', color:'black'}}>Steve Wave</Text>
                <Text>533 Donald Street West</Text>
                <Text>Ottawa,Ontario,K1K,1L5</Text>
                <View style={{height:10,}}/>
                <Text>stevewave@gmail.com</Text>
                <Text>5555-555-1234</Text>
            </View>
            <View style={{flex:1,}}>
                <Text>Invoice Number :</Text>
                <Text>P.O/S.O Mumber :</Text>
                <Text>Invoice Date :</Text>
                <Text>Payment Due :</Text>
                <View style={{backgroundColor:'lightgrey',borderRadius:3,height:35,}}>
                    <Text style={{marginTop:8,}}>Ammount Due : <Text style={{color:'black'}}>$2345</Text> </Text>
                </View>
            </View>
      </View>
<View style={{height:20,}}/>
    <View style={{backgroundColor:'#8b41a8', padding:10,flexDirection:'row'}}>
       <View style={{flex:3}}>
        <Text style={{color:'white'}}>Photo Services</Text>
       </View>
       <View style={{flex:1}} >
        <Text style={{color:'white'}}>Quentity</Text>
       </View>
       <View style={{flex:1,textAlign:'center'}}>
        <Text style={{color:'white',textAlign:'center'}}>Rate</Text>
       </View>
       <View style={{flex:1}}>
       <Text style={{color:'white',textAlign:'center'}}>Amount</Text>
       </View>
    </View>



    <View style={{ padding:10,flexDirection:'row'}}>
       <View style={{flex:3, flexDirection:'column'}}>
        <Text style={{color:'black',fontWeight:'400'}}>Location Scouting</Text>
        <Text>Research and travel to scout photo locations </Text>
       </View>
       <View style={{flex:1}} >
        <Text style={{color:'black',textAlign:'center'}}>1</Text>
       </View>
       <View style={{flex:1,}}>
        <Text style={{color:'black',textAlign:'center'}}>$200</Text>
       </View>
       <View style={{flex:1}}>
       <Text style={{color:'black',textAlign:'center'}}>$200</Text>
       </View>
    </View>

    <View style={{ padding:10,flexDirection:'row'}}>
       <View style={{flex:3, flexDirection:'column'}}>
        <Text style={{color:'black',fontWeight:'400'}}>Photography and editing</Text>
        <Text>Full Day Photo session and photo editing </Text>
       </View>
       <View style={{flex:1}} >
        <Text style={{color:'black',textAlign:'center'}}>10</Text>
       </View>
       <View style={{flex:1,}}>
        <Text style={{color:'black',textAlign:'center'}}>$150</Text>
       </View>
       <View style={{flex:1}}>
       <Text style={{color:'black',textAlign:'center'}}>$1500</Text>
       </View>
    </View>

    <View style={{borderColor:'#8b41a8',borderWidth:0.2,marginTop:10,}}/>

    <View style={{flexDirection:'row',marginTop:10,  }}>
     
      <View style={{flex:1,padding:10, alignItems:'center'}}>
        <Text style={{textAlign:'center', color:'black'}}>Scan This QR to Pay Online</Text>
        <View  style={{marginTop:10,}}>
          <QRCode value="http://awesome.link.qr" />
        </View>
      </View>

      <View style={{flex:1,}}>
        <Text style={{textAlign:'right',marginRight:10,fontWeight:'500',color:'black'}}>Subtotal: $2350.00</Text>
        <Text style={{textAlign:'right',marginRight:10,}}>HST 13% (3092834)</Text>
        <Text style={{textAlign:'right',marginRight:10,fontWeight:'500',color:'black'}}>Total: $2632</Text>
        <View style={{borderColor:'lightgrey',borderWidth:2,marginTop:5,borderRadius:10,marginRight:10,}}/>
        <Text style={{textAlign:'right',marginRight:10,color:'black',fontWeight:'500'}}>Amount Due(USD): $2632</Text>
      </View>

    </View>

    <View style={{marginLeft:10,}}>
      <Text style={{color:'black',fontWeight:'400'}}>Notes</Text>
      <Text>We had a Geat Time Photographying your wedding! The weather held up and the outdoor shots were superb . We appriciate your business and wish you a wonderful life together.</Text>
    </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyComponent;
