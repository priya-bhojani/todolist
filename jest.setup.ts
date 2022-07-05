import '@testing-library/jest-dom/extend-expect';

import { configure } from '@testing-library/react';
import { GlobalWithFetchMock } from 'jest-fetch-mock';

const customGlobal = global as unknown as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

configure({ testIdAttribute: 'data-test-id' });
