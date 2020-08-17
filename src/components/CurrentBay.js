import React from 'react';
import {
  Form,
  Radio
} from 'antd';

function CurrentBay() {
  //const [componentSize, setComponentSize] = useState('default');
  
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item title="Bay Set To POG?" name="size">
          <Radio.Group>
            <Radio value="small">Small</Radio>
            <Radio value="default">Default</Radio>
            <Radio value="large">Large</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  );
        }

  export default CurrentBay