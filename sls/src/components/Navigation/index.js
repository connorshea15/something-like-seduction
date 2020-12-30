import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

function Navigation() {

    const [state, setState] = useState({ visible: false, placement: 'right' });

    const showDrawer = () => {
      setState({
        visible: true,
      });
    };
  
    const onClose = () => {
      setState({
        visible: false,
      });
    };
  
    const onChange = e => {
      setState({
        placement: e.target.value,
      });
    };

    return (
        <div>
            <Button onClick={showDrawer}>
                <MenuOutlined />
            </Button>
            <Drawer
                title="Navigation Station"
                placement={state.placement}
                closable={false}
                onClose={onClose}
                visible={state.visible}
                key={state.placement}
            >
                <Link onClick={onClose} to="/about">About</Link>
                <Link onClick={onClose} to="/music">Music</Link>
                <Link onClick={onClose} to="/luna">Luna</Link>
            </ Drawer>
      </div>
    );
}

export default Navigation;