// The MIT License (MIT)
//
// Copyright (c) 2018 Firebase
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { crashlytics } from 'firebase-functions';

/** Create an Issue */
export function makeIssue(
  /** Fields of Issue that you'd like to specify. */
  fields: { [key: string]: string },
): crashlytics.Issue {
  const template = {
    issueId: '',
    issueTitle: '',
    appInfo: {
      appName: '',
      appPlatform: '',
      appId: '',
      latestAppVersion: '',
    },
    createTime: '',
  };
  return Object.assign(template, fields);
}

/** Fetch an example Issue already populated with data. */
export function exampleIssue(): crashlytics.Issue {
  return {
    issueId: 'wdSD3sdf9890',
    issueTitle: 'Crash',
    appInfo: {
      appName: 'My App',
      appPlatform: 'ios',
      appId: '2342314923',
      latestAppVersion: '1.0',
    },
    createTime: '2017-02-02T23:06:26.124Z',
    resolvedTime: '2017-02-02T23:07:45.114Z',
    velocityAlert: {
      crashPercentage: 0.3,
      crashes: 234,
    },
  };
}
