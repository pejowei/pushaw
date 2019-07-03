import React from 'react'
import { connect } from 'react-redux'

import { 
    Button, 
    Col,
    Icon,
    Row, 
} from 'antd'

import { decrementCounter, incrementCounter, } from '../_actions'

interface IProps {
    count: number;
    dispatch: any;
}

class Counter extends React.Component<IProps,{}> {
    public constructor(props:IProps) {
        super(props)
    }

    public increment = () => {this.props.dispatch(incrementCounter())}
    public decrement = () => {this.props.dispatch(decrementCounter())}

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
                        <h2>Counter (Boilerplate Redux)</h2>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <h3>{this.props.count}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} style={{paddingLeft:"5px", paddingRight:"5px"}}><Button onClick={this.increment} block={true} ><Icon type="caret-up" /></Button></Col>
                    <Col span={12} style={{paddingLeft:"5px", paddingRight:"5px"}}><Button onClick={this.decrement} block={true} ><Icon type="caret-down" /></Button></Col>
                </Row>
            </div>
        )
    } 
}

const mapStateToProps = (state:any) => ({count:state.count})
export default connect(mapStateToProps)(Counter)