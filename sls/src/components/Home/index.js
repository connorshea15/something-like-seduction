import React, { useState } from 'react';
import { Spin } from 'antd';

function Home() {

    const [state, setState] = useState({ loading: true });

    const hideSpinner = () => {
        setState({ loading: false });
    };

  return (
    <div className="p-5">
        <Spin spinning={state.loading} size="large">
            <div className="embed-responsive embed-responsive-16by9 mx-auto">
                <iframe 
                    className="embed-responsive-item text-center"
                    src="https://www.youtube.com/embed/C3RnqftoPNo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen="true"
                    onLoad={hideSpinner}
                >
                </iframe>
            </div>
        </Spin>
    </div>
  );
};

export default Home;