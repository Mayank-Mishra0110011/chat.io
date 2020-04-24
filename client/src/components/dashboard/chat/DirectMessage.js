import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setDMView } from "../../../actions/viewAction";

import Friends from "../Friend/Friends";
import Channels from "../channel/Channels";

class DirectMessage extends Component {
  render() {
    const { view, selected } = this.props.currentView;
    return (
      <div className="dm scrollable">
        {view === "server" ? (
          <Channels
            selectedServer={selected}
            setFunctionReference={this.props.setFunctionReference}
            removeFunctionReference={this.props.removeFunctionReference}
          />
        ) : (
          <div>
            <Friends />
            <div className="friends" onClick={this.props.setDMView}>
              <div className="friendsbox d-flex justify-content-center">
                <div
                  style={{ width: "25%", height: "100%" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div className="friendPic">
                    <img
                      src="./assets/image/samplepic1.jpg"
                      alt="sp1"
                      className="img-fluid friendProfilePic"
                    />
                  </div>
                </div>
                <div
                  style={{ width: "70%", height: "100%" }}
                  className="d-flex align-items-center pl-2"
                >
                  <p className="friendstext">Username 1</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

DirectMessage.propTypes = {
  currentView: PropTypes.object.isRequired,
  setDMView: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentView: state.currentView,
});

export default connect(mapStateToProps, { setDMView })(DirectMessage);
