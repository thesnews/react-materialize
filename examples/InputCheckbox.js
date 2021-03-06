import React from 'react';
import Input from '../src/Input';
import Row from '../src/Row';

export default
<Row>
    <Input name='group1' type='checkbox' value='red' label='Red' />
    <Input name='group1' type='checkbox' value='yellow' label='Yellow' checked='checked' />
    <Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' checked='checked' />
    <Input name='group1' type='checkbox' value='brown' label='Brown' disabled='disabled' />
</Row>;
