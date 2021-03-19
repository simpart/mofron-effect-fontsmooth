/**
 * @file mofron-effect-fontsmooth/index.js
 * @brief font smooth effect for mofron component
 *        set font-smoothing style to target dom
 * @license MIT
 */
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) key-value: effect config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("FontSmooth");
            
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @type private
     */
    contents (cmp) {
        try {
	    let style = {
                "-webkit-font-smoothing" : "antialiased",
                "-moz-osx-font-smoothing" : "grayscale"
	    };
            cmputl.rstyle(cmp, style);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
