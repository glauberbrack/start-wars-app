import React from 'react';

import { Column } from '../Column';

const RowComponent: React.FC = ({ ...rest }) => <Column flexDirection='row' {...rest} />;

export default RowComponent;
