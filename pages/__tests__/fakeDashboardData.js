const FAKE_DASHBOARD_DATA = {
    "token": "",
    "resources": {
        "MedicationOrder": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 0,
            "entry": [
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/f8fedcd9e6e5125f98837ddbb0e3c58ee5d4a21028f2f6c8",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "dosageInstruction": [
                            {
                                "asNeededBoolean": false,
                                "text": "Take 1 tablet (2 mg total) by mouth 2 (two) times a day before meals.",
                                "route": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.698288.330",
                                            "code": "15",
                                            "display": "Oral"
                                        }
                                    ],
                                    "text": "Oral"
                                },
                                "method": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.798268.8600",
                                            "code": "11",
                                            "display": "Take"
                                        }
                                    ],
                                    "text": "Take"
                                },
                                "timing": {
                                    "repeat": {
                                        "periodUnits": "h",
                                        "period": 12,
                                        "boundsPeriod": {
                                            "start": "2015-11-07T00:00:00Z",
                                            "end": "2016-11-06T00:00:00Z"
                                        },
                                        "frequency": 1
                                    }
                                },
                                "doseQuantity": {
                                    "value": 1,
                                    "unit": "tablet"
                                }
                            }
                        ],
                        "identifier": [
                            {
                                "value": "971104",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268"
                            },
                            {
                                "value": "971104:2886137114",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.798268.801"
                            },
                            {
                                "value": "Tw263wu6vdgnipYaCIKrh8wB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:08.575Z",
                            "versionId": "9000000000000"
                        },
                        "status": "active",
                        "dispenseRequest": {
                            "validityPeriod": {
                                "start": "2015-11-07T00:00:00Z",
                                "end": "2016-11-06T00:00:00Z"
                            },
                            "quantity": {
                                "value": 60,
                                "unit": "tablet"
                            },
                            "numberOfRepeatsAllowed": 11,
                            "expectedSupplyDuration": {
                                "unit": "days",
                                "code": "d",
                                "system": "urn:oid:2.16.840.1.113883.6.8",
                                "value": 30
                            }
                        },
                        "prescriber": {
                            "reference": "Practitioner/c9d9b5f2ff14",
                            "display": "Physician Cdr Inpatient, MD"
                        },
                        "dateWritten": "2015-11-07",
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "MedicationOrder",
                        "medicationReference": {
                            "reference": "Medication/ac64d7622903",
                            "display": "rosiglitazone (AVANDIA) 2 MG tablet"
                        },
                        "id": "f8fedcd9e6e5125f98837ddbb0e3c58ee5d4a21028f2f6c8"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/f8fedcd9e6e51abf1ccafe879273191406236353093c8a7f",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "dosageInstruction": [
                            {
                                "asNeededBoolean": false,
                                "text": "Take 1 capsule (15 mg total) by mouth every morning. Max Daily Amount: 15 mg",
                                "route": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.698288.330",
                                            "code": "15",
                                            "display": "Oral"
                                        }
                                    ],
                                    "text": "Oral"
                                },
                                "method": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.798268.8600",
                                            "code": "11",
                                            "display": "Take"
                                        }
                                    ],
                                    "text": "Take"
                                },
                                "timing": {
                                    "repeat": {
                                        "periodUnits": "d",
                                        "period": 1,
                                        "boundsPeriod": {
                                            "start": "2015-11-07T00:00:00Z",
                                            "end": "2015-12-07T00:00:00Z"
                                        },
                                        "frequency": 1
                                    }
                                },
                                "doseQuantity": {
                                    "value": 1,
                                    "unit": "capsule"
                                }
                            }
                        ],
                        "identifier": [
                            {
                                "value": "971103",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268"
                            },
                            {
                                "value": "971103:2802249019",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.798268.801"
                            },
                            {
                                "value": "TsmsDHh.ouMCg8QqhDaAMSAB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:08.809Z",
                            "versionId": "9000000000000"
                        },
                        "status": "active",
                        "dispenseRequest": {
                            "validityPeriod": {
                                "start": "2015-11-07T00:00:00Z",
                                "end": "2015-12-07T00:00:00Z"
                            },
                            "expectedSupplyDuration": {
                                "unit": "days",
                                "code": "d",
                                "system": "urn:oid:2.16.840.1.113883.6.8",
                                "value": 30
                            },
                            "quantity": {
                                "value": 30,
                                "unit": "capsule"
                            }
                        },
                        "prescriber": {
                            "reference": "Practitioner/c9d9b5f2ff14",
                            "display": "Physician Cdr Inpatient, MD"
                        },
                        "dateWritten": "2015-11-07",
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "MedicationOrder",
                        "medicationReference": {
                            "reference": "Medication/0a00632a9d9b",
                            "display": "amphetamine-dextroamphetamine XR (ADDERALL XR) 15 MG 24 hr capsule"
                        },
                        "id": "f8fedcd9e6e51abf1ccafe879273191406236353093c8a7f"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/f8fedcd9e6e5301dec99a00efc990b111024b2c665ffaabf",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "dosageInstruction": [
                            {
                                "asNeededBoolean": true,
                                "text": "Chew 1 tablet (160 mg total) every 6 (six) hours as needed for mild pain for up to 10 days.",
                                "route": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.698288.330",
                                            "code": "15",
                                            "display": "Oral"
                                        }
                                    ],
                                    "text": "Oral"
                                },
                                "method": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.798268.8600",
                                            "code": "6",
                                            "display": "Chew"
                                        }
                                    ],
                                    "text": "Chew"
                                },
                                "timing": {
                                    "repeat": {
                                        "periodUnits": "h",
                                        "period": 6,
                                        "boundsPeriod": {
                                            "start": "2015-09-18T00:00:00Z",
                                            "end": "2015-09-28T00:00:00Z"
                                        },
                                        "frequency": 1
                                    }
                                },
                                "doseQuantity": {
                                    "value": 1,
                                    "unit": "tablet"
                                }
                            }
                        ],
                        "identifier": [
                            {
                                "value": "971100",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268"
                            },
                            {
                                "value": "971100:2819026638",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.798268.801"
                            },
                            {
                                "value": "TMfWKzxRbXf4fFrfhZOggZgB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:09.293Z",
                            "versionId": "9000000000000"
                        },
                        "status": "completed",
                        "dispenseRequest": {
                            "validityPeriod": {
                                "start": "2015-09-18T00:00:00Z",
                                "end": "2015-09-28T00:00:00Z"
                            },
                            "expectedSupplyDuration": {
                                "unit": "days",
                                "code": "d",
                                "system": "urn:oid:2.16.840.1.113883.6.8",
                                "value": 8
                            },
                            "quantity": {
                                "value": 30,
                                "unit": "tablet"
                            }
                        },
                        "prescriber": {
                            "reference": "Practitioner/9f84e523cf1d",
                            "display": "Physician Allergy, MD"
                        },
                        "dateWritten": "2015-09-18",
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "MedicationOrder",
                        "medicationReference": {
                            "reference": "Medication/208059939aa8",
                            "display": "acetaminophen (TYLENOL) 160 MG chewable tablet"
                        },
                        "id": "f8fedcd9e6e5301dec99a00efc990b111024b2c665ffaabf"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/f8fedcd9e6e536a9edcb3f1fc4e9e758de5238f6fe892ee8",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "dosageInstruction": [
                            {
                                "asNeededBoolean": false,
                                "text": "Take 1 capsule (30 mg total) by mouth 2 (two) times a day.",
                                "route": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.698288.330",
                                            "code": "15",
                                            "display": "Oral"
                                        }
                                    ],
                                    "text": "Oral"
                                },
                                "method": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.798268.8600",
                                            "code": "11",
                                            "display": "Take"
                                        }
                                    ],
                                    "text": "Take"
                                },
                                "timing": {
                                    "repeat": {
                                        "periodUnits": "h",
                                        "period": 12,
                                        "boundsPeriod": {
                                            "start": "2016-04-24T00:00:00Z",
                                            "end": "2016-05-24T00:00:00Z"
                                        },
                                        "frequency": 1
                                    }
                                },
                                "doseQuantity": {
                                    "value": 1,
                                    "unit": "capsule"
                                }
                            }
                        ],
                        "identifier": [
                            {
                                "value": "988734",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268"
                            },
                            {
                                "value": "988734:2183847081",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.798268.801"
                            },
                            {
                                "value": "TOAdyJH4CpZIaZfESZu71OwB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:08.557Z",
                            "versionId": "9000000000000"
                        },
                        "status": "active",
                        "dispenseRequest": {
                            "validityPeriod": {
                                "start": "2016-04-24T00:00:00Z",
                                "end": "2016-05-24T00:00:00Z"
                            },
                            "expectedSupplyDuration": {
                                "unit": "days",
                                "code": "d",
                                "system": "urn:oid:2.16.840.1.113883.6.8",
                                "value": 30
                            },
                            "quantity": {
                                "value": 60,
                                "unit": "capsule"
                            }
                        },
                        "prescriber": {
                            "reference": "Practitioner/6bc8e0032ced",
                            "display": "Physician Adolescent"
                        },
                        "dateWritten": "2016-04-24",
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "MedicationOrder",
                        "medicationReference": {
                            "reference": "Medication/a9aa6e6501da",
                            "display": "ISOtretinoin (ACCUTANE) 30 MG capsule"
                        },
                        "id": "f8fedcd9e6e536a9edcb3f1fc4e9e758de5238f6fe892ee8"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/f8fedcd9e6e53b00f9521369c36c9a1964f4ecd9d8649c29",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "dosageInstruction": [
                            {
                                "asNeededBoolean": false,
                                "text": "Take 1 tablet (100 mg total) by mouth 3 (three) times a day before meals.",
                                "route": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.698288.330",
                                            "code": "15",
                                            "display": "Oral"
                                        }
                                    ],
                                    "text": "Oral"
                                },
                                "method": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.798268.8600",
                                            "code": "11",
                                            "display": "Take"
                                        }
                                    ],
                                    "text": "Take"
                                },
                                "timing": {
                                    "repeat": {
                                        "periodUnits": "h",
                                        "period": 8,
                                        "boundsPeriod": {
                                            "start": "2015-11-07T00:00:00Z",
                                            "end": "2016-11-06T00:00:00Z"
                                        },
                                        "frequency": 1
                                    }
                                },
                                "doseQuantity": {
                                    "value": 1,
                                    "unit": "tablet"
                                }
                            }
                        ],
                        "identifier": [
                            {
                                "value": "971105",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268"
                            },
                            {
                                "value": "971105:2902914733",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.798268.801"
                            },
                            {
                                "value": "T85bAGuKFO3l.38SFGT3bKgB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:08.626Z",
                            "versionId": "9000000000000"
                        },
                        "status": "completed",
                        "dispenseRequest": {
                            "validityPeriod": {
                                "start": "2015-11-07T00:00:00Z",
                                "end": "2016-11-06T00:00:00Z"
                            },
                            "quantity": {
                                "value": 90,
                                "unit": "tablet"
                            },
                            "numberOfRepeatsAllowed": 11,
                            "expectedSupplyDuration": {
                                "unit": "days",
                                "code": "d",
                                "system": "urn:oid:2.16.840.1.113883.6.8",
                                "value": 30
                            }
                        },
                        "prescriber": {
                            "reference": "Practitioner/c9d9b5f2ff14",
                            "display": "Physician Cdr Inpatient, MD"
                        },
                        "dateWritten": "2015-11-07",
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "MedicationOrder",
                        "medicationReference": {
                            "reference": "Medication/7031857dcbb6",
                            "display": "allopurinol (ZYLOPRIM) 100 MG tablet"
                        },
                        "id": "f8fedcd9e6e53b00f9521369c36c9a1964f4ecd9d8649c29"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/f8fedcd9e6e54a2b0f5398a7c17575d150baba055dffa9f5",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "dosageInstruction": [
                            {
                                "asNeededBoolean": true,
                                "text": "Chew 1 tablet (160 mg total) every 6 (six) hours as needed for mild pain for up to 10 days.",
                                "route": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.698288.330",
                                            "code": "15",
                                            "display": "Oral"
                                        }
                                    ],
                                    "text": "Oral"
                                },
                                "method": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.798268.8600",
                                            "code": "6",
                                            "display": "Chew"
                                        }
                                    ],
                                    "text": "Chew"
                                },
                                "timing": {
                                    "repeat": {
                                        "periodUnits": "h",
                                        "period": 6,
                                        "boundsPeriod": {
                                            "start": "2015-11-03T00:00:00Z",
                                            "end": "2015-11-13T00:00:00Z"
                                        },
                                        "frequency": 1
                                    }
                                },
                                "doseQuantity": {
                                    "value": 1,
                                    "unit": "tablet"
                                }
                            }
                        ],
                        "identifier": [
                            {
                                "value": "971102",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268"
                            },
                            {
                                "value": "971102:2785471400",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.798268.801"
                            },
                            {
                                "value": "T26syDuhU3pf7qf3Kvv13lAB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:08.628Z",
                            "versionId": "9000000000000"
                        },
                        "status": "stopped",
                        "dispenseRequest": {
                            "validityPeriod": {
                                "start": "2015-11-03T00:00:00Z",
                                "end": "2015-11-13T00:00:00Z"
                            },
                            "expectedSupplyDuration": {
                                "unit": "days",
                                "code": "d",
                                "system": "urn:oid:2.16.840.1.113883.6.8",
                                "value": 8
                            },
                            "quantity": {
                                "value": 30,
                                "unit": "tablet"
                            }
                        },
                        "prescriber": {
                            "reference": "Practitioner/503076c23338",
                            "display": "Eric Newman, MD"
                        },
                        "dateWritten": "2015-11-03",
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "MedicationOrder",
                        "medicationReference": {
                            "reference": "Medication/208059939aa8",
                            "display": "acetaminophen (TYLENOL) 160 MG chewable tablet"
                        },
                        "reasonEnded": {
                            "text": "Therapy completed"
                        },
                        "id": "f8fedcd9e6e54a2b0f5398a7c17575d150baba055dffa9f5"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/f8fedcd9e6e5540b38082d46f7e94ba0557eb200ea50ba51",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "dosageInstruction": [
                            {
                                "asNeededBoolean": false,
                                "text": "Take 500 mg by mouth daily.",
                                "route": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.698288.330",
                                            "code": "15",
                                            "display": "Oral"
                                        }
                                    ],
                                    "text": "Oral"
                                },
                                "method": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.798268.8600",
                                            "code": "11",
                                            "display": "Take"
                                        }
                                    ],
                                    "text": "Take"
                                },
                                "timing": {
                                    "repeat": {
                                        "periodUnits": "d",
                                        "period": 1,
                                        "boundsPeriod": {
                                            "start": "2016-11-15T00:00:00Z"
                                        },
                                        "frequency": 1
                                    }
                                },
                                "doseQuantity": {
                                    "unit": "mg",
                                    "code": "mg",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 500
                                }
                            }
                        ],
                        "identifier": [
                            {
                                "value": "988737",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268"
                            },
                            {
                                "value": "988737:2133514224",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.798268.801"
                            },
                            {
                                "value": "T8XCYuYyE-DxTvy60Ea7M1wB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:08.237Z",
                            "versionId": "9000000000000"
                        },
                        "status": "active",
                        "dispenseRequest": {
                            "validityPeriod": {
                                "start": "2016-11-15T00:00:00Z"
                            }
                        },
                        "prescriber": {
                            "reference": "Practitioner/fb47bab5a210",
                            "display": "Historical Provider, MD"
                        },
                        "dateWritten": "2016-11-13",
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "MedicationOrder",
                        "medicationReference": {
                            "reference": "Medication/904b4ff9c05d",
                            "display": "azithromycin (ZITHROMAX) 500 MG tablet"
                        },
                        "id": "f8fedcd9e6e5540b38082d46f7e94ba0557eb200ea50ba51"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/f8fedcd9e6e581297ab3b8f639bb2d63e3ac81544f6878ab",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "dosageInstruction": [
                            {
                                "asNeededBoolean": true,
                                "text": "Take 1 tablet (650 mg total) by mouth every 8 (eight) hours as needed for mild pain for up to 10 days.",
                                "route": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.698288.330",
                                            "code": "15",
                                            "display": "Oral"
                                        }
                                    ],
                                    "text": "Oral"
                                },
                                "method": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.798268.8600",
                                            "code": "11",
                                            "display": "Take"
                                        }
                                    ],
                                    "text": "Take"
                                },
                                "timing": {
                                    "repeat": {
                                        "periodUnits": "h",
                                        "period": 8,
                                        "boundsPeriod": {
                                            "start": "2015-08-24T00:00:00Z",
                                            "end": "2015-09-03T00:00:00Z"
                                        },
                                        "frequency": 1
                                    }
                                },
                                "doseQuantity": {
                                    "value": 1,
                                    "unit": "tablet"
                                }
                            }
                        ],
                        "identifier": [
                            {
                                "value": "971097",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268"
                            },
                            {
                                "value": "971097:0412944669",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.798268.801"
                            },
                            {
                                "value": "TG49lm2wVQlU58.ppXAAYnQB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:08.852Z",
                            "versionId": "9000000000000"
                        },
                        "status": "completed",
                        "dispenseRequest": {
                            "validityPeriod": {
                                "start": "2015-08-24T00:00:00Z",
                                "end": "2015-09-03T00:00:00Z"
                            },
                            "expectedSupplyDuration": {
                                "unit": "days",
                                "code": "d",
                                "system": "urn:oid:2.16.840.1.113883.6.8",
                                "value": 10
                            },
                            "quantity": {
                                "value": 30,
                                "unit": "tablet"
                            }
                        },
                        "prescriber": {
                            "reference": "Practitioner/31903d3bb791",
                            "display": "Physician Family Medicine"
                        },
                        "dateWritten": "2015-08-24",
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "MedicationOrder",
                        "medicationReference": {
                            "reference": "Medication/5741431a235f",
                            "display": "acetaminophen (TYLENOL 8 HOUR) 650 MG 8 hr tablet"
                        },
                        "id": "f8fedcd9e6e581297ab3b8f639bb2d63e3ac81544f6878ab"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/f8fedcd9e6e586c5292346296975d530bf154f88a20e1ad5",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "dosageInstruction": [
                            {
                                "asNeededBoolean": false,
                                "text": "Take 125 mcg by mouth daily.",
                                "route": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.698288.330",
                                            "code": "15",
                                            "display": "Oral"
                                        }
                                    ],
                                    "text": "Oral"
                                },
                                "method": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.798268.8600",
                                            "code": "11",
                                            "display": "Take"
                                        }
                                    ],
                                    "text": "Take"
                                },
                                "timing": {
                                    "repeat": {
                                        "periodUnits": "d",
                                        "period": 1,
                                        "boundsPeriod": {
                                            "start": "2016-11-10T00:00:00Z"
                                        },
                                        "frequency": 1
                                    }
                                },
                                "doseQuantity": {
                                    "unit": "ug",
                                    "code": "ug",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 125
                                }
                            }
                        ],
                        "identifier": [
                            {
                                "value": "988738",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268"
                            },
                            {
                                "value": "988738:2385178509",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.798268.801"
                            },
                            {
                                "value": "Tr2CmDYEfRtWBvDpGSFTYgQB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:08.838Z",
                            "versionId": "9000000000000"
                        },
                        "status": "active",
                        "dispenseRequest": {
                            "validityPeriod": {
                                "start": "2016-11-10T00:00:00Z"
                            }
                        },
                        "prescriber": {
                            "reference": "Practitioner/fb47bab5a210",
                            "display": "Historical Provider, MD"
                        },
                        "dateWritten": "2016-11-10",
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "MedicationOrder",
                        "medicationReference": {
                            "reference": "Medication/f60bf89f6e8c",
                            "display": "digoxin (LANOXIN) 125 MCG tablet"
                        },
                        "id": "f8fedcd9e6e586c5292346296975d530bf154f88a20e1ad5"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/f8fedcd9e6e599c378f066c5537afbd4ae6c625d50925f4c",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "dosageInstruction": [
                            {
                                "asNeededBoolean": false,
                                "text": "Take 10 mg by mouth nightly.",
                                "route": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.698288.330",
                                            "code": "15",
                                            "display": "Oral"
                                        }
                                    ],
                                    "text": "Oral"
                                },
                                "method": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.4.798268.8600",
                                            "code": "11",
                                            "display": "Take"
                                        }
                                    ],
                                    "text": "Take"
                                },
                                "timing": {
                                    "repeat": {
                                        "periodUnits": "d",
                                        "period": 1,
                                        "boundsPeriod": {
                                            "start": "2016-11-15T00:00:00Z",
                                            "end": "2016-11-23T00:00:00Z"
                                        },
                                        "frequency": 1
                                    }
                                },
                                "doseQuantity": {
                                    "unit": "mg",
                                    "code": "mg",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 10
                                }
                            }
                        ],
                        "identifier": [
                            {
                                "value": "988736",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268"
                            },
                            {
                                "value": "988736:2150291843",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.798268.801"
                            },
                            {
                                "value": "T5YI1tCzs--JEvCICFbx8zgB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:08.282Z",
                            "versionId": "9000000000000"
                        },
                        "status": "active",
                        "dispenseRequest": {
                            "validityPeriod": {
                                "start": "2016-11-15T00:00:00Z",
                                "end": "2016-11-23T00:00:00Z"
                            }
                        },
                        "prescriber": {
                            "reference": "Practitioner/fb47bab5a210",
                            "display": "Historical Provider, MD"
                        },
                        "dateWritten": "2016-11-13",
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "MedicationOrder",
                        "medicationReference": {
                            "reference": "Medication/e9bdfcb918bd",
                            "display": "amitriptyline (ELAVIL) 10 MG tablet"
                        },
                        "id": "f8fedcd9e6e599c378f066c5537afbd4ae6c625d50925f4c"
                    }
                }
            ]
        },
        "MedicationDispense": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 0,
            "entry": []
        },
        "AllergyIntolerance": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 3,
            "entry": [
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/f8fedcd9e6e597f922acfb817fa71844de0c894d88bfd7c1",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "recordedDate": "2015-11-07T20:55:10.000Z",
                        "reaction": [
                            {
                                "onset": "2010-05-02T00:00:00Z",
                                "certainty": "confirmed",
                                "manifestation": [
                                    {
                                        "text": "Itching"
                                    }
                                ]
                            }
                        ],
                        "onset": "2010-05-02T00:00:00Z",
                        "identifier": [
                            {
                                "value": "TPcWiBG2h2E114Vh0sRT8fQB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:07.601Z",
                            "versionId": "9000000000000"
                        },
                        "status": "confirmed",
                        "substance": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/ndfrt",
                                    "code": "N0000007624",
                                    "display": "SHELLFISH-DERIVED PRODUCTS"
                                }
                            ],
                            "text": "SHELLFISH-DERIVED PRODUCTS"
                        },
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "AllergyIntolerance",
                        "criticality": "CRITL",
                        "id": "f8fedcd9e6e597f922acfb817fa71844de0c894d88bfd7c1",
                        "recorder": {
                            "reference": "Practitioner/99c389c2674d",
                            "display": "MOORE, NICK"
                        }
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/f8fedcd9e6e5c8e896b10440cf41c391874d400c0402e8bf",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "recordedDate": "2015-11-07T20:56:34.000Z",
                        "reaction": [
                            {
                                "onset": "2014-03-07T00:00:00Z",
                                "certainty": "confirmed",
                                "manifestation": [
                                    {
                                        "text": "Anaphylaxis"
                                    }
                                ]
                            }
                        ],
                        "onset": "2014-03-07T00:00:00Z",
                        "identifier": [
                            {
                                "value": "TKebKfLXzu6Sp.LY-IpvpmQB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:07.594Z",
                            "versionId": "9000000000000"
                        },
                        "status": "confirmed",
                        "substance": {
                            "coding": [
                                {
                                    "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                    "code": "892484",
                                    "display": "STRAWBERRY"
                                },
                                {
                                    "system": "http://fdasis.nlm.nih.gov",
                                    "code": "4J2TY8Y81V",
                                    "display": "STRAWBERRY"
                                }
                            ],
                            "text": "STRAWBERRY"
                        },
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "resourceType": "AllergyIntolerance",
                        "criticality": "CRITH",
                        "id": "f8fedcd9e6e5c8e896b10440cf41c391874d400c0402e8bf",
                        "recorder": {
                            "reference": "Practitioner/99c389c2674d",
                            "display": "MOORE, NICK"
                        }
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/f8fedcd9e6e5dc5963ef895e051d5e3df838e348eadce761",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "recordedDate": "2015-08-24T23:11:36.000Z",
                        "reaction": [
                            {
                                "certainty": "confirmed",
                                "note": {
                                    "text": "Severity low enough to be prescribed if needed."
                                },
                                "manifestation": [
                                    {
                                        "text": "Hives"
                                    }
                                ],
                                "onset": "2012-11-07T00:00:00Z"
                            }
                        ],
                        "onset": "2012-11-07T00:00:00Z",
                        "identifier": [
                            {
                                "value": "TBwnNbrAqC0Qw5Ha7AFT-2AB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:07.593Z",
                            "versionId": "9000000000000"
                        },
                        "status": "confirmed",
                        "substance": {
                            "coding": [
                                {
                                    "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                    "code": "7980",
                                    "display": "PENICILLIN G"
                                },
                                {
                                    "system": "http://fdasis.nlm.nih.gov",
                                    "code": "Q42T66VG0C",
                                    "display": "PENICILLIN G"
                                }
                            ],
                            "text": "PENICILLIN G"
                        },
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "note": {
                            "text": "Severity low enough to be prescribed if needed."
                        },
                        "resourceType": "AllergyIntolerance",
                        "criticality": "CRITL",
                        "id": "f8fedcd9e6e5dc5963ef895e051d5e3df838e348eadce761",
                        "recorder": {
                            "reference": "Practitioner/99c389c2674d",
                            "display": "MOORE, NICK"
                        }
                    }
                }
            ]
        },
        "ReferralRequest": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 0,
            "entry": []
        },
        "Observation": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 84,
            "entry": [
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/f8fedcd9e6e5036e9d131bf04809e1abb60bb27899c599bc",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "subject": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "valueString": "The following orders were created for panel order CBC and differential.\r\nProcedure Abnormality Status \r\n--------- ----------- ------ \r\nCBC auto differential[973580] Abnormal Final result \r\n\r\n\r\nPlease view results for these tests on the individual orders.",
                        "identifier": [
                            {
                                "value": "T.kP0ynFiOMogm8bwZdB6xk2FJJzmPZMiRLzWHpCpPxQB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:09.698Z",
                            "versionId": "9000000000000"
                        },
                        "status": "final",
                        "effectiveDateTime": "2015-10-03T20:21:00.000Z",
                        "code": {
                            "text": "Narrative"
                        },
                        "resourceType": "Observation",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        },
                        "id": "f8fedcd9e6e5036e9d131bf04809e1abb60bb27899c599bc"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/f8fedcd9e6e504829903a55284cc88babb16d6f3d78b50da",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "subject": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "identifier": [
                            {
                                "value": "Te4K6zjiXtD2Z7Fdc.AXXOK4fRc9ik5zXUAuWq9v65uAB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:10.314Z",
                            "versionId": "9000000000000"
                        },
                        "status": "preliminary",
                        "effectiveDateTime": "2015-10-03T20:20:00.000Z",
                        "comments": "This is a corrected result. Previous result was 44 on 10/3/2015 at 1522 CDT",
                        "referenceRange": [
                            {
                                "low": {
                                    "unit": "%",
                                    "code": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 41
                                },
                                "high": {
                                    "unit": "%",
                                    "code": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 53
                                },
                                "text": "41 - 53 %"
                            }
                        ],
                        "issued": "2015-10-03T20:20:00Z",
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "4544-3",
                                    "display": "Hematocrit [Volume Fraction] of Blood by Automated count"
                                }
                            ],
                            "text": "HEMATOCRIT (%) BY AUTOMATED COUNT"
                        },
                        "resourceType": "Observation",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        },
                        "valueQuantity": {
                            "unit": "%",
                            "code": "%",
                            "system": "http://unitsofmeasure.org",
                            "value": 41
                        },
                        "id": "f8fedcd9e6e504829903a55284cc88babb16d6f3d78b50da"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/f8fedcd9e6e5064e1161dd2d34440579204387cb880e7205",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "subject": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "identifier": [
                            {
                                "value": "Tl4xxjAMDmAdEfs3nmEjOkrvrspqwsUY16P..71sL7JIB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:10.564Z",
                            "versionId": "9000000000000"
                        },
                        "status": "final",
                        "effectiveDateTime": "2016-02-06T18:00:00.000Z",
                        "referenceRange": [
                            {
                                "low": {
                                    "unit": "mmol/L",
                                    "code": "mmol/L",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 99
                                },
                                "high": {
                                    "unit": "mmol/L",
                                    "code": "mmol/L",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 108
                                },
                                "text": "99 - 108 mmol/L"
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "2075-0",
                                    "display": "Chloride [Moles/volume] in Serum or Plasma"
                                }
                            ],
                            "text": "CHLORIDE [MMOL/L] IN SER/PLAS"
                        },
                        "resourceType": "Observation",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        },
                        "valueQuantity": {
                            "unit": "mmol/L",
                            "code": "mmol/L",
                            "system": "http://unitsofmeasure.org",
                            "value": 101
                        },
                        "id": "f8fedcd9e6e5064e1161dd2d34440579204387cb880e7205"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/f8fedcd9e6e507b84e6b62a69a32852cc0745af6627d0881",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "subject": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "identifier": [
                            {
                                "value": "Te4K6zjiXtD2Z7Fdc.AXXOLSx4mk1Lwsci2vRVLZSJHwB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:10.961Z",
                            "versionId": "9000000000000"
                        },
                        "status": "preliminary",
                        "effectiveDateTime": "2015-10-03T20:20:00.000Z",
                        "referenceRange": [
                            {
                                "low": {
                                    "unit": "pg",
                                    "code": "pg",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 26
                                },
                                "high": {
                                    "unit": "pg",
                                    "code": "pg",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 34
                                },
                                "text": "26.0 - 34.0 pg"
                            }
                        ],
                        "issued": "2015-10-03T20:20:00Z",
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "785-6",
                                    "display": "Erythrocyte mean corpuscular hemoglobin [Entitic mass] by Automated count"
                                }
                            ],
                            "text": "ERYTHROCYTE MEAN CORPUSCULAR HEMOGLOBIN [PG] BY AUTOMATED COUNT"
                        },
                        "resourceType": "Observation",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        },
                        "id": "f8fedcd9e6e507b84e6b62a69a32852cc0745af6627d0881"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/f8fedcd9e6e51103f635585454879a24d189e9b3f1baaf92",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "subject": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "identifier": [
                            {
                                "value": "Tnf7t0.SP6znu2Dc1kPsrog5qrfqH33vJQOxAByVedwC-xFrBhsufKRxbYH1hARD8B",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:10.641Z",
                            "versionId": "9000000000000"
                        },
                        "status": "final",
                        "effectiveDateTime": "2015-08-25T22:46:00.000Z",
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8716-3",
                                    "display": "Vital Signs grouping"
                                },
                                {
                                    "system": "http://loinc.org",
                                    "code": "9279-1",
                                    "display": "Respiratory rate"
                                }
                            ],
                            "text": "Resp"
                        },
                        "resourceType": "Observation",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        },
                        "performer": [
                            {
                                "reference": "Practitioner/99c389c2674d",
                                "display": "MOORE, NICK"
                            }
                        ],
                        "valueQuantity": {
                            "unit": "/min",
                            "code": "/min",
                            "system": "http://unitsofmeasure.org",
                            "value": 20
                        },
                        "id": "f8fedcd9e6e51103f635585454879a24d189e9b3f1baaf92"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/f8fedcd9e6e5150462fb6548007e4ee5723ec977183d668e",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "subject": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "identifier": [
                            {
                                "value": "TDsM-v6omSaRsvT.-NvxIwNhErI9xU8QLC5C9jKK.3bIB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:09.715Z",
                            "versionId": "9000000000000"
                        },
                        "status": "final",
                        "effectiveDateTime": "2015-10-03T20:21:00.000Z",
                        "referenceRange": [
                            {
                                "low": {
                                    "unit": "%",
                                    "code": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 3
                                },
                                "high": {
                                    "unit": "%",
                                    "code": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 10
                                },
                                "text": "3 - 10 %"
                            }
                        ],
                        "issued": "2015-10-03T20:21:00Z",
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "5905-5",
                                    "display": "Monocytes/100 leukocytes in Blood by Automated count"
                                }
                            ],
                            "text": "MONOCYTES/100 LEUKOCYTES IN BLOOD BY AUTOMATED COUNT"
                        },
                        "resourceType": "Observation",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        },
                        "id": "f8fedcd9e6e5150462fb6548007e4ee5723ec977183d668e"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/f8fedcd9e6e5164ecdcb7487bfe3e86630a5d097ff3555cd",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "subject": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "identifier": [
                            {
                                "value": "TdrL2iCYfK7IMmu0DpUbcQUMwUeJ5d4aTHz61XZoflSMB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:10.962Z",
                            "versionId": "9000000000000"
                        },
                        "status": "final",
                        "effectiveDateTime": "2015-11-08T16:18:00.000Z",
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "6298-4",
                                    "display": "Potassium [Moles/volume] in Blood"
                                }
                            ],
                            "text": "POTASSIUM BLOOD"
                        },
                        "resourceType": "Observation",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        },
                        "valueQuantity": {
                            "value": 3.1
                        },
                        "id": "f8fedcd9e6e5164ecdcb7487bfe3e86630a5d097ff3555cd"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/f8fedcd9e6e51a52576b97ed214321599008c78080ac2631",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "subject": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "identifier": [
                            {
                                "value": "Tnf7t0.SP6znu2Dc1kPsrog5qrfqH33vJQOxAByVedwC2C0rv4mz1Yn.XbBMaol8RB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:10.847Z",
                            "versionId": "9000000000000"
                        },
                        "status": "final",
                        "effectiveDateTime": "2015-08-25T22:46:00.000Z",
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8302-2",
                                    "display": "Body height"
                                },
                                {
                                    "system": "http://loinc.org",
                                    "code": "8716-3",
                                    "display": "Vital Signs grouping"
                                }
                            ],
                            "text": "Height"
                        },
                        "resourceType": "Observation",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        },
                        "performer": [
                            {
                                "reference": "Practitioner/99c389c2674d",
                                "display": "MOORE, NICK"
                            }
                        ],
                        "valueQuantity": {
                            "unit": "cm",
                            "code": "cm",
                            "system": "http://unitsofmeasure.org",
                            "value": 184
                        },
                        "id": "f8fedcd9e6e51a52576b97ed214321599008c78080ac2631"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/f8fedcd9e6e51f87eec6fce84519f33036cc32796ca5a8f6",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "subject": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "identifier": [
                            {
                                "value": "Tl4xxjAMDmAdEfs3nmEjOkiWW1NSaAcoag28gMuON5.QB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:07.684Z",
                            "versionId": "9000000000000"
                        },
                        "status": "final",
                        "effectiveDateTime": "2016-02-06T18:00:00.000Z",
                        "referenceRange": [
                            {
                                "low": {
                                    "unit": "mg/dL",
                                    "code": "mg/dL",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 4
                                },
                                "high": {
                                    "unit": "mg/dL",
                                    "code": "mg/dL",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 21
                                },
                                "text": "4 - 21 mg/dL"
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "3094-0",
                                    "display": "Urea nitrogen [Mass/volume] in Serum or Plasma"
                                }
                            ],
                            "text": "UREA NITROGEN [MG/DL] IN SER/PLAS"
                        },
                        "resourceType": "Observation",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        },
                        "valueQuantity": {
                            "unit": "mg/dL",
                            "code": "mg/dL",
                            "system": "http://unitsofmeasure.org",
                            "value": 14
                        },
                        "id": "f8fedcd9e6e51f87eec6fce84519f33036cc32796ca5a8f6"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/f8fedcd9e6e52289ee9aae759fafb584481c82d7262ee0a2",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "subject": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "identifier": [
                            {
                                "value": "Tl4xxjAMDmAdEfs3nmEjOkkzFPOncRpATzFoBT-Qx1hAB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:08.076Z",
                            "versionId": "9000000000000"
                        },
                        "status": "final",
                        "effectiveDateTime": "2016-02-06T18:00:00.000Z",
                        "referenceRange": [
                            {
                                "low": {
                                    "unit": "mg/dL",
                                    "code": "mg/dL",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 0.6
                                },
                                "high": {
                                    "unit": "mg/dL",
                                    "code": "mg/dL",
                                    "system": "http://unitsofmeasure.org",
                                    "value": 1.3
                                },
                                "text": "0.6 - 1.3 mg/dL"
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "2160-0",
                                    "display": "Creatinine [Mass/volume] in Serum or Plasma"
                                }
                            ],
                            "text": "CREATININE [MG/DL] IN SER/PLAS"
                        },
                        "resourceType": "Observation",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        },
                        "valueQuantity": {
                            "unit": "mg/dL",
                            "code": "mg/dL",
                            "system": "http://unitsofmeasure.org",
                            "value": 0.8
                        },
                        "id": "f8fedcd9e6e52289ee9aae759fafb584481c82d7262ee0a2"
                    }
                }
            ],
            "link": [
                {
                    "relation": "self",
                    "url": "https://api.1up.health/fhir/dstu2/Observation"
                },
                {
                    "relation": "next",
                    "url": "https://api.1up.health/fhir/dstu2/Observation?_afterid=f8fedcd9e6e52289ee9aae759fafb584481c82d7262ee0a2"
                }
            ]
        },
        "MedicationStatement": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 0,
            "entry": []
        },
        "Patient": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 1,
            "entry": [
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Patient/f8fedcd9e6e5",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "birthDate": "1985-08-01",
                        "identifier": [
                            {
                                "value": "E3826",
                                "use": "usual",
                                "system": "urn:oid:1.2.840.114350.1.13.327.1.7.5.737384.0"
                            },
                            {
                                "value": "203579",
                                "use": "usual",
                                "system": "urn:oid:1.2.3.4"
                            },
                            {
                                "value": "Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB",
                                "use": "usual",
                                "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:06.108Z",
                            "versionId": "9000000000000"
                        },
                        "address": [
                            {
                                "country": "US",
                                "state": "WI",
                                "city": "Verona",
                                "use": "home",
                                "line": [
                                    "1979 Milky Way Dr."
                                ],
                                "postalCode": "53593"
                            },
                            {
                                "country": "US",
                                "period": {
                                    "start": "2011-08-04T00:00:00Z",
                                    "end": "2014-08-04T00:00:00Z"
                                },
                                "city": "MADISON",
                                "use": "temp",
                                "line": [
                                    "5301 Tokay Blvd"
                                ],
                                "postalCode": "53711",
                                "state": "WI"
                            }
                        ],
                        "deceasedBoolean": false,
                        "name": [
                            {
                                "given": [
                                    "Jason"
                                ],
                                "text": "Jason Argonaut",
                                "family": [
                                    "Argonaut"
                                ],
                                "use": "usual"
                            }
                        ],
                        "gender": "male",
                        "active": true,
                        "careProvider": [
                            {
                                "reference": "Practitioner/31903d3bb791",
                                "display": "Physician Family Medicine"
                            }
                        ],
                        "maritalStatus": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/ValueSet/marital-status",
                                    "code": "S",
                                    "display": "Never Married"
                                }
                            ],
                            "text": "Single"
                        },
                        "resourceType": "Patient",
                        "extension": [
                            {
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "2.16.840.1.113883.5.104",
                                            "code": "2028-9",
                                            "display": "Asian"
                                        }
                                    ],
                                    "text": "Asian"
                                },
                                "url": "http://hl7.org/fhir/StructureDefinition/us-core-race"
                            },
                            {
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "2.16.840.1.113883.5.50",
                                            "code": "2186-5",
                                            "display": "Not Hispanic or Latino"
                                        }
                                    ],
                                    "text": "Not Hispanic or Latino"
                                },
                                "url": "http://hl7.org/fhir/StructureDefinition/us-core-ethnicity"
                            },
                            {
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://hl7.org/fhir/v3/AdministrativeGender",
                                            "code": "M",
                                            "display": "Male"
                                        }
                                    ],
                                    "text": "Male"
                                },
                                "url": "http://hl7.org/fhir/StructureDefinition/us-core-birth-sex"
                            }
                        ],
                        "telecom": [
                            {
                                "value": "608-271-9000",
                                "use": "home",
                                "system": "phone"
                            },
                            {
                                "value": "608-771-9000",
                                "use": "work",
                                "system": "phone"
                            },
                            {
                                "value": "608-771-9000",
                                "use": "mobile",
                                "system": "phone"
                            },
                            {
                                "value": "608-771-9000",
                                "use": "home",
                                "system": "fax"
                            },
                            {
                                "period": {
                                    "start": "2011-08-04T00:00:00Z",
                                    "end": "2014-08-04T00:00:00Z"
                                },
                                "system": "phone",
                                "value": "608-771-9000",
                                "use": "temp"
                            },
                            {
                                "value": "open@epic.com",
                                "system": "email"
                            }
                        ],
                        "id": "f8fedcd9e6e5",
                        "communication": [
                            {
                                "preferred": true,
                                "language": {
                                    "coding": [
                                        {
                                            "system": "urn:oid:2.16.840.1.113883.6.99",
                                            "code": "en",
                                            "display": "English"
                                        }
                                    ],
                                    "text": "English"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "ExplanationOfBenefit": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 0,
            "entry": []
        },
        "Condition": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 6,
            "entry": [
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Condition/f8fedcd9e6e51b76b16b7a84dac69e1fdffd7637b77f3ae8",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "clinicalStatus": "active",
                        "identifier": [
                            {
                                "value": "ToXGIl7BNrvoF6BVybVSoawB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:06.780Z",
                            "versionId": "9000000000000"
                        },
                        "onsetDateTime": "2015-08-24",
                        "asserter": {
                            "reference": "Practitioner/99c389c2674d",
                            "display": "MOORE, NICK"
                        },
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "code": {
                            "coding": [
                                {
                                    "system": "urn:oid:2.16.840.1.113883.6.90",
                                    "code": "R05",
                                    "display": "Chronic cough"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "68154008",
                                    "display": "Chronic cough (finding)"
                                }
                            ],
                            "text": "Chronic cough"
                        },
                        "dateRecorded": "2015-08-24",
                        "resourceType": "Condition",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "29308-4",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "439401001",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://hl7.org/fhir/condition-category",
                                    "code": "diagnosis",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://argonautwiki.hl7.org/extension-codes",
                                    "code": "problem",
                                    "display": "Problem"
                                }
                            ],
                            "text": "Diagnosis"
                        },
                        "verificationStatus": "confirmed",
                        "id": "f8fedcd9e6e51b76b16b7a84dac69e1fdffd7637b77f3ae8",
                        "severity": {
                            "text": "Medium"
                        }
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Condition/f8fedcd9e6e51d9bd5d973334b9da14c159a540cc6562dd5",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "clinicalStatus": "active",
                        "identifier": [
                            {
                                "value": "T1kK.xqvU20cEJe860G4aKgB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:06.616Z",
                            "versionId": "9000000000000"
                        },
                        "onsetDateTime": "2015-08-24",
                        "asserter": {
                            "reference": "Practitioner/99c389c2674d",
                            "display": "MOORE, NICK"
                        },
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "code": {
                            "coding": [
                                {
                                    "system": "urn:oid:2.16.840.1.113883.6.90",
                                    "code": "F40.00",
                                    "display": "Agoraphobia"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "70691001",
                                    "display": "Agoraphobia (disorder)"
                                }
                            ],
                            "text": "Agoraphobia"
                        },
                        "dateRecorded": "2015-08-24",
                        "resourceType": "Condition",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "29308-4",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "439401001",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://hl7.org/fhir/condition-category",
                                    "code": "diagnosis",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://argonautwiki.hl7.org/extension-codes",
                                    "code": "problem",
                                    "display": "Problem"
                                }
                            ],
                            "text": "Diagnosis"
                        },
                        "verificationStatus": "confirmed",
                        "id": "f8fedcd9e6e51d9bd5d973334b9da14c159a540cc6562dd5",
                        "severity": {
                            "text": "Medium"
                        }
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Condition/f8fedcd9e6e5376c64785b303a5aedf76aebba93d775384f",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "clinicalStatus": "active",
                        "identifier": [
                            {
                                "value": "TOVSAAQTrMr9e45nCzc8S5wB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:06.552Z",
                            "versionId": "9000000000000"
                        },
                        "onsetDateTime": "2016-02-11",
                        "asserter": {
                            "reference": "Practitioner/99c389c2674d",
                            "display": "MOORE, NICK"
                        },
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "code": {
                            "coding": [
                                {
                                    "system": "urn:oid:2.16.840.1.113883.6.90",
                                    "code": "R79.89",
                                    "display": "Hemoglobin A1c above reference range"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "444751005",
                                    "display": "Hemoglobin A1c above reference range (finding)"
                                }
                            ],
                            "text": "Hemoglobin A1c above reference range"
                        },
                        "dateRecorded": "2016-02-11",
                        "resourceType": "Condition",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "29308-4",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "439401001",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://hl7.org/fhir/condition-category",
                                    "code": "diagnosis",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://argonautwiki.hl7.org/extension-codes",
                                    "code": "problem",
                                    "display": "Problem"
                                }
                            ],
                            "text": "Diagnosis"
                        },
                        "verificationStatus": "confirmed",
                        "id": "f8fedcd9e6e5376c64785b303a5aedf76aebba93d775384f"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Condition/f8fedcd9e6e541eaedde7488e6b6d0ddf8d2b8d65f93896a",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "clinicalStatus": "active",
                        "identifier": [
                            {
                                "value": "T14QqO8NyASby4jGtzuSA6gB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:06.781Z",
                            "versionId": "9000000000000"
                        },
                        "onsetDateTime": "2015-08-24",
                        "asserter": {
                            "reference": "Practitioner/99c389c2674d",
                            "display": "MOORE, NICK"
                        },
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "code": {
                            "coding": [
                                {
                                    "system": "urn:oid:2.16.840.1.113883.6.90",
                                    "code": "J45.909",
                                    "display": "Asthma"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "195967001",
                                    "display": "Asthma (disorder)"
                                }
                            ],
                            "text": "Asthma"
                        },
                        "dateRecorded": "2015-08-24",
                        "resourceType": "Condition",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "29308-4",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "439401001",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://hl7.org/fhir/condition-category",
                                    "code": "diagnosis",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://argonautwiki.hl7.org/extension-codes",
                                    "code": "problem",
                                    "display": "Problem"
                                },
                                {
                                    "system": "http://loinc.org",
                                    "code": "75310-3",
                                    "display": "Health concerns"
                                },
                                {
                                    "system": "http://argonautwiki.hl7.org/extension-codes",
                                    "code": "health-concern",
                                    "display": "Health Concern"
                                }
                            ],
                            "text": "Diagnosis - Health Concern"
                        },
                        "verificationStatus": "confirmed",
                        "id": "f8fedcd9e6e541eaedde7488e6b6d0ddf8d2b8d65f93896a",
                        "severity": {
                            "text": "Low"
                        }
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Condition/f8fedcd9e6e55d1cea835eee38cfc585cf00f72211fa99a5",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "clinicalStatus": "active",
                        "identifier": [
                            {
                                "value": "T-HzNQh62IyOLOuPFOaTtDgB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:06.795Z",
                            "versionId": "9000000000000"
                        },
                        "onsetDateTime": "2016-04-23",
                        "asserter": {
                            "reference": "Practitioner/99c389c2674d",
                            "display": "MOORE, NICK"
                        },
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "code": {
                            "coding": [
                                {
                                    "system": "urn:oid:2.16.840.1.113883.6.90",
                                    "code": "A92.8",
                                    "display": "Zika virus disease"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "3928002",
                                    "display": "Zika virus disease (disorder)"
                                }
                            ],
                            "text": "Zika virus disease"
                        },
                        "dateRecorded": "2016-04-23",
                        "resourceType": "Condition",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "29308-4",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "439401001",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://hl7.org/fhir/condition-category",
                                    "code": "diagnosis",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://argonautwiki.hl7.org/extension-codes",
                                    "code": "problem",
                                    "display": "Problem"
                                }
                            ],
                            "text": "Diagnosis"
                        },
                        "verificationStatus": "confirmed",
                        "id": "f8fedcd9e6e55d1cea835eee38cfc585cf00f72211fa99a5"
                    }
                },
                {
                    "fullUrl": "https://api.1up.health/fhir/dstu2/Condition/f8fedcd9e6e5c5de892a33dd2aa558f8956457ea99c8ead9",
                    "search": {
                        "mode": "match"
                    },
                    "resource": {
                        "clinicalStatus": "active",
                        "identifier": [
                            {
                                "value": "TajPohVuPYfDdU-wGcm.KMgB",
                                "system": "https:open-ic.epic.com"
                            }
                        ],
                        "meta": {
                            "lastUpdated": "2020-05-04T21:21:06.798Z",
                            "versionId": "9000000000000"
                        },
                        "onsetDateTime": "2016-04-23",
                        "asserter": {
                            "reference": "Practitioner/99c389c2674d",
                            "display": "MOORE, NICK"
                        },
                        "patient": {
                            "reference": "Patient/f8fedcd9e6e5"
                        },
                        "code": {
                            "coding": [
                                {
                                    "system": "urn:oid:2.16.840.1.113883.6.90",
                                    "code": "A15.0",
                                    "display": "TB (pulmonary tuberculosis)"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "154283005",
                                    "display": "Pulmonary tuberculosis (disorder)"
                                }
                            ],
                            "text": "TB (pulmonary tuberculosis)"
                        },
                        "dateRecorded": "2016-04-23",
                        "resourceType": "Condition",
                        "category": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "29308-4",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "439401001",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://hl7.org/fhir/condition-category",
                                    "code": "diagnosis",
                                    "display": "Diagnosis"
                                },
                                {
                                    "system": "http://argonautwiki.hl7.org/extension-codes",
                                    "code": "problem",
                                    "display": "Problem"
                                }
                            ],
                            "text": "Diagnosis"
                        },
                        "verificationStatus": "confirmed",
                        "id": "f8fedcd9e6e5c5de892a33dd2aa558f8956457ea99c8ead9"
                    }
                }
            ]
        },
        "Encounter": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 0,
            "entry": []
        },
        "Coverage": {
            "resourceType": "Bundle",
            "type": "searchset",
            "total": 0,
            "entry": []
        }
    }
}

export default FAKE_DASHBOARD_DATA;