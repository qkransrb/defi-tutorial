import React, { Component } from "react";
import dai from "../dai.png";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  render() {
    return (
      <div id="content" className="mt-3">
        <table className="table table-borderless text-muted text-center">
          <thead>
            <tr>
              <th scope="col">Staking Balance</th>
              <th scope="col">Reward Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {window.web3.utils.fromWei(this.props.stakingBalance, "ether")}{" "}
                mDAI
              </td>
              <td>
                {window.web3.utils.fromWei(
                  this.props.dappTokenBalance,
                  "ether"
                )}{" "}
                DAPP
              </td>
            </tr>
          </tbody>
        </table>

        <div className="card mb-4">
          <div className="card-body">
            <form
              className="mb-3"
              onSubmit={(e) => {
                e.preventDefault();
                let amount;
                amount = this.state.input.toString();
                amount = window.web3.utils.toWei(amount, "ether");
                this.props.stakeTokens(amount);
              }}
            >
              <div>
                <label className="float-left">
                  <b>Stake Tokens</b>
                </label>
                <span className="float-right text-muted">
                  Balance:{" "}
                  {window.web3.utils.fromWei(
                    this.props.daiTokenBalance,
                    "ether"
                  )}
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  value={this.state.input}
                  onChange={(e) => this.setState({ input: e.target.value })}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={dai} height="32" alt="dai" />
                    &nbsp;&nbsp;&nbsp; mDAI
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                STAKE
              </button>
              <button
                type="submit"
                className="btn btn-secondary btn-block btn-lg"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.unstakeTokens();
                }}
              >
                UN-STAKE
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
