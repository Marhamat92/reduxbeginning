import React from 'react'
import { SafeAreaView,Text,View,Button } from 'react-native'
import tw from 'twrnc';
import {createStore} from 'redux' //store icin
import {Provider,useSelector,useDispatch} from 'react-redux' //useSelector storda olanı secmek ıcın,
//useDispatch reducer da update yapmak ıcın gereken redux hook ları..




const initialState = {
  counter:0
} //verdigimiz ilk deger

function reducers(state, action){
  switch (action.type) {
    case 'UPDATE_COUNTER':
     return {...state,counter:state.counter +1}; 
    
    default:
    return state;
  }

}


export default()=> {



 return (
  <Provider store={createStore(reducers,initialState)}>
    <SafeAreaView style={tw`flex  h-full`} >
      <First />
      <Second />
   </SafeAreaView>
 </Provider>
  )
}

 

 

export function First() {
const counter = useSelector(selector=>selector.counter)
//bir button ekleyp reducers update cagırmak ıcın useDispatch hook nu kullancaz.
const dispatch = useDispatch();
//butonu tıklarken onPress de bir fonksiyon eklicez ve o fonksiyonda dispatch kullancaz ki gidip UPDATE_COUNTER ı bulup update yapsın. dispatch yap neyi? type ı UPDATE_COUNTER olanı
const handleUpdate = () => {
  dispatch({type:'UPDATE_COUNTER'})
}


  return (
    <View style={tw`flex-0.5 bg-red-300`}>
      <Text style={tw`text-yellow-900 text-2xl font-bold`}>First</Text>
      <Text style={tw`text-black font-bold text-xl`}>Count:{counter}</Text>
      <Button title="update counter" onPress={handleUpdate} />
    </View>
  )
}

export function Second() {
const counter = useSelector(selector=>selector.counter)



  return (
   <View style={tw` flex-0.5 bg-green-300`}>
      <Text style={tw`text-yellow-900 text-2xl font-bold`}>Second</Text>
      <Text style={tw`text-black font-bold text-xl`}>Count:{counter}</Text>
   </View>
  )
}


 