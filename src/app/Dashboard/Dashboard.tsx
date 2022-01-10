import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import './Dashboard.css'

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <div className="top-area">
      <div className="top-area-content area">
        <p className="top-title">Mileage Report Tool</p>
        <p className="top-content">Simplify your life. Save time. Do the 
          right things. Send the report each month!</p>
      </div>
    </div>
  </PageSection>
)

export { Dashboard };
