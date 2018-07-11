import { expect } from 'chai';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import sinon from 'sinon';
import { of } from 'rxjs';
import HelloWorldComponent from '../../src/components/HelloWorld.vue';
import * as store from '../../src/store/helloWorld.store';
import * as helloWorldService from '../../src/services/HelloWorld.service';

describe.only('HelloWorld component tests',
  () => {
    let storeMock;
    let helloWorldServiceMock;

    beforeEach(() => {
      helloWorldServiceMock = sinon.mock(helloWorldService.default);
      helloWorldServiceMock
        .expects('callWebApi')
        .once()
        .returns(of('message from mocked api'));

      storeMock = sinon.mock(store.default);
      storeMock
        .expects('commit')
        .once()
        .withArgs('saveMessage', 'message from mocked api');
      storeMock.object.state.message = 'mocked message';
    });

    it('commit should be called on call to web api', () => {
      HelloWorldComponent.methods.callWebApi();
      storeMock.verify();
    });

    it('callWebApi should be called on call to web api', () => {
      HelloWorldComponent.methods.callWebApi();
      helloWorldServiceMock.verify();
    });

    it('computed.message should return mocked message', () => {
      const message = HelloWorldComponent.computed.message();
      expect(message).to.be.equal('mocked message');
    });

    afterEach(() => {
      helloWorldServiceMock.restore();
      storeMock.restore();
    });
  });
