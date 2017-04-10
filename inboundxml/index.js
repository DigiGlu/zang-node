'use strict';

/**
 * @module inboundxml
 */

const xml = require('xml');
const conference = require('./conference');
const dial = require('./dial');
const gather = require('./gather');
const getspeech = require('./getspeech');
const hangup = require('./hangup');
const number = require('./number');
const pause = require('./pause');
const ping = require('./ping');
const play = require('./play');
const playlastrecording = require('./playlastrecording');
const record = require('./record');
const redirect = require('./redirect');
const reject = require('./reject');
const response = require('./response');
const say = require('./say');
const sip = require('./sip');
const sms = require('./sms');
const user = require('./user');


module.exports = {
    /**
     * Creates XML from XML definition
     * @param {Object} xmlDefinition
     * @returns {Object}
     */
    build: function (xmlDefinition) {
        return xml(xmlDefinition, {indent: '  '});
    },
    /**
     * Creates Conference XML node
     * @see module:inboundxml/conference
     */
    conference,
    /**
     * Creates Dial XML node
     * @see module:inboundxml/dial
     */
    dial,
    /**
     * Creates Gather XML node
     * @see module:inboundxml/gather
     */
    gather,
    /**
     * Creates Gather XML node
     * @see module:inboundxml/gather
     */
    getspeech,
    /**
     * Creates Hangup XML node
     * @see module:inboundxml/hangup
     */
    hangup,
    /**
     * Creates Number XML node
     * @see module:inboundxml/number
     */
    number,
    /**
     * Creates Pause XML node
     * @see module:inboundxml/pause
     */
    pause,
    /**
     * Creates Ping XML node
     * @see module:inboundxml/ping
     */
    ping,
    /**
     * Creates Play XML node
     * @see module:inboundxml/play
     */
    play,
    /**
     * Creates PlayLastRecording XML node
     * @see module:inboundxml/playlastrecording
     */
    playlastrecording,
    /**
     * Creates Record XML node
     * @see module:inboundxml/record
     */
    record,
    /**
     * Creates Redirect XML node
     * @see module:inboundxml/redirect
     */
    redirect,
    /**
     * Creates Reject XML node
     * @see module:inboundxml/reject
     */
    reject,
    /**
     * Creates Response XML node
     * @see module:inboundxml/response
     */
    response,
    /**
     * Creates Say XML node
     * @see module:inboundxml/say
     */
    say,
    /**
     * Creates Sip XML node
     * @see module:inboundxml/sip
     */
    sip,
    /**
     * Creates Sms XML node
     * @see module:inboundxml/sms
     */
    sms,
    /**
     * Creates User XML node
     * @see module:inboundxml/user
     */
    user
};
