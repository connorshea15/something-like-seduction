import React from 'react';
import { Drawer, Button, MenuOutlined } from 'antd';

function App() {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  return (
    <div className="App">
      <Button type="primary" onClick={this.showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
          title="Basic Drawer"
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
      >
        <p>Music</p>
        <p>Other Stuff</p>
        <p>More other stuff</p>
      </ Drawer>
    </div>
  );
}

export default App;


