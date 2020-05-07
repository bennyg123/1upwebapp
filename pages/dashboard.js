import React, { useEffect } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import { authenticate } from '../utils';
import Header from '../components/Header.js';
import Layout from '../components/layouts/Layout';
import { FhirResource } from 'fhir-react';

const RESOURCE_TYPES = [
  'Patient',
  'Practitioner',
  'AllergyIntolerance',
  'MedicationOrder',
  'MedicationStatement',
  'Condition',
  'Observation',
  'FamilyMemberHistory',
  'DiagnosticReport',
  'Immunization',
  'Encounter',
  'CarePlan',
  'Goal',
  'Procedure',
  'Device',
  'DocumentReference',
  'Binary',
];

const Dashboard = ({ dashboard, user }) => {
  console.log(dashboard);

  useEffect(() => {
    if (user) {
      // If the user exists sets the user email and access token in localstorage
      try {
        window.localStorage.setItem('email', user.email);
        window.localStorage.setItem(
          'oneup_access_token',
          user.oneup_access_token,
        );
      } catch (err) {
        console.error('error setting email and access token');
      }
    } else {
      window.localStorage.remove('email');
      window.localStorage.remove('oneup_access_token');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Header user={user} />
      <div className="container">
        <br />
        <h1>Your medical dashboard </h1>
        <br />
        <div>
          {!dashboard || !dashboard.resources ||
            !dashboard.resources.Patient ||
            (dashboard.resources.Patient.entry.length === 0 && (
              <div>
                <br />
                <br />
                <br />
                Looks like you have no patient data
                <br />
                <Link>
                  <a href="/">Connect some health systems</a>
                </Link>
              </div>
            ))}
        </div>
        {dashboard && dashboard.resources && (
          <div className="dashboard-resource-types-container">
            {RESOURCE_TYPES.map(resourceType => (
              <div>
                {!!dashboard.resources[resourceType] &&
                  dashboard.resources[resourceType].entry.length > 0 && (
                    <h1>{resourceType}</h1>
                  )}
                {!!dashboard.resources[resourceType] &&
                  dashboard.resources[
                    resourceType
                  ].entry.map(resourceContainer => (
                    <FhirResource fhirResource={resourceContainer.resource} />
                  ))}
                <br />
              </div>
            ))}
          </div>
        )}
      </div>
      <div>{JSON.stringify(dashboard)}</div>
      <style jsx>{`
        .dashboard-resource-types-container {
          text-align: left;
        }
      `}</style>
    </Layout>
  );
};

Dashboard.getInitialProps = async function({ req, res }) {
  const user = await authenticate(req, res);

  // use the access token if it exists in the request
  let options = !!req
    ? {
        headers: {
          Authorization: 'Bearer ' + req.session.oneup_access_token,
        },
      }
    : {
        credentials: 'include',
      };

  let dashboard = await fetch(
    `http://localhost:3000/api/dashboard`,
    options,
  ).then(r => r.json());

  return { dashboard, user };
};

export default Dashboard;
