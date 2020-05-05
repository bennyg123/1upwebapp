import React from 'react';

export const JsonFormatter = ({ fhirResource }) => (
  <code>
    <pre>{JSON.stringify(fhirResource, null, 2)}</pre>
  </code>
);

export const Patient = () => (
  <div>
    <h1>lol</h1>
  </div>
);

const FhirResourceJson = ({ fhirResource }) => {
  let resourceType = fhirResource.resource.resourceType;
  let componentType =
    resourceType === 'Patient' ? (
      <Patient patientProps={resourceType} />
    ) : (
      <JsonFormatter fhirResource={fhirResource} />
    );

  return (
    <div className="bg-light card mb-6">
      <div className="card-header">{resourceType}</div>
      <div className="card-body">{componentType}</div>
    </div>
  );
};

export default FhirResourceJson;
