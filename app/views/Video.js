// AIzaSyDxbmHxwrR4lCdt2_0l_xI0qnpvNYhG028 Clave API Youtube 
import React from 'react';
import { Text, View, FlatList, Image, TouchableNativeFeedback } from 'react-native';

export class Video extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { listLoaded: false };
    }

    componentDidMount(){
        // htt*** Indica que se usara la API Youtube ***v3/s** busca**ch?part=** **&q=**Que Busca**&type=**Tipo de busqueda**&key=**API_KEY** 
        return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Milenio&type=video&key=AIzaSyDxbmHxwrR4lCdt2_0l_xI0qnpvNYhG028')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                listLoaded: true,
                videoList: Array.from(responseJson.items) 
            })
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                { this.state.listLoaded && (
                    <View style={{ paddingTop: 30 }}> 

                        <FlatList 
                            data={ this.state.videoList } // 
                            renderItem={({ item }) => 
                                <TubeItem 
                                    navigate= { navigate } 
                                    id={item.id.videoId}
                                    title={item.snippet.title}
                                    imageSrc={item.snippet.thumbnails.high.url}
                                />
                            }
                        />

                    </View>
                 )}

                { !this.state.listLoaded && (
                    <View style={{ paddingTop: 30 }}> 
                        <Text> L O A D I N G . . . </Text>
                    </View>
                )}
            </View>
        );
    }

}

export class TubeItem extends React.Component {
    onPress = () => {
        console.log(this.props.id);
        this.props.navigate('VideoDetailRt', { ytubeId: this.props.id });
    }

    render(){
        return (
            <TouchableNativeFeedback onPress={this.onPress}> 
                <View style={{ paddingTop: 20, alignItems: 'center' }}>
                    <Image 
                        style={{ width: '100%', height: 200 }}
                        source={{ uri: this.props.imageSrc }}
                    />
                    <Text>
                        { this.props.title }
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}