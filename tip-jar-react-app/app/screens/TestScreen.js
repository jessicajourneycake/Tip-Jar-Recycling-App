import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import NodeRed from '../components/NodeRed';

function TestScreen(props) {
    return (
        <FlatList >
        <NodeRed data={this.state.echo}/>
        </FlatList>
    );
}

export default TestScreen;