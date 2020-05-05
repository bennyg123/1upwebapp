import React from 'react';
import Layout from '../components/layouts/Layout';
import Header from '../components/Header.js';
import { FhirResource, Resources } from 'fhir-react';

import { authenticate } from '../utils';
import dstu2Observation from '../tests/fixtures/dstu2/Observation.json';
import dstu2Encounter from '../tests/fixtures/dstu2/Encounter.json';
import dstu2Patient from '../tests/fixtures/dstu2/Patient.json';
//          <Resources.TestComponent data={["....haha"]}/>

const Test = ({ user }) => (
  <Layout>
    <Header user={user} />
    <div className="container">
      <h1 className="text-center">Patient</h1>
      <FhirResource
        jsonOpen={true}
        fhirResource={dstu2Patient.entry[0].resource}
        thorough={false}
      />

      <h1 className="text-center">Encounter</h1>
      {dstu2Encounter.entry.map(function(eachEncounter) {
        return (
          <Resources.Encounter
            jsonOpen={true}
            fhirResource={eachEncounter.resource}
            thorough={false}
          />
        );
      })}

      <h1 className="text-center">Observation</h1>
      {dstu2Observation.entry.map(function(eachObservation) {
        return (
          <FhirResource
            jsonOpen={true}
            fhirResource={eachObservation.resource}
            thorough={false}
          />
        );
      })}
    </div>
  </Layout>
);

Test.getInitialProps = async function({ res, req }) {
  // authenticates and returns the user on the server side
  const user = await authenticate(req, res);
  return { user };
};

export default Test;
