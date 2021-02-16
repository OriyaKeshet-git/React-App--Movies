//import Raven from 'raven-js';

function init()
{
    //  Raven.config('https://f7711ce1b6324ebb9f4a438ffcbf5aba@o503318.ingest.sentry.io/5588340', {
    //   release: "1.3.0",
    //   environment: 'development-test',
    // }).install()
    
}

function log(error)
{
    // Raven.captureException(error);


}

export default {
    init,
    log
};