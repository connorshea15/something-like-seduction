import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

function Navigation() {

    /*const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props; */

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
            <Button type="primary" onClick={showDrawer}>
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
                <p>Music</p>
                <p>Other Stuff</p>
                <p>More other stuff</p>
            </ Drawer>
      </div>
    );
}

export default Navigation;