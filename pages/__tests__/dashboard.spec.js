import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../dashboard';
import { MOCK_USER } from '../../components/__tests__/Header.spec';
import FAKE_DASHBOARD_DATA from './fakeDashboardData';

describe('dashboard page', () => {
  it('test the dashboard page is rendered correctly with no data', () => {
    render(<Dashboard user={MOCK_USER} />);

    expect(window.localStorage.getItem('email')).toEqual(MOCK_USER.email);
    expect(window.localStorage.getItem('oneup_access_token')).toEqual(
      MOCK_USER.oneup_access_token,
    );

    expect(
      screen.queryByText('Looks like you have no patient data'),
    ).toBeDefined();
  });

  it('test the dashboard page is rendered correctly with fhir jason data', () => {
    render(<Dashboard user={MOCK_USER} dashboard={FAKE_DASHBOARD_DATA} />);

    expect(window.localStorage.getItem('email')).toEqual(MOCK_USER.email);
    expect(window.localStorage.getItem('oneup_access_token')).toEqual(
      MOCK_USER.oneup_access_token,
    );

    expect(
      screen.queryByText('Looks like you have no patient data'),
    ).toBeNull();

    expect(screen.queryByText('Your medical dashboard')).toBeDefined();
    expect(screen.queryByText('Patient')).toBeDefined();
    expect(screen.queryByText('Jason Argonaut')).toBeDefined();

    expect(screen.queryByText('AllergyIntolerance')).toBeDefined();
    expect(screen.queryByText('MedicationOrder')).toBeDefined();
    expect(screen.queryByText('Condition')).toBeDefined();
    expect(screen.queryByText('Observation')).toBeDefined();

    expect(
      screen.queryAllByText(
        FAKE_DASHBOARD_DATA.resources.AllergyIntolerance.entry[0].resource
          .substance.text,
      ),
    ).toBeDefined();
  });
});
