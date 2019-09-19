import React, { Component } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import QRCode from "qrcode.react";
import { Form, Icon, Input, Button, Select, Switch } from "antd";

const { Option } = Select;

class WifiQR extends Component {
  state = {
    data: { ssid: "", password: "", encryption: "", hidden: "false" },
    wifiString: "",
  };

  generateWifiQR = event => {
    event.preventDefault();
    const { ssid, password, encryption, hidden } = this.state;
    const wifiString = `WIFI:S:${ssid};T:${encryption};P:${password};H:${hidden};;`;
    this.setState({ wifiString }, () => console.log(this.state));
  };

  handleInputChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data }, () => console.log(this.state));
  };

  handleToggle = e => {
    let { hidden } = this.state;
    hidden = e.toString();
    this.setState({ hidden }, () => console.log(this.state));
  };

  render() {
    const { wifiString } = this.state;
    return (
      <React.Fragment>
        <SEO />
        <Layout>
          <Form
            style={{ backgroundColor: "white", padding: "20px" }}
            onSubmit={this.generateWifiQR}
            className="barcode-form"
          >
            <Form.Item>
              <Input
                name="ssid"
                prefix={
                  <Icon type="wifi" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="SSID (WIFI Name)"
                onChange={this.handleInputChange}
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                name="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Password (Omit if none)"
                onChange={this.handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Encryption Type">
              <Select
                name="encryption"
                defaultValue="WPA"
                onChange={this.handleInputChange}
              >
                <Option value="WPA">WPA/WPA2</Option>
                <Option value="WEP">WEP</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Network is hidden">
              <Switch
                checkedChildren="YES"
                unCheckedChildren="NO"
                onClick={this.handleToggle}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Generate
              </Button>
            </Form.Item>
          </Form>
          {/* <QRCode value={wifiString} />; */}
        </Layout>
      </React.Fragment>
    );
  }
}

export default WifiQR;
