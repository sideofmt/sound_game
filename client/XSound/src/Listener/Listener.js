(function(global) {
    'use strict';

    /**
     * This private class defines property for audio listener.
     * These properties relate to properties of PannerNode.
     * @param {AudioContext} context This argument is in order to use the interfaces of Web Audio API.
     * @constructor
     */
    function Listener(context) {
        // the instance of AudioListener
        this.listener = context.listener;

        // Set default value
        this.listener.dopplerFactor = 1;
        this.listener.speedOfSound  = 343.3;

        this.positions  = {'x': 0, 'y': 0, 'z': 0};
        this.fronts     = {'x': 0, 'y': 0, 'z': -1};
        this.ups        = {'x': 0, 'y': 1, 'z': 0};
        this.velocities = {'x': 0, 'y': 0, 'z': 0};

        this.listener.setPosition(this.positions.x, this.positions.y, this.positions.z);
        this.listener.setOrientation(this.fronts.x, this.fronts.y, this.fronts.z, this.ups.x, this.ups.y, this.ups.z);
        this.listener.setVelocity(this.velocities.x, this.velocities.y, this.velocities.z);
    }

    /**
     * This method is getter or setter for parameters.
     * @param {string|object} key This argument is property name in the case of string type.
     *     This argument is pair of property and value in the case of associative array.
     * @param {number} value This argument is the value of designated property. If this argument is omitted, This method is getter.
     * @return {number|Listener} This is returned as the value of designated property in the case of getter. Otherwise, this is returned for method chain.
     */
    Listener.prototype.param = function(key, value) {
        if (Object.prototype.toString.call(arguments[0]) === '[object Object]') {
            // Associative array
            for (var k in arguments[0]) {
                this.param(k, arguments[0][k]);
            }
        } else {
            var k = String(key).replace(/-/g, '').toLowerCase();

            switch (k) {
                case 'dopplerfactor':
                    if (value === undefined) {
                        // Getter
                        return this.listener.dopplerFactor;
                    } else {
                        // Setter
                        var v = parseFloat(value);

                        if (v >= 0) {
                            this.listener.dopplerFactor = v;
                        }
                    }

                    break;
                case 'speedofsound':
                    if (value === undefined) {
                        // Getter
                        return this.listener.speedOfSound;
                    } else {
                        // Setter
                        var v = parseFloat(value);

                        if (v >= 0) {
                            this.listener.speedOfSound = v;
                        }
                    }

                    break;
                case 'x':
                case 'y':
                case 'z':
                    if (value === undefined) {
                        // Getter
                        return this.positions[k];
                    } else {
                        // Setter
                        var v = parseFloat(value);

                        if (!isNaN(v)) {
                            this.positions[k] = v;
                            this.listener.setPosition(this.positions.x, this.positions.y, this.positions.z);
                        }
                    }

                    break;
                case 'fx':
                case 'fy':
                case 'fz':
                    if (value === undefined) {
                        // Getter
                        return this.fronts[k.charAt(1)];
                    } else {
                        // Setter
                        var v = parseFloat(value);

                        if (!isNaN(v)) {
                            this.fronts[k.charAt(1)] = v;
                            this.listener.setOrientation(this.fronts.x, this.fronts.y, this.fronts.z, this.ups.x, this.ups.y, this.ups.z);
                        }
                    }

                    break;
                case 'ux':
                case 'uy':
                case 'uz':
                    if (value === undefined) {
                        // Getter
                        return this.ups[k.charAt(1)];
                    } else {
                        // Setter
                        var v = parseFloat(value);

                        if (!isNaN(v)) {
                            this.ups[k.charAt(1)] = v;
                            this.listener.setOrientation(this.fronts.x, this.fronts.y, this.fronts.z, this.ups.x, this.ups.y, this.ups.z);
                        }
                    }

                    break;
                case 'vx':
                case 'vy':
                case 'vz':
                    if (value === undefined) {
                        // Setter
                        return this.velocities[k.charAt(1)];
                    } else {
                        // Getter
                        var v = parseFloat(value);

                        if (!isNaN(v)) {
                            this.velocities[k.charAt(1)] = v;
                            this.listener.setVelocity(this.velocities.x, this.velocities.y, this.velocities.z);
                        }
                    }

                    break;
                default:
                    break;
            }
        }

        return this;
    };

    /**
     * This method gets effecter's parameters as associative array.
     * @return {object}
     */
    Listener.prototype.params = function() {
        var params = {
            'dopplerFactor': this.listener.dopplerFactor,
            'speedOfSound' : this.listener.speedOfSound,
            'positions'    : this.positions,
            'fronts'       : this.fronts,
            'ups'          : this.ups,
            'velocities'   : this.velocities
        };

        return params;
    };

    /**
     * This method gets effecter's parameters as JSON.
     * @return {string}
     */
    Listener.prototype.toJSON = function() {
        return JSON.stringify(this.params());
    };

    /** @override */
    Listener.prototype.toString = function() {
        return '[SoundModule Listener]';
    };

    // Export
    global.Listener = Listener;
    global.listener = new Listener(audiocontext);

})(window);
