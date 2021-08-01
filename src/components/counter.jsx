import React, { Component } from "react";

class Counter extends Component {
    render() {
        return (
            <div>
                <span className={this.BadgesChange()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>

                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    BadgesChange() {
        let cls = "badge m-2 badge-";
        cls += this.props.counter.value === 0 ? "warning" : "primary";
        return cls;
    }

    formatCount() {
        const { value } = this.props.counter;

        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
