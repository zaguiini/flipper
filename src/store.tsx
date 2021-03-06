/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {createStore} from 'redux';
import reducers, {Actions, State as StoreState} from './reducers/index';
import {stateSanitizer} from './utils/reduxDevToolsConfig';

export const store = createStore<StoreState, Actions, any, any>(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__({
        // @ts-ignore: stateSanitizer is not part of type definition.
        stateSanitizer,
      })
    : undefined,
);
