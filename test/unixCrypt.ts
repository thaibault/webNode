// @flow
// -*- coding: utf-8 -*-
'use strict'
import registerTest from 'clientnode/test'

import unixCrypt from '../unixCrypt'

registerTest(async function():Promise<void> {
    this.module('unixCrypt')
    this.test('unixCrypt', (assert:Object):void => {
        for (const test:Array<any> of [
            ['', 'ba', 'baJyGvzMWSid.'],
            ['ba', '', 'aayPdtR3JLIkk'],
            ['', '', 'aaQSqAReePlq6'],
            ['foo', 'ba', 'ba4TuD1iozTxw'],
            ['random long string', 'hi', 'hib8W/d4WOlU.'],
            ['foob', 'ar', 'arlEKn0OzVJn.'],
            ['Hello World! This is Unix crypt(3)!', 'ux', 'uxNS5oJDUz4Sc']
        ])
            assert.strictEqual(unixCrypt(...test.slice(0, 2)), test[2])
    })
}, 'plain')
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion