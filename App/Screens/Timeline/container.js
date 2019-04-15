import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { TextTampan } from "../../Components/Text";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Timeline from 'react-native-timeline-flatlist'
import { compose } from 'recompose'
import { withAnimations } from "../../Lib/renderingHandler";

const data = [
  {
    id: '1',
    type: 'red',
    title: 'Turbin Rusak',
    message: 'Tiba - tiba mati, gejala muncul asap',
    date: '02-11-2018 07:45'
  },
  {
    id: '2',
    type: 'red',
    title: 'Blower Rusak',
    message: 'Tiba - tiba berdengung & mati, suhu panas',
    date: '02-11-2018 07:45'
  },
  {
    id: '3',
    type: 'yellow',
    title: 'Air Bocor',
    message: 'Tekanan air berkurang karena ada bocor',
    date: '02-11-2018 07:45'
  },
  {
    id: '4',
    type: 'green',
    title: 'Jalan Terkelupas',
    message: 'Aspal jalan terkelupas karena frekuensi lalulalang kendaraan berat',
    date: '02-11-2018 07:45'
  }
];

const wew = ({ item }) => {
  return (
    <TouchableOpacity style={{
      flexDirection: 'row',
      borderBottomWidth: 0.5,
      borderBottomColor: '#767573',
      paddingHorizontal: 10,
      paddingBottom: 20,
      paddingTop: 40,
      backgroundColor: item.type === 'unread' ? '#ffeef5' : '#fff' }}>
        <View style={{
          position: 'absolute',
          top: 0,
          right: 0 }}>
            <View style={{
              paddingHorizontal: 15,
              paddingVertical: 3,
              backgroundColor: item.type === 'red' ? '#f44141' : item.type === 'yellow' ? '#f4ee41' : '#41f479',
              borderBottomLeftRadius: 10 }}>
              <TextTampan style={{ fontSize: 12, fontWeight: 'bold', color: '#fff' }}>
                {item.date}
              </TextTampan>
            </View>
        </View>
        <View style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center' }}>
            {
              item.type === 'unread' &&
              <View style={{
                position: 'absolute',
                right: 18,
                bottom: 10,
                width: 10,
                height: 10,
                borderRadius: 10 / 2,
                backgroundColor: '#3ec1b8',
                zIndex: 1 }}/>
            }
          <View style={{
            height: 50,
            width: 50,
            borderRadius: 10,
            backgroundColor: '#fe5b65',
            justifyContent: 'center',
            alignItems: 'center' }}>
              <Icon name={item.type === 'read' ? 'drafts' : 'mail'} size={30} color={'#fff'}/>
          </View>
        </View>
        <View style={{ flex: 0.8, justifyContent: 'center' }}>
          <TextTampan>
            {item.title}
          </TextTampan>
          <TextTampan>
            {item.message}
          </TextTampan>
        </View>
    </TouchableOpacity>
  )
};

const wewAnime = withAnimations('zoomInDown')(wew);

const FirstRoute = () => {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={wewAnime}
        data={data}
        keyExtractor={(item) => item.id}/>
    </View>
  )
};

const SecondRoute = () => {
  return (
    <View style={styles.container}>

    </View>
  )
};

const ThirdRoute = () => {
  return (
    <View style={styles.container}>

    </View>
  )
};

class TimelineActivity extends React.Component {
  static navigationOptions = {
    title: 'HomeSolday',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'maintrack', title: 'Request' },
        { key: 'track1', title: 'Inprogress' },
        { key: 'track2', title: 'Done' }
      ]
    };
  }

  alertItemName = (item) => {
      alert(item.name)
   }

  _handleIndexChange = index => this.setState({ index });
  _renderHeader = props => <TabBar  {...props} />;
  _renderScene = SceneMap({
    maintrack: FirstRoute,
    track1: SecondRoute,
    track2: ThirdRoute
  });

  _renderLabel(scene) {
    const { getLabelText } = this;
    const label = getLabelText(scene);
    return (
      <Text style={styles.content}>
        {label}
      </Text>
    )
  }

  renderDetail() {
    console.log("timeline");
  }

  render(){
    return(
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={this._handleIndexChange}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={this._renderLabel}
            getLabelText={({ route: { title } }) => title}
            indicatorStyle={styles.indicator}
            tabStyle={styles.tabStyle}
            style={styles.tab}
          />
        )}
      />
    )
  }
}

const enhance = compose(

);

export const Container = enhance(props => {
  return (
    <TimelineActivity {...props}/>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexContainer: {
    flexDirection: 'row',
    marginLeft: 0
  },
  tab: {
    backgroundColor: 'white'
  },
  indicator: {
    backgroundColor: '#f5b969'
  },
  content: {
    padding: 10,
    color: '#f5b969',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
