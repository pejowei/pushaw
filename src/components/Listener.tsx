import React from 'react'
import { connect } from 'react-redux'

import { subscribe, unsubscribe } from 'pusher-redux'

import { NEW_MESSAGE } from '../_actions/constants'

import { 
    Col,
    List,
    Row, 
} from 'antd'

interface IProps {
    connected: boolean;
    dispatch: any;
    messages: [];
}

class Listener extends React.Component<IProps,{}> {

    public constructor(props:IProps) {
        super(props)

    }

    public subscribe = () => {
        const additionalParams = () => {}
        subscribe('pushaw-messages', 'new-message', NEW_MESSAGE, additionalParams);
    }

    public unsubscribe = () => {
        unsubscribe('pushaw-messages', 'new-message', NEW_MESSAGE);
    }

    public componentWillMount() {
        this.subscribe()
    }

    public componentWillUnmount() {
        this.unsubscribe()
    }


    public render() {
        return(
            <div style={{
                border:"1px solid lightgray",
                borderRadius:"8px",
                margin:"5px",
                padding: "10px",
                }}>
                <Row>
                    <Col span={24}>
                        <h2>Message List (Boilerplate Pusher + Redux)</h2>
                        <p>Add your API KEY to index.tsx, then push messages here from the Pusher dashboard.</p>
                        <p>Use channel "pushaw-messages" and event "new-message".</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                    <List
                        size="small"
                        header={<div>Messages (Connection Status: {this.props.connected? "true" : "false"})</div>}
                        footer={<div>End Messages</div>}
                        bordered
                        dataSource={this.props.messages}
                        renderItem={(message:any) => <List.Item>CHANNEL: {message.channel} EVENT: {message.event} DATA:{JSON.stringify(message.data)} </List.Item>}
                    />
                    </Col>
                </Row>
            </div>
        )
    } 
}

const mapStateToProps = (state:any) => ({connected: state.connected, messages:state.messages})
export default connect(mapStateToProps)(Listener)