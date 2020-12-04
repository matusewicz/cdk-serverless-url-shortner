#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkServerlessUrlShortnerStack } from '../lib/cdk-serverless-url-shortner-stack';

const app = new cdk.App();
new CdkServerlessUrlShortnerStack(app, 'CdkServerlessUrlShortnerStack');
