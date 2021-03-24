import React from 'react';

import { Row, Constellation, PageHeader } from '~/components';

const Planets: React.FC = () => {
  return (
    <Row>
      <Constellation />
      <PageHeader title='Planetas' />
    </Row>
  );
};

export default Planets;
